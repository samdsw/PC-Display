# CPU Temperature Investigation

> **Status:** Deferred while the Spotify dashboard feature is developed.  
> **Last reviewed:** 2026-09-27

## Current Result

The C# `monitor-service` successfully reads live CPU load, RAM data, GPU load,
and GPU temperatures. It detects this CPU temperature sensor:

```text
Hardware: AMD Ryzen 7 9800X3D
Sensor: Core (Tctl/Tdie)
Type: Temperature
Value: 0°C
```

The service refreshes sensor data before each request, and other changing
values are returned correctly. Therefore this is not an Angular, HTTP,
polling, or sensor-refresh problem.

## Likely Cause

This appears to be a LibreHardwareMonitor limitation for newer Ryzen CPUs.
The project's own Ryzen sensor source notes that temperature readout is not
working for Ryzen 7000/9000 models. The project also has a report specifically
about CPU temperature not appearing on a Ryzen 7 9800X3D.

- [LibreHardwareMonitor Ryzen sensor code](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/blob/master/LibreHardwareMonitorLib/Hardware/Cpu/Amd17Cpu.cs)
- [9800X3D temperature issue #2130](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/issues/2130)
- [Similar 0°C Ryzen report #2348](https://github.com/LibreHardwareMonitor/LibreHardwareMonitor/issues/2348)

## Do Not Do Yet

- Do not send `0°C` to the Angular dashboard as a real CPU temperature.
- Do not remove the working CPU usage, RAM, or GPU metric pipeline.
- Do not assume a GPU temperature can substitute for CPU temperature.

## Investigation Checklist

### 1. Test motherboard-provided temperature sensors

In `monitor-service/Program.cs`, add this to the `Computer` configuration:

```csharp
IsMotherboardEnabled = true,
```

Restart the service and inspect `/api/sensors` for motherboard temperature
sensors named `CPU`, `CPU Package`, `CPU Socket`, or `T_Sensor`.

### 2. Test elevated access

Run the monitor service once from an Administrator PowerShell window:

```powershell
dotnet run
```

If `Core (Tctl/Tdie)` still reads `0°C`, permissions are unlikely to be the
main problem.

### 3. Compare an independent tool

Use HWiNFO or AMD Ryzen Master, if available, to verify that the machine has a
normal CPU temperature reading. A valid reading there would confirm the
hardware/firmware is fine and that LibreHardwareMonitor is the limitation.

### 4. Consider a fallback data source

If no motherboard sensor is reliable, investigate HWiNFO Shared Memory. The
C# service could read HWiNFO's collected CPU temperature and keep the existing
Angular API shape.

## Desired API Shape Later

Once a reliable value exists, extend `/api/system` safely:

```json
{
  "cpu": {
    "usage": 13.28,
    "temperature": 52.4
  }
}
```

Until then, CPU temperature should be omitted or returned as `null` rather
than fabricated.
