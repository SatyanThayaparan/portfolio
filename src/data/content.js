export const profile = {
  name: "Satyan Thayaparan",
  shortName: "Satyan",
  role: "Developer",
  linkedIn: "https://www.linkedin.com/in/satyan-thayaparan-a55012206/",
  github: "https://github.com/SatyanThayaparan",
};

export const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export const experience = [
  {
    title: "Fullstack Developer",
    slug: "fullscript",
    company: "Fullscript",
    dates: "December 2025 - Present",
    duration: "Ongoing",
    current: true,
    bullets: [
      "Work experience is still being composed…",
      "More exciting developments coming soon.",
      "Stay tuned for updates on innovative projects.",
    ],
    stack: ["React", "Ruby on Rails", "TypeScript", "Git"],
  },
  {
    title: "Full Stack Developer",
    slug: "indigenous-services-canada",
    company: "Indigenous Services Canada",
    dates: "June 2024 - June 2025",
    duration: "1 year",
    bullets: [
      "Developed web applications with JavaScript, AJAX, and FetchXML",
      "Built intake portals using Power Pages and Power Apps",
      "Automated workflows with Power Automate",
      "Managed version control via Azure DevOps and GitHub",
    ],
    stack: ["JavaScript", "Power Apps", "Power Pages", "Azure DevOps", "Git", "Power Automate"],
  },
  {
    title: "Software and DevOps Engineer",
    slug: "scenario-thales",
    company: "Scenario, A Thales Company",
    dates: "May 2019 - Aug 2019, Jan 2022 - Dec 2022",
    duration: "1+ years",
    bullets: [
      "Automated system provisioning using Python and Bash scripts",
      "Managed server infrastructure and IP configurations",
      "Conducted vulnerability assessments with Nessus",
      "Optimized VM management in Agile workflows",
    ],
    stack: ["Python", "Bash", "Linux", "Windows", "Jira", "Nessus", "RackTables"],
  },
  {
    title: "I.T. Security Analyst",
    slug: "shared-services-canada",
    company: "Shared Services Canada",
    dates: "April 2020 - August 2020",
    duration: "4 months",
    bullets: [
      "Enhanced web security protocols across enterprise systems",
      "Designed intranet pages with HTML and JavaScript",
      "Performed SQL operations for data verification",
    ],
    stack: ["HTML", "JavaScript", "SQL", "Security"],
  },
];

export const skillBars = [
  {
    title: "Frontend",
    slug: "frontend",
    items: ["React", "HTML/CSS", "JavaScript", "Angular"],
  },
  {
    title: "Backend",
    slug: "backend",
    items: ["Node.js", "Python", "SQL", "C#"],
  },
  {
    title: "OOP",
    slug: "oop",
    items: ["Java", "C++", "C#", "Python"],
  },
  {
    title: "Functional",
    slug: "functional",
    items: ["JavaScript", "Haskell", "Python", "C"],
  },
];

export const toolGroups = [
  {
    title: "Databases",
    items: ["Microsoft Dataverse", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "Power Apps", "Power Pages", "Power Automate", "Azure DevOps"],
  },
  {
    title: "Web Technologies",
    items: ["AJAX", "JSON", "FetchXML", "Microsoft Liquid"],
  },
  {
    title: "Tools & Frameworks",
    items: ["Git/GitHub", "Jira", "Confluence", "Excel", "RackTables", "Nessus"],
  },
];

