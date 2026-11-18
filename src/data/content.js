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
    title: "Benji",
    slug: "discord-music-bot",
    aliases: ["benji", "discord-music-bot"],
    emoji: "🎧",
    coverImage: "/projects/benji-icon.png",
    cover: ["#1E4D3B", "#F4EFE6", "#F5A623"],
    status: "Active",
    purpose:
      "Benji is a Discord music bot with an interactive Now Playing panel: YouTube search with a result picker, queue/seek/loop, volume, saved per-server playlists, and auto-leave when idle — cream, canopy, and amber branding throughout.",
    stack: ["Python", "discord.py", "yt-dlp", "FFmpeg", "python-dotenv"],
    howItWorks: [
      "main.py starts the Discord client and loads music/help cogs; run.ps1 keeps a single instance online.",
      "!play search opens a select menu of top YouTube hits (URLs play directly); yt-dlp downloads audio for reliable FFmpeg playback.",
      "A persistent Now Playing message exposes pause, skip, seek, loop, volume, and queue — edited in place so the channel stays clean.",
      "Each guild has its own queue, volume, and saved playlists (local JSON); Benji leaves voice after five minutes alone or fully idle.",
    ],
    structure: [
      { name: "main.py + run.ps1", detail: "Bot entry and single-instance startup" },
      { name: "music_cog.py", detail: "Resolve, download, queue, volume, idle watchdog" },
      { name: "player_view.py", detail: "Now Playing buttons and search select UI" },
      { name: "playlists_store.py", detail: "Per-guild save/load playlists" },
      { name: "brand.py + branding/", detail: "Palette helpers and Benji avatar/banner assets" },
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
    demo: "https://satyanthayaparan-sleeper-tracker-app-pmaj1x.streamlit.app",
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
    title: "Shiori",
    slug: "shiori",
    aliases: ["anime-tracker"],
    emoji: "栞",
    coverImage: "/projects/shiori-icon.png",
    cover: ["#3f5f4e", "#f3ead8", "#c04028"],
    status: "Active",
    purpose:
      "Shiori (栞, “bookmark”) is a Chrome extension that tracks anime watching on Netflix, YouTube, and Disney+. Watch time, seasons, and episodes stay local, with AniList matching for posters and a Ghibli-toned popup + dashboard.",
    stack: [
      "Chrome Extension MV3",
      "JavaScript",
      "chrome.storage",
      "AniList GraphQL",
      "Chart.js",
    ],
    howItWorks: [
      "Content script on Netflix / YouTube / Disney+ reads title, season, and episode cues and heartbeats while the video is playing — even if Chrome is in the background.",
      "Background service worker owns the session: play/pause saves, schema migrations, and day-bucketed totals in chrome.storage.local.",
      "Titles are verified against AniList (local cache + posters); season progress and confidence actions surface in the popup.",
      "Popup shows Now Watching; the dashboard covers Overview, Insights metrics, All Shows, and settings — all on-device.",
    ],
    structure: [
      { name: "background.js + content.js", detail: "Session timing, reinject, and heartbeats" },
      { name: "utils/", detail: "Site parsers, storage schema, AniList client, insights metrics" },
      { name: "popup/ + dashboard/", detail: "Live Now Watching UI and longer-range stats" },
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
