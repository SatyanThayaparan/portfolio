import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <h1>My Portfolio</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section id="hero" className="hero">
          <h2>Welcome to My Portfolio</h2>
          <p>I am a passionate developer creating amazing web experiences.</p>
        </section>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>This is a brief introduction about me, my skills, and my background.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my recent projects:</p>
          <div className="projects">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of project 1.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of project 2.</p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            You can contact me at{' '}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
