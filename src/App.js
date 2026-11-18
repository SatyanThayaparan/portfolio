import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  PiLinkedinLogoBold,
  PiGithubLogoBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiPlayBold,
  PiPauseBold,
  PiCalendarBlankBold,
  PiCodeBold,
  PiBriefcaseBold,
  PiSparkleBold,
  PiStackBold,
  PiUserBold,
  PiHouseBold,
  PiSunBold,
  PiMoonBold,
} from "react-icons/pi";
import portrait from "./assets/satyan.jpeg";
import {
  about,
  experience,
  navLinks,
  profile,
  projects,
  sections,
  skillBars,
  toolGroups,
} from "./data/content";
import "./App.css";

const spring = { type: "spring", stiffness: 320, damping: 28, mass: 0.8 };
const OTTAWA_LAT = 45.4215;
const ABOUT_TABS = ["bio", "education", "traits"];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function coverStyle(cover = []) {
  const [a = "#122016", b = "#1ed760", c = "#0b3d22"] = cover;
  return {
    background: `linear-gradient(145deg, ${a} 0%, ${b} 52%, ${c} 100%)`,
  };
}

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "").trim();
  if (!raw) return null;
  const [section, item] = raw.split("/");
  if (!sections.includes(section) && section !== "hero") return null;
  return { section, item: item || null };
}

function buildHash({ section, jobIndex, skillIndex, projectIndex, aboutTab }) {
  if (!section || section === "hero") return "#hero";
  if (section === "experience") {
    const slug = experience[jobIndex]?.slug || slugify(experience[jobIndex]?.company);
    return `#experience/${slug}`;
  }
  if (section === "skills") {
    const slug = skillBars[skillIndex]?.slug || slugify(skillBars[skillIndex]?.title);
    return `#skills/${slug}`;
  }
  if (section === "projects") {
    const slug = projects[projectIndex]?.slug || slugify(projects[projectIndex]?.title);
    return `#projects/${slug}`;
  }
  if (section === "about") return `#about/${aboutTab}`;
  return `#${section}`;
}

/** Rough local sunrise/sunset (decimal hours) from latitude + day of year. */
function getSunHours(date = new Date(), lat = OTTAWA_LAT) {
  const start = new Date(date.getFullYear(), 0, 0);
  const day = Math.floor((date - start) / 86400000);
  const decl = 23.44 * Math.sin(((2 * Math.PI) / 365) * (day - 81));
  const latRad = (lat * Math.PI) / 180;
  const declRad = (decl * Math.PI) / 180;
  const ha = Math.acos(
    Math.min(1, Math.max(-1, -Math.tan(latRad) * Math.tan(declRad)))
  );
  const daylight = (2 * (ha * 180) / Math.PI) / 15;
  const noon = 12.2;
  return {
    sunrise: noon - daylight / 2,
    sunset: noon + daylight / 2,
  };
}

function themeFromSun(date = new Date(), lat = OTTAWA_LAT) {
  const { sunrise, sunset } = getSunHours(date, lat);
  const hour = date.getHours() + date.getMinutes() / 60;
  return hour >= sunrise && hour < sunset ? "morning" : "night";
}

function Glass({ className = "", children, ...props }) {
  return (
    <div className={`glass ${className}`} {...props}>
      {children}
    </div>
  );
}

