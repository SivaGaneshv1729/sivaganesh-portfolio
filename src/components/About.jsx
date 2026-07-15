import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const carouselItems = [
  { src: "/images/sg1.jpg", alt: "Workspace and development setup" },
  { src: "/images/main logo.png", alt: "Portrait of Siva Ganesh" },
  { src: "/images/project2_clear.png", alt: "Creative design and coding process" },
  { src: "/images/siva_ganesh.png", alt: "Siva Ganesh brand mark" }
];

const About = () => {
  const { t } = useTranslation();
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
          <motion.div 
            className="more-about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="section-subtitle">{t('about.subtitle')}</p>
            <h2 className="more-about-title">{t('about.title')}</h2>
            <div className="more-about-description">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>
          </motion.div>

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
