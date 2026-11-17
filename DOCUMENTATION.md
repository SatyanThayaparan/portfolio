# Portfolio — Documentation

## What this project is

A personal portfolio site for Satyan Thayaparan. It presents experience, skills, projects, and a short about section in a Spotify-inspired “now playing” layout with glass-style panels.

## Tech stack

| Layer | Choice | Why it’s used |
| --- | --- | --- |
| UI | React 19 (Create React App) | Component-based front end |
| Motion | Framer Motion | Soft transitions between sections and player-style content |
| Icons | react-icons | Consistent icon set for social links and UI cues |
| Styling | Custom CSS (`App.css`, `index.css`) | Glass effects, layout, and responsive rules |
| Content | `src/data/content.js` | Profile copy, roles, skills, and projects in one place |
| Hosting | Vercel | Static production deploy of the built React app |
| Optional | Express helper in `api/linkedin.js` | Early LinkedIn OAuth experiment (not used by the current UI) |

## How the logic works

1. **App boot** — `index.js` mounts `App.js`, which builds the dashboard shell (sidebar, hero player, main panels).
2. **Content-driven UI** — Almost all text and lists come from `content.js`. Changing that file updates what visitors see without rewriting components.
3. **Interactive “player” metaphor** — Selecting experience roles, skill lanes, or projects updates the featured panel the same way picking a track updates a music player.
4. **Section navigation** — Sidebar links scroll to sections; the active section can follow scroll position so the UI feels like one continuous app.
5. **Responsive layout** — CSS breakpoints rearrange the hero, sidebar, and cards for tablet and phone widths.

## Project map

### `src/` — the React app
This is where the visible portfolio lives.

| Path | Role |
| --- | --- |
| `src/index.js` | Boots React and mounts the app into the page |
| `src/App.js` | Main dashboard: sidebar, hero player, sections, click/scroll state |
| `src/App.css` | Layout, glass panels, cards, equalizer, responsive breakpoints |
| `src/index.css` | Global tokens (fonts, colors) shared across the app |
| `src/data/content.js` | All editable copy: profile, experience, skills, projects, about |
| `src/assets/` | Images used in the UI (portrait and related media) |
| `src/App.test.js`, `setupTests.js`, `reportWebVitals.js` | CRA defaults for tests/metrics; not central to the portfolio design |

### `public/` — static shell
Favicon, HTML shell, and other files served as-is. The React build injects the compiled JS/CSS here for production.

### `api/` — optional backend experiment
| Path | Role |
| --- | --- |
| `api/linkedin.js` | Express OAuth helper that exchanges a LinkedIn auth code for a token. **Not used by the current UI** (the LinkedIn button just opens your public profile URL). |

### Root config files
| Path | Role |
| --- | --- |
| `package.json` | Scripts and dependencies (`start`, build, Vercel build helper) |
| `vercel.json` | Tells Vercel how to build the CRA app and rewrite SPA routes |
| `.env.example` | Documents optional LinkedIn env vars if you ever revive that helper |
| `README.md` | Setup/clone instructions |
| `DOCUMENTATION.md` | This overview |

## Mental model

Think of it as a **static brochure rebuilt as an interactive dashboard**. There is no database and no user accounts—just React rendering curated content with motion and responsive styling.
