# Visual Rocket Launcher Hub

A multi-functional, stateful dashboard interface that upgrades the original rocket launcher tracker into an interactive visual simulator. The system combines localized data persistence with dynamic spatial coordinates to animate elements based on direct user event clicks.

## Product Specification

### Enhanced Architecture & Local State Caching
- **Persistent Memory Link:** Connects application initialization directly to the Web Storage API (`localStorage`), checking for stored identity keys (`launcher_name`) and shell counts (`launcher_rockets`) on load to restore the application state seamlessly.
- **On-Demand Validation Matrix:** Prevents execution actions until the system resolves credentials, applying input validation caps (max `5` projectiles) and routing fallback mechanisms for missing data.
- **Dynamic Particle Vector Generator:** Tracks cursor target values dynamically through click coordinates (`clientX`, `clientY`) to generate DOM span components (`\u{1F680}`) on-the-fly.

### Simulation Mechanics
- **Fire Sequence & Math Matrix:** Deducts ammunition metrics on click and maps distinct motion coordinates via CSS custom properties (`--x`, `--y`, `--r`) processed through random vectors:
  - Horizontal offset paths: `(Math.random() - 0.5) * 160px`
  - Vertical acceleration targets: `-400px - (Math.random() * 150px)`
  - Angular spatial variance: `(Math.random() - 0.5) * 45deg`
- **Garbage Collection Optimization:** Clears dynamically injected particle nodes automatically via timed event handles (`setTimeout`) after `1200ms` to prevent browser resource drag.
- **Profile Reconfiguration Core:** Hosts localized logic to swap client handles securely without resetting the global weapon payload metrics.

### Presentation & Canvas Styling
- **Grid Layout Module:** Structures dashboard features using a modern, absolute-centered `3x2` CSS Grid architecture (`grid-template-columns: repeat(3, auto)`).
- **Advanced Animation Timelines:** Runs stylized physics simulations (`@keyframes singleLaunch`) utilizing scale translations and fading visibility filters over a `1.2s` timeline.
- **Interactive Component Skinning:** Displays a terminal aesthetic with neon orange accent indicators (`#ff4e00`). Features container shift movements and deep canvas outer glow highlights (`box-shadow`) triggered on hover.

## Deployment

### Prerequisites
A modern standard web runtime platform configured to execute CSS Grid properties, asynchronous layout initialization scripts, and viewport hardware-accelerated translation animations.

### File Architecture
- `index.html` (Grid Panel Hub Layout)
- `style.css` (Animation Path Rules & Glow Maps)
- `main.js` (Particle Vector Machine & Validation Engine)
