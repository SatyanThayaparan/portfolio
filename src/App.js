import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const particlesInit = async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <img src="https://picsum.photos/200/200" alt="Profile" className="profile-pic" />
        <h2>Satyan Thayaparan</h2>
        <nav>
          <ul>
            <li><button onClick={() => setActiveSection("home")} className={activeSection === "home" ? "active" : ""}><FaHome /> Home</button></li>
            <li><button onClick={() => setActiveSection("about")} className={activeSection === "about" ? "active" : ""}><FaUser /> About</button></li>
            <li><button onClick={() => setActiveSection("resume")} className={activeSection === "resume" ? "active" : ""}><FaFileAlt /> Resume</button></li>
            <li><button onClick={() => setActiveSection("portfolio")} className={activeSection === "portfolio" ? "active" : ""}><FaBriefcase /> Portfolio</button></li>
            <li><button onClick={() => setActiveSection("contact")} className={activeSection === "contact" ? "active" : ""}><FaEnvelope /> Contact</button></li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="section-content"
          >
            {activeSection === "home" && (
              <section id="home" className="hero">
                <div className="home-background">
                  <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                      fullScreen: { enable: false, zIndex: -1 },
                      particles: {
                        number: { value: 100 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: { value: 3 },
                        move: { enable: true, speed: 1 },
                        links: { enable: true, color: "#a855f7", opacity: 0.5 }
                      }
                    }}
                    className="particles"
                  />
                  
                  <img src="https://picsum.photos/1920/1080" alt="Technology Background" className="home-img" />
                  <div className="home-overlay">
                    <h1>Satyan <span className="highlight">Thayaparan</span></h1>
                    <p>I am a Software Developer</p>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
export default App;
