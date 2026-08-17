# Display Project — Codex Handoff & Living Project Plan

> **Purpose of this file:** Give Codex enough context to understand what this project is, why it exists, where it is headed, what has already been decided, and how it should help.
>
> This is a **living plan**, not a contract. The project is intentionally flexible. Architecture, features, milestones, tools, and priorities may change as I learn more and as the project develops.

---

## 1. Project Summary

**Display** is a side project for building a customizable **Mission Control-style computer dashboard**.

The eventual idea is to have a dedicated display—likely powered by a **Raspberry Pi**—that can show useful information about one or more computers, especially a gaming PC and potentially a work/personal computer.

At its simplest, the dashboard should be able to show things like:

- CPU usage
- CPU temperature
- GPU usage
- GPU temperature
- RAM usage
- Clock / time

Over time, it may also show richer information such as:

- Current game
- Spotify playback
- FPS
- Network information
- Discord information
- Weather
- Historical performance charts
- Themes / layouts
- AI-generated observations or insights
- Data from multiple computers

The dashboard itself is important, but the **primary reason for building it is learning**.

---

# 2. Why I Am Building This

This project is a practical vehicle for learning technologies and concepts by using them together in a real system.

The main learning goals include:

- Angular
- TypeScript
- Component-based frontend design
- HTML / CSS within a larger application
- APIs
- HTTP requests
- Node.js
- Backend development
- Express or a similar Node backend framework
- Real-time communication
- WebSockets
- Hardware monitoring
- Operating-system-level data collection
- Frontend/backend architecture
- Raspberry Pi deployment
- Kiosk-style applications
- UI / UX design
- Product design
- Multi-device systems
- Potential AI integration later

The goal is **not** to rush to the final dashboard as quickly as possible.

The goal is to understand the pieces well enough that I can say:

> I know why this system works, how its pieces communicate, and how I could change or rebuild those pieces myself.

Codex should therefore treat this as both:

1. a software project, and
2. a guided learning project.

---

# 3. How Codex Should Help

Codex is allowed to inspect the repository, explain existing code, suggest changes, create code when requested, debug problems, and help implement features.

However, **do not default to building the entire project for me**.

I want to learn by doing.

A good interaction pattern is:

1. Explain what we are trying to accomplish.
2. Explain the relevant concept.
3. Point me toward the files or code involved.
4. Let me attempt it when reasonable.
5. Review or debug what I write.
6. Provide code directly when I ask for it, when a repetitive task does not teach much, or when an implementation example would significantly help.

Prefer explanations such as:

- what a file is responsible for
- why a framework uses a particular structure
- how data flows through the application
- why one implementation is preferable to another
- what terminology means
- what I should research next

Avoid unexplained large code dumps.

When making changes, explain the important changes and why they are being made.

---

# 4. Important Project Philosophy

## Learning > speed

A slower implementation that teaches me Angular, APIs, networking, and architecture is more valuable than generating the entire application immediately.

## Build one layer at a time

Do not introduce five new technologies at once unless there is a strong reason.

A likely progression is:

frontend first → mock data → backend → HTTP → real data → real-time data → hardware display → integrations → advanced features

## Make it work before making it cool

A plain number that correctly displays CPU usage is more valuable early on than a beautiful animated gauge backed by fake or unreliable data.

Functionality first.

Polish later.

## Prefer small, observable milestones

Each phase should produce something I can see working.

Examples:

- the clock updates
- a component renders
- an API returns JSON
- Angular displays API data
- CPU usage changes in real time
- the Pi loads the dashboard

## Understand before abstracting

Avoid unnecessary architecture, generic factories, complex state systems, or clever abstractions while the project is still small.

Introduce abstractions when the problem they solve actually exists.

## This plan is flexible

Nothing in this document should prevent us from changing direction.

If we discover that:

- another library fits better,
- Angular conventions suggest a cleaner structure,
- a feature is not worth implementing,
- a different backend architecture makes more sense,
- hardware limitations change the design,
- the Raspberry Pi role changes,
- another feature becomes more interesting,

