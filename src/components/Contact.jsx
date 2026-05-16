import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a question or want to work together? Leave a message!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {isSubmitted && (
            <div style={{ padding: '1rem', marginBottom: '1.5rem', background: 'rgba(72, 187, 120, 0.2)', color: '#48bb78', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold' }}>
              Message sent successfully! I will get back to you soon.
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              required 
              placeholder="Enter your name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
              placeholder="Enter your email" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              value={formData.message} 
              onChange={(e) => setFormData({...formData, message: e.target.value})} 
              required 
              placeholder="Your message here..." 
            ></textarea>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer' }}>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
