import React, { useState, useEffect } from 'react';

const carouselItems = [
  { src: "/images/sg1.jpg", alt: "Workspace and development setup" },
  { src: "/images/main logo.png", alt: "Portrait of Siva Ganesh" },
  { src: "/images/project2_clear.png", alt: "Creative design and coding process" },
  { src: "/images/siva_ganesh.png", alt: "Siva Ganesh brand mark" }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const getCardClass = (index) => {
    const total = carouselItems.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) return 'center';
    if (diff === 1) return 'down-1';
    if (diff === 2) return 'down-2';
    if (diff === total - 1) return 'up-1';
    return 'up-2';
  };

  return (
    <section id="more-about" className="more-about">
      <div className="container">
        <div className="more-about-grid">
          {/* Left: Text Content */}
          <div className="more-about-text">
            <p className="section-subtitle">A BIT MORE ABOUT ME</p>
            <h2 className="more-about-title">Crafting digital experiences with purpose</h2>
            <div className="more-about-description">
              <p>
                I believe that code is more than just instructions for a machine; it&apos;s a medium for solving real human problems. My transition from photography to software engineering wasn&apos;t a departure from creativity, but an evolution of it.
              </p>
              <p>
                As a developer, I am deeply opinionated about user experience. I strive to build interfaces that feel alive and systems that scale elegantly. Every pixel should have a purpose, and every interaction should tell a story. When I&apos;m not writing code, I&apos;m analyzing design trends, mentoring peers, and pushing the boundaries of what&apos;s possible on the web.
              </p>
            </div>
          </div>

          {/* Right: Visual Stage */}
          <div className="more-about-visual">
            <div className="about-visual-stage">
              <div className="about-carousel-visual" aria-label="About me image carousel">
                <div className="about-carousel-track">
                  {carouselItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`about-carousel-card ${getCardClass(index)}`} 
                      data-index={index}
                    >
                      <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
