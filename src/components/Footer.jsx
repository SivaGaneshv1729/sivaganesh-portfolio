import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-brand">
            <h2 className="footer-logo">Siva Ganesh</h2>
            <p className="footer-mantra">
              Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
            </p>
          </div>
          <div className="footer-links-wrap">
            <div className="footer-links-col">
              <h4 className="footer-col-title">Navigate</h4>
              <ul className="footer-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#journey-section">Journey</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#more-about">About</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-list">
                <li><a href="mailto:sivaganeshv1729@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">Focus</h4>
              <p className="footer-focus-text">Design-led front-end work, product storytelling, and AI-assisted developer experiences.</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/legacy-v1/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#f57059', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' }}>View Vanilla Version</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 SIVA GANESH VEMULA. ALL RIGHTS RESERVED.</p>
          <div className="footer-socials">
            <a href="https://github.com/SivaGaneshv1729" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="devicon-github-original"></i></a>
            <a href="https://www.linkedin.com/in/siva-ganesh-vemula/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain"></i></a>
            <a href="mailto:sivaganeshv1729@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer"><i className="devicon-google-plain"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
