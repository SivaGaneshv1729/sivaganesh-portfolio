import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLight, setIsLight] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      setIsLight(true);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('light-theme');
    const currentlyLight = body.classList.contains('light-theme');
    setIsLight(currentlyLight);
    localStorage.setItem('theme', currentlyLight ? 'light' : 'dark');
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.journey'), href: '#journey-section', id: 'journey-section' },
    { name: t('nav.work'), href: '#projects', id: 'projects' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.about'), href: '#more-about', id: 'more-about' },
  ];

  return (
    <>
      {/* Detached SG Logo */}
      <a href="#home" className="detached-logo" aria-label="Home">
        <img src="images/main logo.png" alt="Logo" />
      </a>

      {/* Language Switcher */}
      <div className="lang-dropdown-wrapper" ref={langMenuRef} style={{ position: 'fixed', top: '20px', right: 'calc(5% + 60px)', zIndex: 1001 }}>
        <button 
          className="lang-toggle"
          onClick={() => setLangMenuOpen(!langMenuOpen)}
          aria-label="Change language"
        >
          <Globe size={20} />
        </button>
        {langMenuOpen && (
          <div className="lang-menu" style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            right: 0,
            background: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(37, 45, 58, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isLight ? '1px solid rgba(148, 163, 184, 0.32)' : '1px solid rgba(56, 65, 82, 0.5)',
            borderRadius: '16px',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '140px',
            boxShadow: isLight ? '0 16px 34px rgba(15, 23, 42, 0.12)' : '0 10px 40px rgba(0,0,0,0.3)',
            animation: 'fadeInDown 0.2s ease forwards'
          }}>
            <button 
              onClick={() => { i18n.changeLanguage('en'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'en' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'en' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'en' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'en') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'en') e.currentTarget.style.background = 'transparent' }}
            >
              English
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('ja'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'ja' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'ja' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'ja' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'ja') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'ja') e.currentTarget.style.background = 'transparent' }}
            >
              日本語
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('es'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'es' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'es' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'es' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'es') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'es') e.currentTarget.style.background = 'transparent' }}
            >
              Español
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('fr'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'fr' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'fr' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'fr' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'fr') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'fr') e.currentTarget.style.background = 'transparent' }}
            >
              Français
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('hi'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'hi' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'hi' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'hi' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'hi') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'hi') e.currentTarget.style.background = 'transparent' }}
            >
              हिन्दी
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('zh'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'zh' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'zh' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'zh' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'zh') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'zh') e.currentTarget.style.background = 'transparent' }}
            >
              中文
            </button>
            <button 
              onClick={() => { i18n.changeLanguage('de'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'de' ? 'var(--accent-coral)' : 'transparent',
                color: i18n.language === 'de' ? '#fff' : (isLight ? '#172033' : 'var(--text-primary)'),
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                fontWeight: i18n.language === 'de' ? '600' : '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { if (i18n.language !== 'de') e.currentTarget.style.background = isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { if (i18n.language !== 'de') e.currentTarget.style.background = 'transparent' }}
            >
              Deutsch
            </button>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <button 
        className="theme-toggle" 
        id="themeToggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <svg 
          className="sun-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ display: isLight ? 'block' : 'none' }}
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>

        <svg 
          className="moon-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ display: isLight ? 'none' : 'block' }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>

      {/* Header */}
      <header className="header">
        <div className="container" style={{ padding: 0 }}>
          <div className="header-content">
            <nav className={`nav ${isOpen ? 'active' : ''}`} id="nav">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button 
                className="menu-toggle" 
                id="menuToggle" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
