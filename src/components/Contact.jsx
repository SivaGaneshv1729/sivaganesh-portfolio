import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const recipient = "sivaganeshv1729@gmail.com";
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\r\n` +
      `Email: ${formData.email}\r\n\r\n` +
      `Message:\r\n${formData.message}`
    );
    
    // Construct the mailto URL
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Create a temporary link element and click it programmatically.
    // This is significantly more reliable across various browsers (Chrome, Safari, Edge)
    // and prevents page navigation conflicts.
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    tempLink.target = '_blank';
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Show success feedback state
    setIsSubmitted(true);
    
    // Clear inputs after triggering the client
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact" style={{ padding: '8rem 0', position: 'relative', background: 'transparent' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="contact-title" style={{ fontSize: '3rem', marginBottom: '0.75rem', color: '#fff', fontWeight: '700', letterSpacing: '-0.5px' }}>{t('contact.title')}</h2>
          <p className="contact-subtitle" style={{ fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto', color: 'var(--text-muted)' }}>
            {t('contact.subtitle')}
          </p>
        </div>
        
        {/* Split Layout Grid */}
        <div 
          className="contact-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
            maxWidth: '1040px',
            margin: '0 auto'
          }}
        >
          {/* LEFT COLUMN: DotLottie Animation Showcase (User's Custom Asset) */}
          <div 
            className="lottie-animation-column"
            style={{
              padding: '2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
              position: 'relative'
            }}
          >
            {/* Outer Ambient Glow */}
            <div 
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'rgba(245, 119, 88, 0.15)',
                filter: 'blur(50px)',
                zIndex: 0
              }}
            ></div>

            {/* DotLottie React Player loading the exact requested animation */}
            <div style={{ position: 'relative', zIndex: 5, width: '100%', maxWidth: '360px', height: '320px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DotLottieReact
                src="https://lottie.host/957a8076-d8cb-43fc-a41f-a3ffc61ff47b/WKNg8EnLrY.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Clean, Compact Underline Contact Form (No Background) */}
          <div 
            className="contact-form-column"
            style={{ padding: '1rem 0' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: 0 }}>
              {isSubmitted && (
                <div style={{ padding: '0.85rem', background: 'rgba(39, 201, 63, 0.12)', borderLeft: '3px solid #27c93f', color: '#27c93f', fontSize: '0.95rem', fontWeight: '600', animation: 'fadeIn 0.3s ease' }}>
                  {t('contact.form.success')}
                </div>
              )}

              <div className="form-group" style={{ margin: 0, position: 'relative' }}>
                <label 
                  htmlFor="name" 
                  style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px', 
                    color: focusedField === 'name' ? 'var(--accent-coral)' : 'var(--text-muted)', 
                    marginBottom: '0.4rem', 
                    display: 'block', 
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {t('contact.form.name')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required 
                  placeholder={t('contact.form.namePlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: focusedField === 'name' ? '2px solid var(--accent-coral)' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <div className="form-group" style={{ margin: 0, position: 'relative' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px', 
                    color: focusedField === 'email' ? 'var(--accent-coral)' : 'var(--text-muted)', 
                    marginBottom: '0.4rem', 
                    display: 'block', 
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {t('contact.form.email')}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  style={{
                    width: '100%',
                    padding: '0.5rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: focusedField === 'email' ? '2px solid var(--accent-coral)' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <div className="form-group" style={{ margin: 0, position: 'relative' }}>
                <label 
                  htmlFor="message" 
                  style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px', 
                    color: focusedField === 'message' ? 'var(--accent-coral)' : 'var(--text-muted)', 
                    marginBottom: '0.4rem', 
                    display: 'block', 
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {t('contact.form.message')}
                </label>
                <textarea 
                  id="message" 
                  rows="3" 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required 
                  placeholder={t('contact.form.messagePlaceholder')}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: focusedField === 'message' ? '2px solid var(--accent-coral)' : '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease'
                  }}
                ></textarea>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    cursor: 'pointer', 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    padding: '0.8rem 2.5rem', 
                    borderRadius: '6px',
                    letterSpacing: '0.5px'
                  }}
                >
                  {t('contact.form.send')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
