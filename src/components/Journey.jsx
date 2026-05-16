import React from 'react';

const Journey = () => {
  return (
    <section id="journey-section" className="journey-section">
      <div className="container">
        <div className="journey-header">
          <p className="section-subtitle">MY EXPERIENCE</p>
          <h2 className="journey-title-static">My Journey</h2>
        </div>

        <div className="journey-vertical-container">
          {/* Vertical Track Line */}
          <div className="journey-v-line"></div>

          {/* Node 1 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">Aditya University</div>
              <div className="journey-year">Sept 2023 – Present</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">B.Tech - AI & Machine Learning</h3>
              <p className="journey-node-desc">Pursuing a Bachelor of Technology with a focus on Artificial Intelligence and Machine Learning. (CGPA : 8.7)</p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">Rotaract Club of RRC AEC</div>
              <div className="journey-year">June 2024 – Present</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">Chief Designer & Editor</h3>
              <p className="journey-node-desc">Directed club branding and executed content strategies, driving community engagement through thoughtful design.</p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">Aditya University</div>
              <div className="journey-year">May 2025 – June 2025</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">Web Development Intern</h3>
              <p className="journey-node-desc">Contributed to a full-stack AI web application. Engineered key modules like a task manager and an AI chatbot to enhance user productivity and support.</p>
            </div>
          </div>

          {/* Node 4 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">GDG on Campus</div>
              <div className="journey-year">Sept 2025 – Present</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">AI Lead</h3>
              <p className="journey-node-desc">Organized collaborative AI workshops and tech programs, facilitating real-world project development and peer mentorship.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Journey;
