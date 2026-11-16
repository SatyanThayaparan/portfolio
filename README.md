# Portfolio

Personal portfolio site for Satyan Thayaparan — experience, projects, and contact.

## Features

- Animated single-page layout with section navigation
- Home, about, resume, work, and contact sections
- Particle background and motion accents
- Optional API routes for contact / backend helpers

## Tech stack

- React (Create React App)
- Framer Motion
- tsparticles
- Express (API helpers)
- Vercel-ready (`vercel.json`)

## Setup

1. Install Node.js 18+.
2. Install dependencies:

```bash
npm install
```

3. Copy any required secrets into a local `.env` (do not commit real values).
4. Start the app:

```bash
npm start
```

## Usage

- `npm start` — development server at `http://localhost:3000`
- `npm run build` — production build in `build/`
- `npm test` — run tests

## Project structure

```text
portfolio/
├── public/
├── src/           # React UI
├── api/           # server helpers
└── vercel.json
```

## Notes

- Keep API keys and mail credentials in `.env` only.
