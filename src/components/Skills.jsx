import React from 'react';

export const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="decorative-marquee-bg"></div>
      <div className="skills-marquee-container">
        <div className="skills-marquee">
          <span>Python</span><span className="dot">★</span>
          <span>Java</span><span className="dot">★</span>
          <span>SQL</span><span className="dot">★</span>
          <span>JavaScript</span><span className="dot">★</span>
          <span>FastAPI</span><span className="dot">★</span>
          <span>MongoDB</span><span className="dot">★</span>
          <span>Docker</span><span className="dot">★</span>
          <span>Git & Github</span><span className="dot">★</span>
          <span aria-hidden="true">Python</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">Java</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">SQL</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">JavaScript</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">FastAPI</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">MongoDB</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">Docker</span><span aria-hidden="true" className="dot">★</span>
          <span aria-hidden="true">Git & Github</span><span aria-hidden="true" className="dot">★</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <p className="skills-subtitle">MY SKILLSET</p>
          <h2 className="skills-title">The Magic Behind</h2>
          <p className="skills-intro">A focused stack built around fast interfaces, scalable systems, and thoughtful product design.</p>
        </div>
        
        <div className="skills-pill-grid skills-pill-grid-expanded">
          <div className="skill-pill"><i className="devicon-python-plain colored"></i> Python</div>
          <div className="skill-pill"><i className="devicon-java-plain colored"></i> Java</div>
          <div className="skill-pill"><i className="devicon-mysql-plain colored"></i> SQL</div>
          <div className="skill-pill"><i className="devicon-javascript-plain colored"></i> JavaScript</div>
          <div className="skill-pill"><i className="devicon-bootstrap-plain colored"></i> Bootstrap</div>
          <div className="skill-pill"><i className="devicon-express-original"></i> Express.js</div>
          <div className="skill-pill"><i className="devicon-fastapi-plain colored"></i> FastAPI</div>
          <div className="skill-pill"><i className="devicon-mongodb-plain colored"></i> MongoDB</div>
          <div className="skill-pill"><i className="devicon-git-plain colored"></i> Git</div>
          <div className="skill-pill"><i className="devicon-github-original"></i> GitHub</div>
          <div className="skill-pill"><i className="devicon-docker-plain colored"></i> Docker</div>
          <div className="skill-pill"><i className="devicon-figma-plain colored"></i> Figma</div>
          <div className="skill-pill"><i className="devicon-canva-original colored"></i> Canva</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
