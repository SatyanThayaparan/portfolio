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
    items: ["React", "HTML/CSS", "JavaScript", "Angular"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "SQL", "C#"],
  },
  {
    title: "OOP",
    items: ["Java", "C++", "C#", "Python"],
  },
  {
    title: "Functional",
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
    title: "Discord Bot",
    emoji: "🤖",
    status: "Active",
    purpose:
      "Custom bot bringing music playback and interactive features to Discord servers with real-time user engagement",
    stack: ["JavaScript", "Discord API", "YouTube API", "Git", "GitHub"],
    code: "https://github.com/SatyanThayaparan/discord-music-bot",
  },
  {
    title: "Movie Review Database",
    emoji: "🎬",
    purpose:
      "Full-stack IMDb-inspired platform for discovering, searching, and reviewing movies with dynamic user interactions",
    stack: ["Node.js", "Express.js", "MongoDB", "Pug", "Bootstrap", "JavaScript"],
    code: "https://github.com/SatyanThayaparan/samze-movie-database",
  },
  {
    title: "Sleeper Tracker",
    emoji: "🏀",
    purpose:
      "Streamlit draft copilot for Sleeper NBA leagues with live pick tracking and recommendation logic",
    stack: ["Python", "Streamlit", "Sleeper API"],
    code: "https://github.com/SatyanThayaparan/sleeper-tracker",
  },
  {
    title: "LifeWrapped",
    emoji: "✦",
    purpose:
      "Mobile-friendly activity logging app that turns everyday moments into monthly and yearly Wrapped-style recaps",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    code: "https://github.com/SatyanThayaparan/life-app",
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
