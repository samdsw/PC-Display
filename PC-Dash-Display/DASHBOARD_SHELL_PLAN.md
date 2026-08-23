# Dashboard Shell Plan

> **Purpose:** This is the working plan for the current Angular milestone: organize and visually build the dashboard shell with static placeholder data.  
> **Relationship to `DISPLAY_PROJECT_PLAN.md`:** That file is the long-term roadmap. This file is the smaller, editable plan for what we are building now.

## Current Goal

Create a readable, dark Mission-Control-style dashboard with a header and four visible feature areas. Everything may use static placeholder data for now.

**Definition of done:** The page has a clear visual layout, each area is its own Angular component, and the project still builds successfully.

## Why These Are Components

The four panels represent separate future features and data sources, not merely decorative boxes:

```text
PC Stats          -> hardware-monitoring backend later
Game Performance  -> game / FPS data later
Spotify           -> Spotify API later
Discord           -> Discord integration later
```

Creating their component boundaries now lets us learn Angular component composition while keeping their first versions simple and static.

## Intended Component Tree

```text
App
|- Header
|  |- Dashboard name
|  |- Time placeholder (dynamic clock later)
|  `- Date placeholder (dynamic date later)
`- Home
   |- PcStats
   |- GameStats
   |- Spotify
   `- Discord
```

## Intended File Layout

```text
src/app/
|- app.ts / app.html / app.css
|- home/
|  |- home.ts / home.html / home.css
`- components/
   |- header/
   |- pc-stats/
   |- game-stats/
   |- spotify/
   `- discord/
```

Each feature component owns its `.ts`, `.html`, and `.css` files.

## Visual Layout (First Version)

```text
----------------------------------------------------------------
 PC DASHBOARD                              8:42 PM | Aug 23
----------------------------------------------------------------
 [ PC STATS              ] [ GAME / PERFORMANCE                ]
 [ CPU / GPU / RAM       ] [ Game / FPS / frame-time placeholder]

 [ SPOTIFY               ] [ DISCORD                           ]
 [ Song / artist         ] [ Status / activity placeholder     ]
----------------------------------------------------------------
```

The layout should use CSS Grid and adapt to narrower screens by stacking panels when needed.

## Styling Responsibilities

| File | Owns |
|---|---|
| `src/styles.css` | Global defaults: `body`, font, dark theme variables, reusable colors |
| `src/app/app.css` | App-wide shell only, if needed |
| `src/app/home/home.css` | Dashboard grid, panel placement, page spacing |
| `src/app/components/header/header.css` | Header layout and appearance |
| Each panel component CSS file | Its card and internal content |

`index.html` remains the document wrapper; dashboard UI does not go there.

## Work Checklist

### 1. Component Organization

- [ ] Generate `PcStatsComponent`
- [ ] Generate `GameStatsComponent`
- [ ] Generate `SpotifyComponent`
- [ ] Generate `DiscordComponent`
- [ ] Import the four standalone components in `HomeComponent`
- [ ] Render their selectors from `home.html`
- [ ] Verify the app builds

### 2. Static Content

- [ ] Header shows dashboard name
- [ ] Header has static time and date placeholders
- [ ] PC Stats shows placeholder CPU, GPU, and RAM data
- [ ] Game Performance shows placeholder game, FPS, and frame-time data
- [ ] Spotify shows placeholder song, artist, and playback state
- [ ] Discord shows placeholder presence/activity data

### 3. Base Styling

- [ ] Add global dark-theme colors in `styles.css`
- [ ] Build the dashboard grid in `home.css`
- [ ] Style the header
- [ ] Style each panel as a readable card
- [ ] Confirm the layout remains usable on a narrower browser window

### 4. First Dynamic Feature

- [ ] Replace header time/date placeholders with a TypeScript-driven clock
- [ ] Understand interpolation and the timer used for the clock
- [ ] Keep all dashboard-service/API work out of scope until the shell feels right

## Decisions Made So Far

| Decision | Reason |
|---|---|
| Use standalone Angular components | This Angular 22 project already uses them; they make dependencies explicit through `imports`. |
| Build static placeholders first | Separates layout learning from API, hardware, and authentication complexity. |
| Make the four dashboard domains separate components now | They have distinct responsibilities and will later evolve independently. |
| Start simple visually | Structure and readability come before cyberpunk animations and advanced effects. |

## Explicitly Deferred

- Live hardware metrics and a backend
- Game/FPS detection
- Spotify authentication and API calls
- Discord integration
- Real-time updates / WebSockets
- Advanced animations, charts, and cyberpunk effects

These are deferred, not rejected. They should be introduced one feature at a time after the static shell is stable.

## Notes / Changes Log

Add a short entry here whenever we make a meaningful plan or architecture change.

- **2026-08-23:** Created this focused dashboard-shell plan. Four future feature areas will be organized as Angular components and initially use static data.