then update the plan.

Codex should help evaluate these changes rather than treating this document as immutable requirements.

---

# 5. Current State

The project is still in the early Angular-learning stage.

Node and Angular have been installed / set up, and I have been experimenting with Angular components and trying to understand the application structure.

Recent areas I have been learning include:

- Angular components
- how components are created and used
- Angular exports
- where page-level HTML belongs
- the difference between `index.html` and Angular component templates such as `app.html`
- how a header component would fit into the application
- how Angular assembles the application from components

Do not assume I fully understand Angular conventions yet.

When we encounter Angular-specific concepts, explain the structure rather than assuming prior framework knowledge.

---

# 6. Current Mental Model to Reinforce

A useful high-level model is:

```text
Browser / Raspberry Pi Display
        |
        v
Angular Dashboard
        |
        | HTTP initially
        | WebSocket later
        v
Node / Express Backend
        |
        v
Hardware / OS Monitoring
        |
        v
Gaming PC / Other Computers
```

Eventually there may be multiple machines:

```text
                   +------------------+
                   | Raspberry Pi     |
                   | Dashboard Screen |
                   +--------+---------+
                            |
                            v
                   +------------------+
                   | Angular Frontend |
                   +--------+---------+
                            |
                    API / WebSocket
                            |
                            v
                  +--------------------+
                  | Backend / Data Hub |
                  +----------+---------+
                             |
             +---------------+---------------+
             |                               |
             v                               v
      Gaming Computer                 Work / Other PC
      monitoring agent                monitoring agent
```

This architecture is only a direction.

It may change.

---

# 7. Initial Feature Scope

## Must-have first dashboard data

The first meaningful dashboard should eventually display:

- CPU utilization %
- CPU temperature
- GPU utilization %
- GPU temperature
- RAM utilization %
- Current time / clock

These do **not** all need to be implemented simultaneously.

They should be introduced gradually.

## Nice-to-have after the foundation

Possible next features:

- Current game
- Spotify playback
- FPS

## Longer-term possibilities

Possible future features include:

- Discord integration
- Weather
- Network usage / network health
- Historical graphs
- Performance history
- Theme system
- Layout customization
- Multiple computers
- Computer selector
- Different dashboards for gaming / productivity
- AI-generated system observations
- AI summaries
- Intelligent alerts
- Recommendations based on hardware metrics

These are ideas, not commitments.

---

# 8. Suggested Project Checkpoints

The checkpoints below are intended to be suitable for a project board.

They should not be treated as rigid sprint requirements.

---

## CHECKPOINT 0 — Development Environment

### Goal

Make sure the development environment is understandable and reliable.

### Work

- Install / verify Node.js
- Install / verify npm
- Install / verify Angular CLI
- Create or open Angular project
- Run the development server
- Understand the basic folder structure
- Understand how to stop/restart the app
- Learn the basic commands used during development

### Learn / Research

- What Node.js does
- What npm does
- What Angular CLI does
- `package.json`
- dependencies vs devDependencies
- `npm install`
- `ng serve`
- Angular project structure

### Success

I can clone/open the project and run it without guessing.

---

# CHECKPOINT 1 — Angular Fundamentals

### Goal

Understand the core Angular building blocks before building the actual dashboard.

### Topics

- Components
- Component selectors
- Component templates
- Component styles
- TypeScript component classes
- Imports
- Exports
- Angular application bootstrapping
- Parent/child components
- Interpolation
- Property binding
- Event binding
- Basic Angular template syntax

### Important files / concepts to understand

Depending on Angular version/project setup:

- `index.html`
- root application component
- `app.html` or equivalent root template
- component `.ts` files
- component `.html` files
- component `.css` / `.scss` files
- `main.ts`

### Specific distinction to understand

`index.html` is the outer HTML document loaded by the browser.

It contains document-level configuration such as:

```html
<meta charset="utf-8">
<title>...</title>
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

Angular mounts the application into that document.

The Angular application UI itself belongs in Angular component templates, such as the root `app.html` and other component HTML files.

### Practice components

Good early components include:

- Header
- Clock
- Simple card
- Placeholder stat widget

### Success

I can create a component, place it on the page, understand how Angular finds it, and explain which file controls its logic, HTML, and styling.

---

# CHECKPOINT 2 — Dashboard Shell

### Goal

Build the visual skeleton of the dashboard using static or fake data.

### Possible components

```text
App
├── Header
├── Dashboard
│   ├── CpuWidget
│   ├── GpuWidget
│   ├── RamWidget
│   └── ClockWidget
```

This structure is illustrative, not mandatory.

### Work

- Create dashboard layout
- Create reusable widget/card structure if appropriate
- Add CPU placeholder
- Add GPU placeholder
- Add RAM placeholder
- Add clock
- Experiment with responsive layout
- Experiment with styling

Example temporary data:

```text
CPU
42%
63°C
```

### Why fake data first?

It lets me learn the frontend without debugging the frontend, backend, networking, and hardware monitoring at the same time.

### Learn / Research

- Angular component composition
- CSS Grid
- Flexbox
- Responsive layouts
- Input properties
- Reusable components
- Basic TypeScript models/interfaces

### Success

The dashboard looks structurally like a real dashboard even though most data is still fake.

---

# CHECKPOINT 3 — Make the Frontend Dynamic

### Goal

Move from hardcoded HTML toward data-driven Angular components.

### Work

- Store values in TypeScript
- Render values in templates
- Update the clock automatically
- Pass values into components
- Potentially create interfaces for metric data

Example concept:

```ts
cpuUsage = 42;
```

displayed using Angular template binding.

### Learn / Research

- TypeScript variables
- interfaces
- component lifecycle
- timers
- Angular change detection at a high level
- `@Input()` / modern Angular input equivalents where appropriate

### Success

Changing data in TypeScript visibly changes the dashboard without manually editing the HTML.

---

# CHECKPOINT 4 — Create the Backend

### Goal

Build a small Node backend that Angular can talk to.

A likely initial option is **Node.js + Express**.

That choice can be revisited.

### First API

Keep it intentionally simple.

Example:

```http
GET /api/system
```

Possible response:

```json
{
  "cpu": {
    "usage": 42,
    "temperature": 63
  },
  "gpu": {
    "usage": 71,
    "temperature": 68
  },
  "ram": {
    "usage": 55
  }
}
```

Initially these values can still be fake.

### Learn / Research

- What a backend server is
- Express
- Routes
- HTTP
- GET requests
- JSON
- request / response lifecycle
- ports
- localhost
- frontend vs backend
- CORS

### Success

Opening the API endpoint in a browser or API client returns valid JSON.

---

# CHECKPOINT 5 — Connect Angular to the API

### Goal

Have the Angular dashboard retrieve system data from the backend.

### Work

- Create an Angular service
- Use Angular HTTP support
- Request `/api/system`
- Display returned values
- Handle loading/error states at a basic level

### Learn / Research

- Angular services
- dependency injection
- `HttpClient`
- Observables
- subscribing / reactive patterns
- API error handling
- CORS

Do not go unnecessarily deep into RxJS theory before it becomes useful.

### Success

Changing a fake value in the backend causes the frontend dashboard to show the new value.

This checkpoint is important because it proves the full frontend/backend pipeline works.

---

# CHECKPOINT 6 — Poll the Backend

### Goal

Make dashboard values update automatically.

Initial communication can use polling.

Example:

```text
Angular -> GET /api/system
wait 1 second
Angular -> GET /api/system
wait 1 second
...
```

### Why start with polling?

It is simpler to understand than WebSockets and establishes the data pipeline first.

### Learn / Research

- polling
- intervals
- cleanup
- network requests
- update frequency
- basic performance considerations

### Success

Dashboard data updates repeatedly without refreshing the page.

---

# CHECKPOINT 7 — Real Computer Metrics

### Goal

Replace fake backend values with actual machine data.

### Data targets

Start with one metric.

Possible progression:

1. RAM
2. CPU usage
3. CPU temperature
4. GPU usage
5. GPU temperature

The exact order may depend on OS/library support.

### Research

Potential topics/libraries:

- Node system information libraries
- OS APIs
- `systeminformation`
- Windows monitoring APIs
- Linux monitoring APIs
- GPU-specific utilities
- NVIDIA tooling if relevant
- hardware temperature availability

Do not lock the project to one monitoring library until we verify it works reliably on the target machine.

### Important issue

Hardware metrics are OS- and hardware-dependent.

CPU/GPU temperatures can be substantially harder to retrieve than CPU/RAM utilization.

Codex should explain these limitations when they arise rather than hiding them behind fake assumptions.

### Success

At least one widget is driven by actual live hardware data.

Then expand metric-by-metric.

---

# CHECKPOINT 8 — Improve the Dashboard UI

### Goal

Once real data is flowing, make it feel like a useful display.

Possible improvements:

- progress bars
- gauges
- charts
- icons
- labels
- warning thresholds
- better spacing
- typography
- responsive sizing

### UI principle

Do not sacrifice readability for flashy visuals.

This will potentially be displayed on a dedicated screen and should be readable at a glance.

### Success

The dashboard feels intentional rather than like a collection of debug values.

---

# CHECKPOINT 9 — WebSockets / Real-Time Communication

### Goal

Move from polling toward push-based updates if there is a real benefit.

Architecture:

```text
Computer metrics change
        ↓
