import { useEffect, useMemo, useState } from "react";
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

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  const selectedJob = experience[jobIndex];
  const selectedSkill = skillBars[skillIndex];
  const selectedProject = projects[projectIndex];
  const filteredTools = toolGroups.find((g) => g.title === toolFilter)?.items || [];

  const sectionIndex = useMemo(
    () => Math.max(0, sections.indexOf(active === "hero" ? "hero" : active)),
    [active]
  );

  useEffect(() => {
    if (!playing || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setProgress((p) => (p >= 97 ? 10 : p + 0.28));
    }, 110);
    return () => window.clearInterval(id);
  }, [playing, reduceMotion]);

  useEffect(() => {
    const nodes = sections.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const goRelative = (delta) => {
    const next = Math.min(sections.length - 1, Math.max(0, sectionIndex + delta));
    scrollToId(sections[next]);
    setPlaying(true);
  };

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

  return (
    <div className="dashboard">
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
        <header className="top-strip glass">
          <div>
            <p className="eyebrow">Satyan // Dashboard</p>
            <h1>{navItems.find((n) => n.id === active)?.label || "Home"}</h1>
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
                    onClick={() => setJobIndex(index)}
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
                    onClick={() => setSkillIndex(index)}
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
                  onClick={() => setProjectIndex(index)}
                >
                  <span className="cover" aria-hidden="true">
                    {project.emoji}
                  </span>
                  <strong>{project.title}</strong>
                  <small>{project.stack[0]}</small>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={selectedProject.title} className="album-detail glass" {...swap}>
                <div className="album-art" aria-hidden="true">
                  <span className="album-emoji">{selectedProject.emoji}</span>
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

                  {selectedProject.code && (
                    <div className="album-actions">
                      <a href={selectedProject.code} target="_blank" rel="noreferrer">
                        <PiCodeBold /> Code
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section id="about" className="panel-section">
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
                        onClick={() => setAboutTab(tab.id)}
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
        </footer>
      </div>
    </div>
  );
}
