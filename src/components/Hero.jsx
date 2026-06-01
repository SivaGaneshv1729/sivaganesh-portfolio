import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  // Create roles array inside component so it reacts to language changes
  const roles = [
    t('hero.roles.dev'),
    t('hero.roles.designer'),
    t('hero.roles.problemSolver')
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timer;
    const typingSpeed = 90;
    const deletingSpeed = 55;
    const pauseBeforeDelete = 1400;
    const pauseBeforeRetype = 450;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timer = setTimeout(() => {}, pauseBeforeRetype);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.hello')}<span className="accent">.</span></h1>
            <p className="hero-subtitle">{t('hero.subtitle')}</p>
            <h2 className="hero-role" aria-label={roles[roleIndex]}>
              <span className="hero-role-sizer" aria-hidden="true">{t('hero.roles.dev')}</span>
              <span className="hero-role-text is-typing">{displayedText}</span>
            </h2>
            
            <div className="hero-buttons">
              <a href="mailto:sivaganeshv1729@gmail.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('hero.contactMe')}</a>
              <a href="https://drive.google.com/file/d/1Z2ZUkhXqSvGRlgMjDKAw019l5DH79g9C/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">{t('hero.resume')}</a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="orange-circle"></div>
            <div className="profile-container">
              <div className="profile-circle">
                <img src="images/siva_ganesh.png" alt="Profile Image" />
              </div>
            </div>
            <div className="decorative-brackets">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 490 499" preserveAspectRatio="xMidYMid meet" className="bracket-left">
                <g transform="translate(0,329) scale(0.1,-0.1)" fill="#f57059" stroke="none">
                  <path d="M2799 3065 c-46 -25 -2670 -1205 -2680 -1205 -5 0 -9 -92 -9 -213 l0 -213 247 -111 c137 -61 730 -328 1318 -593 589 -265 1088 -491 1109 -501 22 -10 43 -19 48 -19 4 0 8 118 8 263 l0 263 -1015 439 -1015 438 0 32 0 33 1012 435 1013 435 3 266 c1 146 -1 266 -5 266 -5 -1 -20 -7 -34 -15z m-9 -274 c0 -155 -3 -211 -12 -219 -7 -6 -449 -198 -983 -427 -580 -249 -980 -426 -994 -441 -17 -16 -25 -34 -25 -59 0 -24 8 -43 25 -60 14 -14 260 -126 604 -274 319 -138 760 -328 980 -423 l400 -173 3 -218 c1 -140 -1 -217 -8 -217 -5 0 -108 44 -227 98 -120 55 -702 316 -1293 582 -591 266 -1083 490 -1092 498 -16 13 -18 36 -18 187 0 126 3 175 13 182 6 6 455 209 997 453 542 244 1012 455 1045 470 123 56 489 222 519 235 69 30 66 38 66 -194z"/>
                </g>
              </svg>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="100 100 490 499" preserveAspectRatio="xMidYMid meet" className="bracket-right">
                <g transform="translate(430,499) scale(-0.1,-0.1)" fill="#f57059" stroke="none">
                  <path d="M2799 3065 c-46 -25 -2670 -1205 -2680 -1205 -5 0 -9 -92 -9 -213 l0 -213 247 -111 c137 -61 730 -328 1318 -593 589 -265 1088 -491 1109 -501 22 -10 43 -19 48 -19 4 0 8 118 8 263 l0 263 -1015 439 -1015 438 0 32 0 33 1012 435 1013 435 3 266 c1 146 -1 266 -5 266 -5 -1 -20 -7 -34 -15z m-9 -274 c0 -155 -3 -211 -12 -219 -7 -6 -449 -198 -983 -427 -580 -249 -980 -426 -994 -441 -17 -16 -25 -34 -25 -59 0 -24 8 -43 25 -60 14 -14 260 -126 604 -274 319 -138 760 -328 980 -423 l400 -173 3 -218 c1 -140 -1 -217 -8 -217 -5 0 -108 44 -227 98 -120 55 -702 316 -1293 582 -591 266 -1083 490 -1092 498 -16 13 -18 36 -18 187 0 126 3 175 13 182 6 6 455 209 997 453 542 244 1012 455 1045 470 123 56 489 222 519 235 69 30 66 38 66 -194z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