function Equalizer({ active, bars = 12, size = "md" }) {
  return (
    <div className={`eq eq-${size} ${active ? "on" : ""}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }} />
      ))}
    </div>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(22);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [aboutTab, setAboutTab] = useState("bio");
  const [toolFilter, setToolFilter] = useState(toolGroups[0].title);
  const [theme, setTheme] = useState(() => themeFromSun());
  const [themeAuto, setThemeAuto] = useState(true);
  const suppressHashRef = useRef(false);
  const hashLockRef = useRef(0);

  const selectedJob = experience[jobIndex];
  const selectedSkill = skillBars[skillIndex];
  const selectedProject = projects[projectIndex];
  const filteredTools = toolGroups.find((g) => g.title === toolFilter)?.items || [];

  const sectionIndex = useMemo(
    () => Math.max(0, sections.indexOf(active === "hero" ? "hero" : active)),
    [active]
  );

  const writeHash = useCallback(
    (section = active) => {
      if (suppressHashRef.current) return;
      const next = buildHash({
        section,
        jobIndex,
        skillIndex,
        projectIndex,
        aboutTab,
      });
      if (window.location.hash === next) return;
      window.history.replaceState(null, "", next);
    },
    [active, aboutTab, jobIndex, projectIndex, skillIndex]
  );

  const applyHash = useCallback((parsed, { scroll = true } = {}) => {
    if (!parsed?.section) return;
    const { section, item } = parsed;
    suppressHashRef.current = true;
    hashLockRef.current = Date.now() + 700;
    setActive(section);

    if (section === "experience" && item) {
      const idx = experience.findIndex(
        (job) => job.slug === item || slugify(job.company) === item || slugify(job.title) === item
      );
      if (idx >= 0) setJobIndex(idx);
    }
    if (section === "skills" && item) {
      const idx = skillBars.findIndex(
        (skill) => skill.slug === item || slugify(skill.title) === item
      );
      if (idx >= 0) setSkillIndex(idx);
    }
    if (section === "projects" && item) {
      const idx = projects.findIndex(
        (project) =>
          project.slug === item ||
          slugify(project.title) === item ||
          (project.aliases || []).includes(item)
      );
      if (idx >= 0) setProjectIndex(idx);
    }
    if (section === "about" && item && ABOUT_TABS.includes(item)) {
      setAboutTab(item);
    }

    if (scroll) {
      window.requestAnimationFrame(() => scrollToId(section));
    }
    window.setTimeout(() => {
      suppressHashRef.current = false;
    }, 50);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!themeAuto) return undefined;
    const sync = () => setTheme(themeFromSun());
    sync();
    const id = window.setInterval(sync, 60_000);
    return () => window.clearInterval(id);
  }, [themeAuto]);

  useEffect(() => {
    if (!playing || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 97 ? 10 : p + 0.28));
    }, 110);
    return () => window.clearInterval(id);
  }, [playing, reduceMotion]);

  useEffect(() => {
    const initial = parseHash();
    if (initial) applyHash(initial, { scroll: true });

    const onHash = () => {
      const parsed = parseHash();
      if (parsed) applyHash(parsed, { scroll: true });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [applyHash]);

  useEffect(() => {
    writeHash(active);
  }, [active, aboutTab, jobIndex, projectIndex, skillIndex, writeHash]);

  useEffect(() => {
    const pendingSection = { current: "hero" };
    let settleTimer;

    const flushSection = () => {
      if (Date.now() < hashLockRef.current) return;
      const next = pendingSection.current;
      setActive((prev) => (prev === next ? prev : next));
    };

    const scheduleFlush = () => {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(flushSection, 180);
    };

    const nodes = sections.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          pendingSection.current = visible.target.id;
          scheduleFlush();
        }
      },
      { rootMargin: "-22% 0px -42% 0px", threshold: [0.12, 0.28, 0.45, 0.65] }
    );
    nodes.forEach((n) => observer.observe(n));

    const onScroll = () => {
      const doc = document.documentElement;
      const nearBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 80;
      if (nearBottom) pendingSection.current = "about";
      scheduleFlush();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    scheduleFlush();

    return () => {
      observer.disconnect();
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleTheme = () => {
    setThemeAuto(false);
    setTheme((t) => (t === "morning" ? "night" : "morning"));
  };

  const goRelative = (delta) => {
    const next = Math.min(sections.length - 1, Math.max(0, sectionIndex + delta));
    const section = sections[next];
    hashLockRef.current = Date.now() + 700;
    setActive(section);
    scrollToId(section);
    setPlaying(true);
  };

  const stepTrack = (delta) => {
    if (active === "experience") {
      setJobIndex((i) => Math.min(experience.length - 1, Math.max(0, i + delta)));
    } else if (active === "skills") {
      setSkillIndex((i) => Math.min(skillBars.length - 1, Math.max(0, i + delta)));
    } else if (active === "projects") {
      setProjectIndex((i) => Math.min(projects.length - 1, Math.max(0, i + delta)));
    } else if (active === "about") {
      setAboutTab((tab) => {
        const idx = ABOUT_TABS.indexOf(tab);
        const next = Math.min(ABOUT_TABS.length - 1, Math.max(0, idx + delta));
        return ABOUT_TABS[next];
      });
    } else {
      goRelative(delta);
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const tag = event.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable) return;

      if (event.code === "Space") {
        event.preventDefault();
        setPlaying((v) => !v);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goRelative(-1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goRelative(1);
        return;
      }
      if (event.key === "ArrowUp" || event.key === "k" || event.key === "K") {
        event.preventDefault();
        stepTrack(-1);
        return;
      }
      if (event.key === "ArrowDown" || event.key === "j" || event.key === "J") {
        event.preventDefault();
        stepTrack(1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, sectionIndex]);

  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.25 },
        transition: spring,
      };

  const swap = reduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 12, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -10, filter: "blur(6px)" },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      };

  const navItems = [
    { id: "hero", label: "Home", icon: PiHouseBold },
    ...navLinks.map((l) => ({
      ...l,
      icon:
        l.id === "experience"
          ? PiBriefcaseBold
          : l.id === "skills"
            ? PiSparkleBold
            : l.id === "projects"
              ? PiStackBold
              : PiUserBold,
    })),
  ];

  const activeLabel = navItems.find((n) => n.id === active)?.label || "Home";
  const isMorning = theme === "morning";

  return (
    <div className={`dashboard theme-${theme}`}>
      <div className="ambient" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>

      <aside className={`sidebar glass-strong ${menuOpen ? "open" : ""}`}>
        <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <div>
            <strong>{profile.shortName}</strong>
            <small>Portfolio OS</small>
          </div>
        </a>

        <nav className="side-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                <Icon />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className={`theme-toggle ${themeAuto ? "auto" : "manual"}`}
          onClick={toggleTheme}
          onDoubleClick={(e) => {
            e.preventDefault();
            setThemeAuto(true);
            setTheme(themeFromSun());
          }}
          aria-label={isMorning ? "Switch to night mode" : "Switch to morning mode"}
          title={
            themeAuto
              ? `Auto · ${isMorning ? "Morning" : "Night"} (follows sunrise/sunset)`
              : `Manual · ${isMorning ? "Morning" : "Night"} · double-click for auto`
          }
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {isMorning ? <PiSunBold /> : <PiMoonBold />}
          </span>
          <span className="theme-toggle-copy">
            <strong>{isMorning ? "Morning" : "Night"}</strong>
            <small>{themeAuto ? "Auto · sun sync" : "Manual"}</small>
          </span>
        </button>

        <Glass className="mini-player">
          <div className="mini-wave">
            <Equalizer active={playing && !reduceMotion} bars={10} size="sm" />
          </div>
          <div className="mini-meta">
            <p>Now playing</p>
            <strong>{profile.role}</strong>
          </div>
          <div className="mini-controls">
            <button type="button" aria-label="Previous" onClick={() => goRelative(-1)}>
              <PiSkipBackBold />
            </button>
            <button
              type="button"
              className="play"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying((v) => !v)}
            >
              {playing ? <PiPauseBold /> : <PiPlayBold />}
            </button>
            <button type="button" aria-label="Next" onClick={() => goRelative(1)}>
              <PiSkipForwardBold />
            </button>
          </div>
          <div className="mini-progress" aria-hidden="true">
            <i style={{ width: `${progress}%` }} />
          </div>
        </Glass>
      </aside>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="stage">
        <div className="top-chrome">
          <div className="top-veil" aria-hidden="true" />
          <header className="top-strip glass">
            <div className="top-title">
              <p className="eyebrow">Satyan // Dashboard</p>
              <div className="top-title-slot" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h1
                    key={activeLabel}
                    initial={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 10, filter: "blur(6px)" }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, filter: "blur(0px)" }
                    }
                    exit={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: -8, filter: "blur(6px)" }
                    }
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {activeLabel}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>
            <div className="top-actions">
              <a href={profile.github} target="_blank" rel="noreferrer" className="chip-btn">
                <PiGithubLogoBold /> GitHub
              </a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="chip-btn primary">
                <PiLinkedinLogoBold /> LinkedIn
              </a>
            </div>
          </header>
        </div>

        <main>
          <section id="hero" className="panel-section">
            <motion.div className="hero-grid" {...fade}>
              <Glass className="hero-card">
                <p className="now">Now playing</p>
                <h2>{profile.name}</h2>
                <p className="role">{profile.role}</p>
                <div className="hero-wave">
                  <Equalizer active={playing && !reduceMotion} bars={16} size="md" />
                </div>
                <div className="hero-progress">
                  <span>0:00</span>
                  <div className="track">
                    <motion.div className="fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span>∞</span>
                </div>
                <div className="hero-controls">
                  <button type="button" onClick={() => goRelative(-1)} aria-label="Previous section">
                    <PiSkipBackBold />
                  </button>
                  <button
                    type="button"
                    className="play"
                    onClick={() => setPlaying((v) => !v)}
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? <PiPauseBold /> : <PiPlayBold />}
                  </button>
                  <button type="button" onClick={() => goRelative(1)} aria-label="Next section">
                    <PiSkipForwardBold />
                  </button>
                </div>
              </Glass>

              <div className="stat-stack">
                {[
                  { label: "Roles", value: String(experience.length) },
                  { label: "Skill lanes", value: String(skillBars.length) },
                  { label: "Projects", value: String(projects.length) },
                  { label: "Focus", value: "Full stack" },
                ].map((stat) => (
                  <Glass className="stat-tile" key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </Glass>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="experience" className="panel-section">
            <motion.div className="section-label" {...fade}>
              <h2>Experience</h2>
              <p>Select a role like a track in your queue.</p>
            </motion.div>

            <div className="split">
              <Glass className="list-pane">
                {experience.map((job, index) => (
                  <button
                    type="button"
                    key={`${job.company}-${job.title}`}
                    className={`track-row ${jobIndex === index ? "active" : ""}`}
                    onClick={() => {
                      setJobIndex(index);
                      window.history.replaceState(
                        null,
                        "",
                        `#experience/${job.slug || slugify(job.company)}`
                      );
                    }}
                  >
                    <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                    <span className="track-main">
                      <strong>{job.title}</strong>
                      <small>{job.company}</small>
                    </span>
                    <span className="track-meta">{job.duration}</span>
                    {job.current && <span className="live">Live</span>}
                  </button>
                ))}
              </Glass>

              <AnimatePresence mode="wait">
                <motion.div key={selectedJob.company + selectedJob.title} className="detail-pane glass" {...swap}>
                  {selectedJob.current && (
                    <p className="live-pill">
                      <span /> Current role
                    </p>
                  )}
                  <h3>{selectedJob.title}</h3>
                  <p className="muted">{selectedJob.company}</p>
                  <p className="dates">
                    <PiCalendarBlankBold /> {selectedJob.dates}
                  </p>
                  <div className="bullet-rail">
                    {selectedJob.bullets.map((b, i) => (
                      <button
                        type="button"
                        key={b}
                        className="bullet-chip"
                        onClick={() => setPlaying(true)}
                      >
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        {b}
                      </button>
                    ))}
                  </div>
                  <div className="chip-wrap">
                    {selectedJob.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section id="skills" className="panel-section">
            <motion.div className="section-label" {...fade}>
              <h2>Skills</h2>
              <p>Tap a lane to inspect related languages and tools.</p>
            </motion.div>

            <div className="skills-board">
              <Glass className="skill-picker">
                {skillBars.map((skill, index) => (
                  <button
                    type="button"
                    key={skill.title}
                    className={`skill-pill ${skillIndex === index ? "active" : ""}`}
                    onClick={() => {
                      setSkillIndex(index);
                      window.history.replaceState(
                        null,
                        "",
                        `#skills/${skill.slug || slugify(skill.title)}`
                      );
                    }}
                  >
                    <strong>{skill.title}</strong>
                    <span>{skill.items.length} technologies</span>
                  </button>
                ))}
              </Glass>

              <AnimatePresence mode="wait">
                <motion.div key={selectedSkill.title} className="skill-focus glass" {...swap}>
                  <div>
                    <h3>{selectedSkill.title}</h3>
                    <p className="muted">Core languages & libraries in this lane</p>
                    <div className="chip-wrap">
                      {selectedSkill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <Glass className="tools-pane">
                <div className="tool-tabs">
                  {toolGroups.map((group) => (
                    <button
                      type="button"
                      key={group.title}
                      className={toolFilter === group.title ? "active" : ""}
                      onClick={() => setToolFilter(group.title)}
                    >
                      {group.title}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={toolFilter} className="chip-wrap dense" {...swap}>
                    {filteredTools.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </Glass>
            </div>
          </section>

          <section id="projects" className="panel-section">
            <motion.div className="section-label" {...fade}>
              <h2>Projects</h2>
              <p>Pick a project for the stack, how it works, and key files.</p>
            </motion.div>

            <div className="album-row">
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.title}
                  className={`album ${projectIndex === index ? "active" : ""}`}
                  onClick={() => {
                    setProjectIndex(index);
                    window.history.replaceState(
                      null,
                      "",
                      `#projects/${project.slug || slugify(project.title)}`
                    );
                  }}
                >
                  <span
                    className="cover"
                    aria-hidden="true"
                    style={project.coverImage ? undefined : coverStyle(project.cover)}
                  >
                    {project.coverImage ? (
                      <img className="cover-image" src={project.coverImage} alt="" />
                    ) : (
                      <>
                        <span className="cover-sheen" />
                        <span className="cover-emoji">{project.emoji}</span>
                      </>
                    )}
                  </span>
                  <strong>{project.title}</strong>
                  <small>{project.stack[0]}</small>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={selectedProject.title} className="album-detail glass" {...swap}>
                <div
                  className={`album-art${selectedProject.coverImage ? " has-cover-image" : ""}`}
                  aria-hidden="true"
                  style={
                    selectedProject.coverImage ? undefined : coverStyle(selectedProject.cover)
                  }
                >
                  {selectedProject.coverImage ? (
                    <img
                      className="album-cover-image"
                      src={selectedProject.coverImage}
                      alt=""
                    />
                  ) : (
                    <>
                      <span className="cover-sheen" />
                      <span className="album-emoji">{selectedProject.emoji}</span>
                    </>
                  )}
                  <div className="album-wave">
                    <Equalizer active={playing && !reduceMotion} bars={8} size="sm" />
                  </div>
                </div>
                <div className="album-copy">
                  {selectedProject.status && <span className="status">{selectedProject.status}</span>}
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.purpose}</p>
                  <div className="chip-wrap">
                    {selectedProject.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  {selectedProject.howItWorks?.length > 0 && (
                    <div className="project-block">
                      <h4>How it works</h4>
                      <ol className="project-steps">
                        {selectedProject.howItWorks.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {selectedProject.structure?.length > 0 && (
                    <div className="project-block">
                      <h4>Key pieces</h4>
                      <ul className="project-structure">
                        {selectedProject.structure.map((piece) => (
                          <li key={piece.name}>
                            <code>{piece.name}</code>
                            <span>{piece.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(selectedProject.demo || selectedProject.code) && (
                    <div className="album-actions">
                      {selectedProject.demo && (
                        <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                          Live demo
                        </a>
                      )}
                      {selectedProject.code && (
                        <a href={selectedProject.code} target="_blank" rel="noreferrer">
                          <PiCodeBold /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section id="about" className="panel-section about-section">
            <motion.div className="section-label" {...fade}>
              <h2>About</h2>
              <p>A quick look at who I am outside the commit history.</p>
            </motion.div>

            <Glass className="about-shell">
              <div className="about-head">
                <img src={portrait} alt={profile.name} />
                <div>
                  <h3>{profile.name}</h3>
                  <p className="muted">Full Stack Developer · Ottawa</p>
                  <div className="about-tabs">
                    {[
                      { id: "bio", label: "Bio" },
                      { id: "education", label: "Education" },
                      { id: "traits", label: "Traits" },
                    ].map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        className={aboutTab === tab.id ? "active" : ""}
                        onClick={() => {
                          setAboutTab(tab.id);
                          window.history.replaceState(null, "", `#about/${tab.id}`);
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-body-frame">
                <AnimatePresence mode="wait">
                  <motion.div key={aboutTab} className="about-body" {...swap}>
                    {aboutTab === "bio" && (
                      <div className="bio-lines">
                        {about.paragraphs.map((line, i) => (
                          <p key={line.slice(0, 18)}>
                            <span>{String(i + 1).padStart(2, "0")}</span>
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                    {aboutTab === "education" && (
                      <div className="edu-card">
                        <h4>{about.education.degree}</h4>
                        <p className="muted">{about.education.school}</p>
                        <p className="dates">{about.education.years}</p>
                        <div className="chip-wrap">
                          {about.education.highlights.map((h) => (
                            <span key={h}>{h}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {aboutTab === "traits" && (
                      <div className="trait-list">
                        {about.interpersonal.map((item) => (
                          <article key={item.title} className="trait-card">
                            <h4>{item.title}</h4>
                            <p>{item.detail}</p>
                          </article>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Glass>
          </section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="hotkeys">
            <span>← →</span> sections
            <span className="dot">·</span>
            <span>J K</span> tracks
            <span className="dot">·</span>
            <span>Space</span> play/pause
          </p>
        </footer>
      </div>
    </div>
  );
}
