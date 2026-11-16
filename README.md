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

4. Copy the env template and fill in LinkedIn credentials (`.env` is gitignored):

```bash
copy .env.example .env
```

5. Start the app:

```bash
npm start
```

6. Open `http://localhost:3000`.

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
├── .env.example   # secret template
└── vercel.json
```

## Notes

- Keep secrets in `.env` only. Commit `.env.example`, never `.env`.