Backend collects them
        ↓
WebSocket sends update
        ↓
Angular receives update
        ↓
Widget changes
```

### Learn / Research

- WebSockets
- persistent connections
- server push
- Socket.IO vs native WebSocket
- reconnection
- event-driven systems

### Important

Do not implement WebSockets merely because they are more advanced.

First understand what problem they solve compared with polling.

### Success

Metrics update through an established real-time connection.

---

# CHECKPOINT 10 — Raspberry Pi Display

### Goal

Run the dashboard on a dedicated Raspberry Pi-connected display.

The Pi may primarily act as a display client rather than the machine collecting gaming-PC metrics.

### Possible setup

```text
Gaming PC
   |
   | network
   v
Backend / monitoring service
   |
   | network
   v
Raspberry Pi
   |
Angular dashboard in browser
   |
Monitor
```

### Work

- Set up Raspberry Pi
- Connect display
- Connect to network
- Load dashboard
- Configure browser kiosk mode
- Potentially auto-launch dashboard at boot

### Learn / Research

- Raspberry Pi OS
- local networking
- device IP addresses
- hostname resolution
- kiosk mode
- Chromium startup
- Linux services / startup scripts
- deployment

### Success

Turning on the display/Pi results in the dashboard appearing with live data from another computer.

---

# CHECKPOINT 11 — Current Game Detection

### Goal

Detect which game or major application is currently running.

### Possible approaches

- process detection
- Steam APIs
- launcher APIs
- active process
- active-window detection

### Questions to answer

- What counts as the "current game"?
- Is running enough?
- Should it be the foreground window?
- How should non-Steam games work?

### Success

Dashboard can identify and display the active/current game with acceptable reliability.

---

# CHECKPOINT 12 — Spotify Integration

### Goal

Show current music information.

Possible information:

- song
- artist
- album
- artwork
- playback status
- progress

### Learn / Research

- Spotify Web API
- OAuth
- access tokens
- refresh tokens
- third-party API integration

### Success

Dashboard can display Spotify playback information for the authenticated user.

---

# CHECKPOINT 13 — FPS

### Goal

Explore whether FPS can be displayed for currently running games.

### Important

This may be significantly more difficult and platform-specific than basic hardware metrics.

Possible approaches could involve:

- game APIs
- monitoring overlays
- telemetry tools
- GPU vendor tools
- external monitoring software

Treat this as an investigation rather than a guaranteed feature.

---

# CHECKPOINT 14 — Multi-Computer Support

### Goal

Allow the dashboard to receive metrics from more than one computer.

Potential examples:

- Gaming PC
- Work PC
- Laptop
- Home server

### Possible future architecture

```text
Gaming PC Agent ----\
                     \