export const projects = [
  {
    title: "Discord Music Bot",
    slug: "discord-music-bot",
    emoji: "🤖",
    cover: ["#1b1338", "#5865f2", "#1ed760"],
    status: "Active",
    purpose:
      "A Discord bot that joins voice channels and plays YouTube audio with queue, pause, skip, loop, and playlist controls.",
    stack: ["Python", "discord.py", "yt-dlp", "FFmpeg", "python-dotenv"],
    howItWorks: [
      "main.py starts the Discord client and loads music/help command modules (cogs).",
      "Play commands resolve a URL or search into a streamable track via yt-dlp.",
      "Each server keeps its own queue so playback never crosses between guilds.",
      "FFmpeg streams audio into voice; when a track ends, the next queued song starts.",
    ],
    structure: [
      { name: "main.py", detail: "Bot entry and cog loading" },
      { name: "music_cog.py", detail: "Search, queue, voice, and playback controls" },
      { name: "help_cog.py", detail: "Custom help command for users" },
    ],
    code: "https://github.com/SatyanThayaparan/discord-music-bot",
  },
  {
    title: "Movie Review Database",
    slug: "movie-review-database",
    emoji: "🎬",
    cover: ["#1a0f14", "#f5c518", "#e50914"],
    purpose:
      "An IMDb-style catalogue where people browse movies, leave reviews, follow users, keep watched lists, and contributors can edit entries.",
    stack: ["Node.js", "Express", "MongoDB", "Pug", "Bootstrap", "express-session"],
    howItWorks: [
      "server.js connects to MongoDB and mounts routers for movies, people, users, and auth.",
      "Most pages fetch documents and render Pug templates on the server.",
      "Sessions power login, reviews, follows, and watched-list actions.",
      "Contributor routes write new or updated catalogue documents directly in MongoDB.",
    ],
    structure: [
      { name: "server.js + *-router.js", detail: "HTTP entry and page/action controllers" },
      { name: "movies.js / users.js / reviews.js", detail: "Database helpers for each collection" },
      { name: "public/views/", detail: "Pug templates and page partials" },
    ],
    code: "https://github.com/SatyanThayaparan/samze-movie-database",
  },
  {
    title: "Sleeper Tracker",
    slug: "sleeper-tracker",
    emoji: "🏀",
    cover: ["#0d1b2a", "#f77f00", "#1ed760"],
    purpose:
      "A Streamlit NBA draft copilot for Sleeper: live pick tracking, projection CSV import, ADP/news context, and ranked suggestions. Read-only — it never makes picks.",
    stack: ["Python", "Streamlit", "pandas", "Sleeper API", "feedparser"],
    howItWorks: [
      "Enter a draft ID/URL and pull live draft state from Sleeper’s public API.",
      "Optional projection CSV becomes the personal value baseline.",
      "ADP and RSS headlines add market and injury/news tone.",
      "recommend.py ranks remaining players by value, roster need, and context while the page refreshes.",
    ],
    structure: [
      { name: "app.py", detail: "UI, polling, CSV intake, and news" },
      { name: "recommend.py", detail: "Scoring and roster-need ranking" },
      { name: "adp.py", detail: "Average Draft Position helpers" },
    ],
    code: "https://github.com/SatyanThayaparan/sleeper-tracker",
  },
  {
    title: "LifeWrapped",
    slug: "lifewrapped",
    emoji: "✦",
    cover: ["#101820", "#7b61ff", "#30f07a"],
    purpose:
      "A personal activity logger that turns everyday minutes into monthly/yearly insights and a shareable Wrapped-style card — all on-device.",
    stack: ["HTML", "CSS", "JavaScript", "localStorage", "Netlify"],
    howItWorks: [
      "Entries load from browser localStorage so there’s no backend account.",
      "A log dialog captures category, date, minutes, and notes.",
      "Dashboards filter by month or year to surface patterns.",
      "Canvas code builds a shareable Wrapped PNG; JSON import/export handles backups. A React + Capacitor v2 prototype explores native packaging.",
    ],
    structure: [
      { name: "app.js / index.html", detail: "Production static app logic and UI" },
      { name: "v2/", detail: "React + Capacitor prototype of the same idea" },
      { name: "netlify.toml", detail: "Static hosting config" },
    ],
    code: "https://github.com/SatyanThayaparan/life-app",
  },
  {
    title: "Kat Kreationz",
    slug: "kat-kreationz",
    emoji: "🎀",
    cover: ["#2a1220", "#ff7eb6", "#ffd6e8"],
    purpose:
      "A marketing site for Kat Kreationz event décor — gallery, packages, inventory, and a Book Now inquiry flow without a backend form service.",
    stack: ["React", "TypeScript", "Vite", "CSS", "Vercel"],
    howItWorks: [
      "Shared layout presents home, work, packages, inventory, and info as one scrolling site.",
      "Most copy and offerings live in a single content file for easy updates.",
      "Choosing a package or look prefills the booking form with useful defaults.",
      "Validated inquiries open a mailto draft and/or copy to the clipboard for the owner.",
    ],
    structure: [
      { name: "src/pages/", detail: "Marketing sections and booking/contact UI" },
      { name: "src/data/content.ts", detail: "Editable packages, inventory, and gallery copy" },
      { name: "src/lib/booking.ts", detail: "Prefill and inquiry message helpers" },
    ],
    code: "https://github.com/SatyanThayaparan/kat-kreationz",
  },
  {
    title: "Anime Tracker",
    slug: "anime-tracker",
    emoji: "📺",
    cover: ["#12081f", "#7c3aed", "#22d3ee"],
    purpose:
      "Chrome extension that tracks anime shows, episodes, and watch time locally — with a popup and day/week/month dashboard.",
    stack: ["Chrome Extension MV3", "JavaScript", "chrome.storage", "chrome.idle"],
    howItWorks: [
      "Background service worker times the active tab and pauses when you’re idle.",
      "Content script reads show/episode cues on sites like Crunchyroll and sends heartbeats.",
      "Sessions save per day in chrome.storage.local — popup for now, dashboard for history.",
    ],
    structure: [
      { name: "background.js + content.js", detail: "Timing engine and page sensing" },
      { name: "utils/", detail: "Site adapters, storage helpers, categories" },
      { name: "popup/ + dashboard/", detail: "Live view and longer-range stats" },
    ],
    code: "https://github.com/SatyanThayaparan/anime-tracker",
  },
];

