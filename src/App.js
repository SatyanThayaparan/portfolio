import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from "framer-motion";
import { PiHouseBold, PiUserBold, PiFileTextBold, PiBriefcaseBold, PiEnvelopeBold } from "react-icons/pi";
import { PiGithubLogoBold, PiLinkedinLogoBold } from "react-icons/pi"; 
import { ReactTyped } from "react-typed"; 


import satyan from "./assets/satyan.jpeg";
import city from "./assets/Toronto.jpg";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  //Particle Animation from app launch
  const particlesInit = async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  };

  //Sidebar menu toggle initialization
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>

        {/* Toggle Button for Mobile */}
        <button className="menu-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          ☰
        </button>

        <div className="profile-container">
          <img src={satyan} alt="Profile" className="profile-pic" />
          <h2 className="profile-name">Satyan Thayaparan</h2>
        </div>

        <nav>

          <ul className="nav-links">
            <li><button onClick={() => setActiveSection("home")} className={activeSection === "home" ? "active" : ""}><PiHouseBold /> Home</button></li>
            <li><button onClick={() => setActiveSection("about")} className={activeSection === "about" ? "active" : ""}><PiUserBold /> About</button></li>
            <li><button onClick={() => setActiveSection("resume")} className={activeSection === "resume" ? "active" : ""}><PiFileTextBold /> Resume</button></li>
            <li><button onClick={() => setActiveSection("portfolio")} className={activeSection === "portfolio" ? "active" : ""}><PiBriefcaseBold /> Portfolio</button></li>
            <li><button onClick={() => setActiveSection("contact")} className={activeSection === "contact" ? "active" : ""}><PiEnvelopeBold /> Contact</button></li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons-container">
            <div className="social-icons">
              <a href="https://github.com/SatyanThayaparan" target="_blank" rel="noopener noreferrer">
                <PiGithubLogoBold className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/satyan-thayaparan-a55012206/" target="_blank" rel="noopener noreferrer">
                <PiLinkedinLogoBold className="social-icon" />
              </a>
            </div>
          </div>

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
                        move: { enable: true, speed: 5 },
                        links: { enable: true, color: "#FFB347", opacity: 0.5 }
                      }
                    }}
                    className="particles"
                  />
                  
                  <img src={city} alt="Technology Background" className="home-img" />
                  <div className="home-overlay">
                    <h1>Satyan <span className="highlight">Thayaparan</span></h1>

                    {/* Animated Typing Effect */}
                    <div className="typed-text">
                      I am a{" "}
                      <ReactTyped
                        strings={[
                          "<span class='typed-highlight'>Freelancer</span>",
                          "<span class='typed-highlight'>Software Engineer</span>",
                          "<span class='typed-highlight'>DevOps Specialist</span>",
                          "<span class='typed-highlight'>Fullstack Developer</span>"
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        backDelay={750}
                        loop
                        showCursor={true}
                        cursorChar="|"
                        className="typed-highlight"
                      />
                    </div>

                  </div>
                </div>
              </section>
            )}
<<<<<<< HEAD

            {/*

                Client ID: REDACTED_LINKEDIN_CLIENT_ID
                Client Secret: >REDACTED_LINKEDIN_CLIENT_SECRET=

                Redirect link: http://localhost:3000/callback

                https://www.linkedin.com/developers/tools/oauth/redirect

                https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=REDACTED_LINKEDIN_CLIENT_ID&redirect_uri=http://localhost:3000/callback/=r_liteprofile%20r_emailaddress

                GET https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=REDACTED_LINKEDIN_CLIENT_ID&redirect_uri=https://www.linkedin.com/developers/tools/oauth/redirect&scope=liteprofile%20emailaddress%20w_member_social

                token: AQUzMetlcAQtrqret3zytPChUqPLnwq-Z9ELrhWP3TgYbQPquyK1uXRDrRV1Ida33P7JyHIj9fJymGSlyz7NWjyXbLAFzlrgFJFdFNwwzskKzaHPqyEu9maqLei3rTnl4mb95YeuAsUeqOqxEXifez8FzNbxGXSqQ_riS5ziB54HHAcKN546rp8HpuCIigLUHvp1LpCmYj0RgW5qhQBKolJE-A1PaqeND3MQISPLNnTqmCMoJMg76eR6zPOKzhuuXtBbwO50y8D45N206zWaFoEjERDLTfoYt8Ds-hOIAHmZsmT7EI2WcC6umNn6r8EBdztMVTXfDZ-_8gZ9ciLwEDXeRRZn4Q


https://satyanthayaparan-portfolio.vercel.app/api/auth/linkedin/callback

            */}
      


=======
>>>>>>> parent of a6a8de8 (Implemening express API backend)
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
export default App;