Work PC Agent --------> Central Dashboard API ---> Display
                     /
Laptop Agent --------/
```

Each computer may eventually run a lightweight monitoring service / agent.

### Possible data model

```json
{
  "machineId": "gaming-pc",
  "hostname": "example",
  "metrics": {
    "cpuUsage": 42,
    "ramUsage": 55
  }
}
```

### Learn / Research

- client/server architecture
- agents
- machine identity
- network discovery
- API authentication
- distributed systems basics

### Work-computer warning

Company/work computers may have restrictions on installing monitoring software or exposing system information.

Do not design around bypassing those restrictions.

Support work systems only where installation and company policy allow it.

---

# CHECKPOINT 15 — Themes and Customization

### Goal

Make the dashboard feel personal and configurable.

Ideas:

- dark/light themes
- gaming theme
- work/productivity theme
- color themes
- movable widgets
- selectable widgets
- widget sizes
- saved layouts
- multiple dashboard pages

### Learn / Research

- CSS variables
- theme architecture
- configuration files
- local storage
- persistent preferences
- drag-and-drop UI

### Success

The same application can support visibly different dashboard configurations.

---

# CHECKPOINT 16 — Historical Data

### Goal

Move beyond "what is happening now?" toward "what has been happening?"

Possible data:

- CPU usage over time
- GPU usage over time
- temperatures
- RAM usage
- gaming-session statistics

This may require adding a database.

Do **not** add a database until persistent historical data actually becomes useful.

### Learn / Research

- time-series data
- databases
- retention
- sampling
- charting
- API queries by time

---

# CHECKPOINT 17 — AI Features

### Goal

Explore AI only after the dashboard has enough meaningful data.

Potential features:

- "Your GPU has been unusually hot for 20 minutes."
- performance summaries
- anomaly explanations
- usage summaries
- natural-language queries about system history
- suggestions for investigating performance issues

Example:

```text
User:
Why did my game slow down around 8:15?

Dashboard:
GPU usage remained near 100%, while GPU temperature increased and
clock speed dropped during that period.
```

### Important philosophy

AI should add useful interpretation.

Do not add AI merely to advertise that the project uses AI.

---

# 9. Potential Repository Structure

This is only a possible future structure.

Do not reorganize the repository just to match this diagram.

```text
display/
│
├── frontend/
│   └── Angular application
│
├── backend/
│   └── Node / Express API
│
├── agent/
│   └── optional future machine-monitoring agent
│
├── docs/
│   └── architecture / setup notes
│
└── README.md
```

The current Angular project may already have a different structure, and that is fine.

Prefer the simplest structure appropriate for the current stage.

---

# 10. Conceptual Data Flow

Eventually, a metric may travel through several layers.

Example CPU usage:

```text
Operating System
      ↓
Monitoring library
      ↓
Node backend
      ↓
JSON / WebSocket message
      ↓
Angular service
      ↓
Angular component
      ↓
HTML template
      ↓
