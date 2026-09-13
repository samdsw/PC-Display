// Gives this service access to LibreHardwareMonitor types such as Computer,
// IHardware, and ISensor.
using LibreHardwareMonitor.Hardware;

// Creates the ASP.NET Core application builder. The builder is where services
// (such as CORS) are registered before the web server starts.
var builder = WebApplication.CreateBuilder(args);

// Angular runs on http://localhost:4200 during development, while this C# API
// will run on http://localhost:5000. Browsers normally block requests between
// different origins, so CORS explicitly allows the Angular development server.
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Builds the actual web application from the configuration above.
var app = builder.Build();

// Turns on the CORS policy for requests handled by this application.
app.UseCors();

// Computer is LibreHardwareMonitor's entry point to the local machine's
// hardware. Enable only the groups of sensors we need for the first version.
var computer = new Computer
{
    IsCpuEnabled = true,
    IsGpuEnabled = true,
    IsMemoryEnabled = true,
};

// Opens the connection to the machine's hardware sensors.
computer.Open();

// When the server stops (for example, after Ctrl+C), close the hardware
// monitor cleanly rather than leaving it open.
app.Lifetime.ApplicationStopping.Register(computer.Close);

// Creates a GET endpoint. Visiting http://localhost:5000/api/sensors will
// execute this code and return the current sensor values as JSON.
app.MapGet("/api/sensors", () =>
{
    // LibreHardwareMonitor does not continuously refresh every sensor by
    // itself. The visitor asks the computer and all nested hardware devices
    // to update immediately before we read their values.
    computer.Accept(new UpdateVisitor());

    // Flatten the hardware tree (CPU, GPU, memory, and any sub-hardware) into
    // one list of sensors. Sensors without a value are excluded.
    var sensors = GetAllHardware(computer.Hardware)
        .SelectMany(hardware => hardware.Sensors.Select(sensor => new
        {
            hardware,
            sensor
        }))
        .Where(item => item.sensor.Value.HasValue)
        .Select(item => new
        {
            // This anonymous object becomes one JSON object in the response.
            hardware = item.hardware.Name,
            hardwareType = item.hardware.HardwareType.ToString(),
            name = item.sensor.Name,
            type = item.sensor.SensorType.ToString(),
            value = item.sensor.Value,

            // The library gives us a sensor type, not a display unit. This
            // mapping makes the raw JSON easier to inspect in the browser.
            unit = item.sensor.SensorType switch
            {
                SensorType.Temperature => "°C",
                SensorType.Load => "%",
                SensorType.Fan => "RPM",
                SensorType.Clock => "MHz",
                SensorType.Power => "W",
                _ => ""
            }
        });

    // Serializes the sensor collection into an HTTP 200 JSON response.
    return Results.Ok(sensors);
});

// Starts the local server. Using a fixed port makes the future Angular and
// WebSocket connection addresses predictable during development.
app.Run("http://localhost:5000");

// Hardware can contain child hardware (for example, a GPU may expose
// sub-devices). This recursive method returns every hardware item, no matter
// how deeply nested it is.
static IEnumerable<IHardware> GetAllHardware(IEnumerable<IHardware> hardwareItems)
{
    foreach (var hardware in hardwareItems)
    {
        yield return hardware;

        foreach (var subHardware in GetAllHardware(hardware.SubHardware))
        {
            yield return subHardware;
        }
    }
}

// LibreHardwareMonitor uses the visitor pattern to walk through the computer.
// Our visitor's job is simply to call Update() on every piece of hardware.
public sealed class UpdateVisitor : IVisitor
{
    // Starts walking through the computer's complete hardware tree.
    public void VisitComputer(IComputer computer)
    {
        computer.Traverse(this);
    }

    // Refreshes this hardware item's readings, then visits its child devices.
    public void VisitHardware(IHardware hardware)
    {
        hardware.Update();

        foreach (var subHardware in hardware.SubHardware)
        {
            subHardware.Accept(this);
        }
    }

    // We do not need to perform work for individual sensors during traversal.
    // Their values are read later in the /api/sensors endpoint.
    public void VisitSensor(ISensor sensor)
    {
    }

    // LibreHardwareMonitor also exposes configurable parameters. We do not
    // need them yet, but IVisitor requires this method.
    public void VisitParameter(IParameter parameter)
    {
    }
}
