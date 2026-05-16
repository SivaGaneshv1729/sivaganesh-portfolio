import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let jackMaxScroll = 0;
    let trackMaxTranslate = 0;
    let visualItems = track.querySelectorAll('.project-visual-item');

    const handleResize = () => {
      if (!visualItems.length) return;
      const containerHeight = track.parentElement.clientHeight;
      const itemHeight = visualItems[0].clientHeight;
      const centerPadding = Math.max(0, (containerHeight - itemHeight) / 2);
      track.style.paddingTop = `${centerPadding}px`;
      track.style.paddingBottom = `${centerPadding}px`;

      const trackHeight = track.scrollHeight;
      trackMaxTranslate = Math.max(0, trackHeight - containerHeight);

      const newHeight = window.innerHeight + trackMaxTranslate;
      container.style.height = `${newHeight}px`;
      jackMaxScroll = trackMaxTranslate;
    };

    const handleScroll = () => {
      if (jackMaxScroll <= 0) return;
      const jackRect = container.getBoundingClientRect();
      let scrollProgress = -jackRect.top / jackMaxScroll;
      scrollProgress = Math.max(0, Math.min(scrollProgress, 1));

      const progressPercent = scrollProgress * 100;
      if (lineRef.current && dotRef.current) {
        lineRef.current.style.height = progressPercent + '%';
        dotRef.current.style.top = progressPercent + '%';
      }

      track.style.transform = `translateY(-${scrollProgress * trackMaxTranslate}px)`;

      const totalItems = visualItems.length;
      const thresholdStep = 1 / totalItems;
      let newActiveIndex = 0;
      for (let i = 0; i < totalItems; i++) {
        if (scrollProgress >= i * thresholdStep) {
          newActiveIndex = i;
        }
      }
      setActiveIndex(newActiveIndex);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(handleResize, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="projects projects-scroll-jack">
      <div className="projects-sticky-container">
        <div className="container h-full">
          <div className="projects-header">
            <h2 className="section-title">Projects</h2>
          </div>

          <div className="projects-split-layout" id="projectsStack">
            {/* Left Static Column: Text & Tracker */}
            <div className="projects-left-column">
              <div className="project-details-container">
                {/* Project 1 Details */}
                <div className={`project-content ${activeIndex === 0 ? 'is-active' : ''}`} id="project-details-0">
                  <h3 className="project-title">
                    <a href="https://github.com/SivaGaneshv1729/production-payment-gateway-async" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Payment Gateway</a>
                  </h3>
                  <p className="project-description">
                    Engineered a robust payment gateway integration and containerized it via Docker. Resolved build configurations and implemented testing for high system reliability. Structured the codebase and authored documentation to streamline future scaling.
                  </p>
                  
                  <div className="project-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      <li>Robust payment gateway integration</li>
                      <li>Containerized deployment via Docker</li>
                    </ul>
                  </div>

                  <div className="project-skills">
                    <h4>Tech Stack</h4>
                    <div className="project-tags">
                      <span className="tag"><i className="devicon-docker-plain"></i> Docker</span>
                      <span className="tag"><i className="devicon-nodejs-plain"></i> Node.js</span>
                      <span className="tag"><i className="devicon-express-original"></i> Express.js</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 Details */}
                <div className={`project-content ${activeIndex === 1 ? 'is-active' : ''}`} id="project-details-1">
                  <h3 className="project-title">
                    <a href="https://github.com/SivaGaneshv1729/multi-tenant-saas-platform" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Multi-Tenant SaaS Platform</a>
                  </h3>
                  <p className="project-description">
                    Architected a scalable full-stack MERN SaaS platform with multi-tenant architecture. Designed RESTful APIs and optimized schemas for secure, role-based data isolation. Built a responsive UI and managed complex state for centralized data processing.
                  </p>
                  
                  <div className="project-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      <li>Secure, role-based data isolation</li>
                      <li>Complex state management for centralized processing</li>
                    </ul>
                  </div>

                  <div className="project-skills">
                    <h4>Tech Stack</h4>
                    <div className="project-tags">
                      <span className="tag"><i className="devicon-mongodb-plain"></i> MongoDB</span>
                      <span className="tag"><i className="devicon-express-original"></i> Express.js</span>
                      <span className="tag"><i className="devicon-react-original"></i> React</span>
                      <span className="tag"><i className="devicon-nodejs-plain"></i> Node.js</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 Details */}
                <div className={`project-content ${activeIndex === 2 ? 'is-active' : ''}`} id="project-details-2">
                  <h3 className="project-title">
                    <a href="https://github.com/SivaGaneshv1729/ClassmateAI" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>ClassmateAI</a>
                  </h3>
                  <p className="project-description">
                    Built ClassmateAI, adopted by 50+ peers for task and note management. Architected a Full-Stack Application featuring an AI chatbot powered by the Google Gemini API. Developed user-facing modules and implemented a clean, responsive UI.
                  </p>
                  
                  <div className="project-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      <li>AI chatbot powered by Google Gemini API</li>
                      <li>Multiple user-facing modules (notes, tasks, attendance)</li>
                    </ul>
                  </div>

                  <div className="project-skills">
                    <h4>Tech Stack</h4>
                    <div className="project-tags">
                      <span className="tag"><i className="devicon-fastapi-plain"></i> FastAPI</span>
                      <span className="tag"><i className="devicon-mongodb-plain"></i> MongoDB</span>
                      <span className="tag"><i className="devicon-python-plain"></i> Python</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Progress Tracker */}
              <div className="project-scroll-track-wrapper">
                <div className="project-scroll-track">
                  <div className="project-scroll-line" ref={lineRef} id="projectScrollLine"></div>
                  <div className="project-scroll-dot" ref={dotRef} id="projectScrollDot"></div>
                </div>
              </div>
            </div>

            {/* Right Scrolling Column: Images */}
            <div className="projects-right-column">
              <div className="projects-visual-track" ref={trackRef} id="projectVisualTrack">
                <div className={`project-visual image-showcase project-visual-item ${activeIndex === 0 ? 'is-active' : ''}`} data-index="0" style={{ background: 'rgba(43, 108, 176, 0.9)' }}>
                  <img src="images/project1_clear.png" alt="Payment Gateway" style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} />
                </div>

                <div className={`project-visual image-showcase project-visual-item ${activeIndex === 1 ? 'is-active' : ''}`} data-index="1" style={{ background: 'rgba(220, 53, 69, 0.9)' }}>
                  <img src="images/project2_clear.png" alt="SaaS Platform" style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} />
                </div>

                <div className={`project-visual image-showcase project-visual-item ${activeIndex === 2 ? 'is-active' : ''}`} data-index="2" style={{ background: 'rgba(72, 187, 120, 0.9)' }}>
                  <img src="images/project3_clear.png" alt="Classmate AI" style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-more-cta">
        <a className="btn btn-outline" href="https://github.com/sivaganeshv1729" target="_blank" rel="noopener noreferrer">More Projects</a>
      </div>
    </section>
  );
};

export default Projects;
