import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <p className="skills-subtitle">{t('skills.subtitle')}</p>
          <h2 className="skills-title">{t('skills.title')}</h2>
          <p className="skills-intro">{t('skills.intro')}</p>
        </div>
        
        <motion.div 
          className="skills-pill-grid skills-pill-grid-expanded"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-python-plain colored"></i> Python</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-java-plain colored"></i> Java</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-mysql-plain colored"></i> SQL</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-javascript-plain colored"></i> JavaScript</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-bootstrap-plain colored"></i> Bootstrap</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-express-original"></i> Express.js</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-fastapi-plain colored"></i> FastAPI</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-mongodb-plain colored"></i> MongoDB</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-git-plain colored"></i> Git</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-github-original"></i> GitHub</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-docker-plain colored"></i> Docker</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-figma-plain colored"></i> Figma</motion.div>
          <motion.div variants={itemVariants} className="skill-pill"><i className="devicon-canva-original colored"></i> Canva</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