export const about = {
  paragraphs: [
    "Full Stack Developer passionate about creating innovative web applications. Currently working at Fullscript, where I develop robust solutions using modern technologies including React, Ruby on Rails, and TypeScript.",
    "With experience in both DevOps engineering and security analysis, I bring a comprehensive approach to software development, focusing on security, scalability, and user experience.",
    "Beyond coding, I'm a music enthusiast (hence the Spotify-themed design!), active in sports like basketball, badminton, and volleyball, and enjoy watching TV shows, movies, anime, and listening to podcasts. I make it a priority to travel a few times a year and always put family first.",
  ],
  education: {
    degree: "Bachelor of Computer Science Honours",
    school: "Carleton University, Ottawa, ON",
    years: "2018 - 2025",
    highlights: ["Dean's Honor List Student", "Program Facilitator for Innovation Hub"],
  },
  interpersonal: [
    {
      title: "Team-Oriented and Collaborative",
      detail:
        "Comfortable pairing across product, design, and ops — clear updates, shared ownership, and calm delivery under deadlines.",
    },
    {
      title: "Community Service and Engagement",
      detail:
        "Stays involved beyond the ticket queue: supporting local and campus initiatives and showing up for group goals.",
    },
    {
      title: "Mentorship and Networking",
      detail:
        "Enjoys helping newer developers ramp up, trading notes with peers, and growing through honest feedback loops.",
    },
    {
      title: "Culturally Engaged and People-Oriented",
      detail:
        "Builds rapport easily across backgrounds; values empathy in teamwork and keeps family and community close.",
    },
    {
      title: "Tech-Savvy and Curious",
      detail:
        "Always exploring new tools and patterns — from cloud workflows to frontend craft — then applying what sticks.",
    },
  ],
};

export const sections = ["hero", "experience", "skills", "projects", "about"];