Dashboard screen
```

One of the educational goals of this project is to understand every step of this path.

When debugging, identify **which layer is wrong** instead of randomly changing code.

---

# 11. Angular Learning Priorities

Because Angular is currently the main learning focus, prioritize understanding these concepts gradually.

## Very early

- components
- selectors
- templates
- styles
- TypeScript classes
- interpolation
- imports / exports

## Soon after

- parent/child component relationships
- inputs
- events
- services
- dependency injection
- interfaces
- HTTP requests

## Later

- Observables
- routing if needed
- shared state if needed
- signals if useful for the chosen Angular version
- reusable UI architecture
- forms if configuration screens require them

Do not introduce Angular features simply because they exist.

Introduce them when the application gives us a reason to use them.

---

# 12. Frontend Design Direction

The dashboard should eventually feel like a **Mission Control panel** rather than a traditional website.

Potential design qualities:

- glanceable
- information-dense without being cluttered
- large readable metrics
- modular widgets
- dark-display friendly
- useful from several feet away
- customizable

However, visual style is still open.

Do not treat any current styling experiment as permanent.

---

# 13. Questions That Are Intentionally Unresolved

These decisions should remain open until we have enough information.

## Backend architecture

- Express?
- another Node framework?
- one central server?
- agent per machine?

## Hosting

- backend on gaming PC?
- backend on Raspberry Pi?
- separate home server?
- hybrid architecture?

## Communication

- polling?
- WebSockets?
- both?

## Hardware monitoring

- which Node libraries?
- external monitoring tool?
- native utilities?
- OS-specific implementations?

## Persistence

- no database?
- SQLite?
- time-series database?
- another database?

## Raspberry Pi role

- display only?
- central dashboard server?
- backend host?
- some combination?

## Authentication

Probably unnecessary during very early local-only development.

May become important when:

- multiple devices exist
- services expose data across a network
- Spotify/OAuth is added
- remote access is added

## UI architecture

- fixed dashboard?
- configurable grid?
- user-editable layouts?
- multiple pages?

Do not prematurely lock these decisions.

---

# 14. Development Strategy for New Features

For most features, use this progression:

```text
1. Understand the feature
2. Build the smallest version
3. Use fake data if necessary
4. Make the data real
5. Verify reliability
6. Improve the architecture
7. Improve appearance
8. Add optional complexity
```

Example for CPU:

```text
Static "42%"
      ↓
TypeScript variable
      ↓
Fake backend value
      ↓
HTTP API
      ↓
Real CPU reading
      ↓
Automatic updates
      ↓
WebSocket if useful
      ↓
Historical chart
```

This approach should be preferred over trying to implement the final version immediately.

---

# 15. How to Handle Problems

When something breaks, Codex should help narrow the problem to a layer.

For example:

```text
Is Angular rendering correctly?
        ↓
Is Angular receiving data?
        ↓
Is the HTTP request succeeding?
        ↓
Is the backend route working?
        ↓
Is the backend receiving a hardware value?
        ↓
Is the monitoring library working?
```

Prefer systematic debugging over replacing multiple pieces simultaneously.

---

# 16. Code Quality Expectations

Because this is a learning project:

- favor readable code
- use descriptive names
- explain non-obvious logic
- avoid premature optimization
- avoid unnecessary dependencies
- avoid giant components
- avoid over-engineering
- keep responsibilities reasonably separated

But also:

**Do not turn beginner-friendly code into artificial toy code.**

Use real conventions where they are understandable and appropriate.

The goal is to learn how an actual application is structured.

---

# 17. Documentation Expectations

When the project reaches meaningful architectural decisions, update documentation.

Useful things to document:

- how to run frontend
- how to run backend
- required environment variables
- hardware requirements
- network configuration
- Raspberry Pi setup
- why major architecture choices were made
- known limitations

This file itself can be updated as the project changes.

---

# 18. Things Codex Should NOT Assume

Do not assume:

- the current plan is final
- every listed future feature will be built
- Raspberry Pi must host the backend
- Express must remain the backend forever
- WebSockets are mandatory
- a database is required
- the dashboard is gaming-only
- the dashboard is work-only
- every computer can install an agent
- every operating system exposes the same hardware data
- temperatures will be easy to retrieve
- I want everything generated automatically
- I already understand Angular terminology

When unsure, inspect the current repository and reason from what actually exists.

---

# 19. Near-Term Focus

The immediate focus should remain **Angular fundamentals and the dashboard frontend**.

A good near-term path is:

```text
Understand root Angular structure
        ↓
Create components
        ↓
Build header
        ↓
Build clock
        ↓
Build simple metric card
        ↓
Arrange dashboard shell
        ↓
Use dynamic TypeScript values
        ↓
