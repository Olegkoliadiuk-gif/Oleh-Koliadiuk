# Esports Hub Dashboard

A multi-page, client-side web application designed to act as an esports player hub. The platform features an integrated state-management sync engine across distinct functional modules: profile overview, live match statistics, and client settings dashboards.

## Product Specification

### Architecture & Global State Sync
- **Layout Model:** Responsive semantic layout architecture containing top navigational networks, centralized feature cards, and clean bottom metadata footers.
- **Dynamic Variable Systems:** Implements global CSS custom property declarations (`:root`) to change application typography and skin maps instantly across views.
- **Cross-Page State Engine:** Utilizes the synchronous Web Storage API (`localStorage`) to cache user preferences (`theme`) and execute immediate DOM mutations during initialization, preventing interface flash across page navigations.
- **Responsive Breakpoints:** Media queries adapt layouts below `600px` viewports, stacking wide navigation blocks vertically for optimal mobile display matrix scaling.

### Core Modules

#### 1. Profile Identity Manager (`index.html` / `Profile.js`)
- Displays customized user-identity graphics via rounded image avatars fitted with bounding container calculations (`object-fit: cover`).
- Hosts an active profile status module mapped with explicit string validation boundaries (`Online`, `Do Not Disturb`, `Away`, `Offline`).
- Employs filter algorithms to discard empty input streams, displaying targeted validation error flags upon broken form payloads.

#### 2. Client Preference Control (`settings.html` / `settings.js`)
- Controls application-wide visual rendering variables using a lightweight class mutation toggle (`.light-theme`).
- Rewrites contextual UI text fields dynamically based on the current state.
- Controls data serialization workflows to store state parameters permanently in the client's device cache.

#### 3. Match Analytics Workspace (`stats.html` / `stats.js`)
- Displays tracking parameters for historical gaming statistics, including Winrate performance, match counts, and structural game roles.
- Integrates custom decorative progress nodes styled natively with standard web colors.

### Interactive Transitions
- **Hover Micro-interactions:** Multi-stage scale amplification up to `1.10x` paired with smooth box-shadow outer glow properties (`#ff4e00`) expanding fluidly along a `0.3s` ease curve.
- **Button Animations:** Implements immediate visual feedback properties that compress targets (`0.98x`) natively during physical tap interactions (`:active`).

## Deployment

### Prerequisites
A modern standard web runtime platform configured to execute local storage configurations, spatial transforms, and DOM interface mutations smoothly.

### File Architecture
- `index.html` (Primary Profile DOM Core)
- `stats.html` (Statistics Component DOM Structure)
- `settings.html` (Application Preferences DOM Canvas)
- `Profile.css` (Universal Unified App-Wide Stylesheet)
- `Profile.js` (Identity Logic Engine)
- `stats.js` (Metrics Logic Handler)
- `settings.js` (Theme State Mutator)
