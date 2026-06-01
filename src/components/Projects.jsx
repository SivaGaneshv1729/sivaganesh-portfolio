import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);
  const resizeRef = useRef(null);
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

    resizeRef.current = handleResize;

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

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(track);
    if (container.parentElement) {
      resizeObserver.observe(container.parentElement);
    }

    const timer1 = setTimeout(handleResize, 150);
    const timer2 = setTimeout(handleResize, 500);
    const timer3 = setTimeout(handleResize, 1500);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <section id="projects" ref={containerRef} className="projects projects-scroll-jack">
        <div className="projects-sticky-container">
          <div className="container h-full">
            <div className="projects-header">
              <h2 className="section-title">{t('projects.title')}</h2>
            </div>

            <div className="projects-split-layout" id="projectsStack">
              {/* Left Static Column: Text & Tracker */}
              <div className="projects-left-column">
                <div 
                  className="project-details-container custom-scrollbar" 
                  style={{ 
                    overflowY: 'auto', 
                    maxHeight: 'calc(100vh - 180px)', 
                    paddingRight: '1.5rem' 
                  }}
                >
                  {/* Project 1 Details */}
                  <div 
                    className={`project-content ${activeIndex === 0 ? 'is-active' : ''}`} 
                    id="project-details-0"
                    style={{ position: activeIndex === 0 ? 'relative' : 'absolute', width: '100%' }}
                  >
                    <h3 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                      <a 
                        href="https://github.com/SivaGaneshv1729/production-payment-gateway-async" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-coral)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        {t('projects.p1.title')}
                      </a>
                    </h3>
                    <p className="project-description" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {t('projects.p1.desc')}
                    </p>
                    
                    <div className="project-highlights" style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t('projects.keyHighlights')}</h4>
                      <ul style={{ marginBottom: '0' }}>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p1.h1')}</li>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p1.h2')}</li>
                      </ul>
                    </div>

                    <div className="project-skills">
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>{t('projects.techStack')}</h4>
                      <div className="project-tags" style={{ gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-docker-plain"></i> Docker</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-nodejs-plain"></i> Node.js</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-express-original"></i> Express.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 Details */}
                  <div 
                    className={`project-content ${activeIndex === 1 ? 'is-active' : ''}`} 
                    id="project-details-1"
                    style={{ position: activeIndex === 1 ? 'relative' : 'absolute', width: '100%' }}
                  >
                    <h3 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                      <a 
                        href="https://github.com/SivaGaneshv1729/multi-tenant-saas-platform" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-coral)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        {t('projects.p2.title')}
                      </a>
                    </h3>
                    <p className="project-description" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {t('projects.p2.desc')}
                    </p>
                    
                    <div className="project-highlights" style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t('projects.keyHighlights')}</h4>
                      <ul style={{ marginBottom: '0' }}>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p2.h1')}</li>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p2.h2')}</li>
                      </ul>
                    </div>

                    <div className="project-skills">
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>{t('projects.techStack')}</h4>
                      <div className="project-tags" style={{ gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-mongodb-plain"></i> MongoDB</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-express-original"></i> Express.js</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-react-original"></i> React</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-nodejs-plain"></i> Node.js</span>
                      </div>
                    </div>
                  </div>

                  {/* Project 3 Details */}
                  <div 
                    className={`project-content ${activeIndex === 2 ? 'is-active' : ''}`} 
                    id="project-details-2"
                    style={{ position: activeIndex === 2 ? 'relative' : 'absolute', width: '100%' }}
                  >
                    <h3 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                      <a 
                        href="https://github.com/SivaGaneshv1729/ClassmateAI" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-coral)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                      >
                        {t('projects.p3.title')}
                      </a>
                    </h3>
                    <p className="project-description" style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {t('projects.p3.desc')}
                    </p>
                    
                    <div className="project-highlights" style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t('projects.keyHighlights')}</h4>
                      <ul style={{ marginBottom: '0' }}>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p3.h1')}</li>
                        <li style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t('projects.p3.h2')}</li>
                      </ul>
                    </div>

                    <div className="project-skills">
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>{t('projects.techStack')}</h4>
                      <div className="project-tags" style={{ gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-fastapi-plain"></i> FastAPI</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-mongodb-plain"></i> MongoDB</span>
                        <span className="tag" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}><i className="devicon-python-plain"></i> Python</span>
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
                    <img 
                      src="images/project1_clear.png" 
                      alt="Payment Gateway" 
                      onLoad={() => resizeRef.current && resizeRef.current()}
                      style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} 
                    />
                  </div>

                  <div className={`project-visual image-showcase project-visual-item ${activeIndex === 1 ? 'is-active' : ''}`} data-index="1" style={{ background: 'rgba(220, 53, 69, 0.9)' }}>
                    <img 
                      src="images/project2_clear.png" 
                      alt="SaaS Platform" 
                      onLoad={() => resizeRef.current && resizeRef.current()}
                      style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} 
                    />
                  </div>

                  <div className={`project-visual image-showcase project-visual-item ${activeIndex === 2 ? 'is-active' : ''}`} data-index="2" style={{ background: 'rgba(72, 187, 120, 0.9)' }}>
                    <img 
                      src="images/project3_clear.png" 
                      alt="Classmate AI" 
                      onLoad={() => resizeRef.current && resizeRef.current()}
                      style={{ width: '100%', aspectRatio: '899 / 647', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="projects-more-cta">
        <a className="btn btn-outline" href="https://github.com/sivaganeshv1729" target="_blank" rel="noopener noreferrer">{t('projects.moreProjects')}</a>
      </div>
    </>
  );
};

export default Projects;