Only then begin backend/API work
```

The exact ordering can change if learning opportunities suggest a better route.

---

# 20. Current Checkpoint Board

A compact project-board version:

## Foundation

- [ ] Verify development environment
- [ ] Understand Angular project structure
- [ ] Understand `index.html` vs Angular component templates
- [ ] Understand imports / exports
- [ ] Understand components

## Frontend

- [ ] Build Header component
- [ ] Build Clock component
- [ ] Build basic Stat/Widget component
- [ ] Build dashboard layout
- [ ] Add placeholder CPU widget
- [ ] Add placeholder GPU widget
- [ ] Add placeholder RAM widget
- [ ] Make widgets data-driven

## Backend

- [ ] Create Node backend
- [ ] Create first API route
- [ ] Return fake system metrics
- [ ] Connect Angular to backend
- [ ] Display API data
- [ ] Add polling

## Hardware

- [ ] Read real RAM usage
- [ ] Read real CPU usage
- [ ] Investigate CPU temperature
- [ ] Investigate GPU usage
- [ ] Investigate GPU temperature
- [ ] Replace fake metrics

## Real-time

- [ ] Learn WebSockets
- [ ] Decide whether WebSockets are worthwhile
- [ ] Implement real-time metric updates if useful

## Dedicated Display

- [ ] Set up Raspberry Pi
- [ ] Connect Raspberry Pi to dashboard
- [ ] Configure kiosk mode
- [ ] Auto-launch dashboard
- [ ] Test long-running display behavior

## Integrations

- [ ] Investigate current-game detection
- [ ] Add current game if useful
- [ ] Learn Spotify API / OAuth
- [ ] Add Spotify widget
- [ ] Investigate FPS availability

## Expansion

- [ ] Design multi-computer architecture
- [ ] Build monitoring agent if needed
- [ ] Add machine selector / identity
- [ ] Add themes
- [ ] Add configurable layouts
- [ ] Add historical metrics if useful
- [ ] Add database only if persistence requires it
- [ ] Explore AI features when meaningful

---

# 21. Definition of Success

There are multiple levels of success.

## Early success

I understand Angular components and can build the dashboard layout myself.

## Intermediate success

The Angular dashboard displays live metrics from a Node backend.

## Strong success

A Raspberry Pi display shows real-time information from my computer reliably.

## Advanced success

The system supports integrations, multiple machines, customization, historical data, or intelligent insights.

## Most important success

Even if the project changes significantly, I finish with a strong practical understanding of:

- Angular
- TypeScript
- frontend architecture
- APIs
- backend systems
- networking
- hardware data
- deployment
- system design

The technology learned matters more than completing every feature listed in this document.

---

# 22. Instructions to Codex When Starting a New Session

When working on this repository:

1. Read this file first.
2. Inspect the current repository before assuming where the project is in the plan.
3. Determine the current checkpoint from the actual code.
4. Preserve working code unless a change has a clear reason.
5. Explain important Angular/backend concepts while we work.
6. Prefer incremental changes.
7. Do not jump several checkpoints ahead without a reason.
8. Do not implement future architecture merely because it appears in this plan.
9. Tell me when a decision is temporary versus architectural.
10. Point out when the real code has diverged from this document.
11. Suggest updating this file when a major project direction changes.
12. Remember that the goal is both to **build the dashboard and learn how it works**.

---

# 23. Living Plan Rule

This file represents the best current understanding of the project.

It is expected to change.

When the project evolves, we may:

- reorder checkpoints
- remove features
- add features
- replace technologies
- restructure the repository
- redefine the Raspberry Pi's role
- change the UI direction
- modify the backend
- change how computers communicate
- narrow or expand project scope

When that happens, prefer updating the plan to match what we have learned rather than forcing the project to match an old plan.

**The project should evolve based on experience.**

---

# 24. One-Sentence North Star

> Build a customizable Mission Control-style computer dashboard that teaches me how a complete modern software system works—from Angular UI components, through APIs and real-time backend communication, to hardware monitoring and a dedicated Raspberry Pi display—while keeping the architecture and feature set flexible enough to evolve as I learn.
