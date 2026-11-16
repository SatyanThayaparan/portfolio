# Portfolio

Personal portfolio for Satyan Thayaparan — Spotify-inspired “now playing” single-page site with experience, skills, projects, and about.

## Features

- Dark Spotify-inspired theme with equalizer hero and player controls
- Work experience cards with tech stacks
- Skill bars and tools/platforms
- Featured project cards linking to GitHub
- About section with education and interpersonal skills
- Responsive layout with sticky navigation

## Tech stack

- React (Create React App)
- Framer Motion
- react-icons
- Plus Jakarta Sans / JetBrains Mono

## Setup

1. Clone the repo and enter the project folder:

```bash
git clone https://github.com/SatyanThayaparan/portfolio.git
cd portfolio
```

2. Install [Node.js 18+](https://nodejs.org/).
3. Install dependencies:

```bash
npm install
```

4. Optional: copy `.env.example` to `.env` if you use the LinkedIn API helper.
5. Start the app:

```bash
npm start
```

6. Open `http://localhost:3000`.

## Usage

- `npm start` — development server
- `npm run build` — production build in `build/`
- `npm run preview` is not CRA-native; use `npx serve -s build` after building

## Project structure

```text
portfolio/
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── data/content.js
│   └── assets/
├── api/           # optional LinkedIn helper
└── vercel.json
```

## Notes

- Keep secrets in `.env` only.
