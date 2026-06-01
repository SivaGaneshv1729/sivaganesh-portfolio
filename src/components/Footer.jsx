import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-brand">
            <h2 className="footer-logo">{t('footer.brand')}</h2>
            <p className="footer-mantra">
              {t('footer.mantra')}
            </p>
          </div>
          <div className="footer-links-wrap">
            <div className="footer-links-col">
              <h4 className="footer-col-title">{t('footer.nav')}</h4>
              <ul className="footer-list">
                <li><a href="#home">{t('nav.home')}</a></li>
                <li><a href="#journey-section">{t('nav.journey')}</a></li>
                <li><a href="#projects">{t('nav.work')}</a></li>
                <li><a href="#skills">{t('nav.skills')}</a></li>
                <li><a href="#more-about">{t('nav.about')}</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">{t('footer.connect')}</h4>
              <ul className="footer-list">
                <li><a href="mailto:sivaganeshv1729@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/siva-ganesh-vemula/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/SivaGaneshv1729" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-col-title">{t('footer.focus')}</h4>
              <p className="footer-focus-text">{t('footer.focusText')}</p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/legacy-v1/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#f57059', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' }}>{t('footer.vanilla')}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
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
