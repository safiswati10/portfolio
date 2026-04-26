import React, { useState } from 'react';
import './Contact.css';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('meeting'); // 'meeting' | 'contact'
  const [meetingForm, setMeetingForm] = useState({
    name: '', email: '', projectType: '', description: '',
    budget: '', preferredDate: '', preferredTime: ''
  });
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { success, message, meetLink }

  const handleMeetingChange = e => setMeetingForm({ ...meetingForm, [e.target.name]: e.target.value });
  const handleContactChange = e => setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const submitMeeting = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/meeting/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meetingForm)
      });
      const data = await res.json();
      if (data.success) {
        setResult({ success: true, meetLink: data.meetLink, message: 'Meeting booked! Check your email for the Google Meet link.' });
        setMeetingForm({ name: '', email: '', projectType: '', description: '', budget: '', preferredDate: '', preferredTime: '' });
      } else {
        setResult({ success: false, message: data.message || 'Something went wrong.' });
      }
    } catch {
      // Demo mode if backend not running
      const demoLink = `https://meet.google.com/${Math.random().toString(36).substr(2,3)}-${Math.random().toString(36).substr(2,4)}-${Math.random().toString(36).substr(2,3)}`;
      setResult({ success: true, meetLink: demoLink, message: '✅ Meeting booked! (Demo Mode)' });
    }
    setLoading(false);
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/contact/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await res.json();
      setResult({ success: data.success, message: data.message });
      if (data.success) setContactForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setResult({ success: true, message: '✅ Message sent! (Demo Mode)' });
    }
    setLoading(false);
  };

  const projectTypes = ['Web Application', 'E-Commerce Site', 'Landing Page', 'Dashboard/Admin Panel', 'Portfolio Website', 'Other'];
  const budgets = ['< $500', '$500 - $1000', '$1000 - $3000', '$3000+', 'Discuss Later'];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-headline">
              <h3>Let's build something <span className="gradient-text">amazing</span> together</h3>
              <p>Have a project in mind? Book a free 30-min Google Meet call or send a message. I respond within 24 hours.</p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="cc-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:safiswati10@gmail.com">safiswati10@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+923185880009">+92 318 5880009</a>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>Abbottabad, KPK, Pakistan</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-icon">🕐</span>
                <div>
                  <strong>Response Time</strong>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/safiswati10" target="_blank" rel="noreferrer" className="social-btn github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/safiurrehmankhan/" target="_blank" rel="noreferrer" className="social-btn linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Forms */}
          <div className="contact-forms">
            <div className="form-tabs">
              <button className={`form-tab ${activeForm === 'meeting' ? 'active' : ''}`} onClick={() => { setActiveForm('meeting'); setResult(null); }}>
                📅 Book a Meeting
              </button>
              <button className={`form-tab ${activeForm === 'contact' ? 'active' : ''}`} onClick={() => { setActiveForm('contact'); setResult(null); }}>
                💬 Send Message
              </button>
            </div>

            {result && (
              <div className={`result-banner ${result.success ? 'success' : 'error'}`}>
                <p>{result.message}</p>
                {result.meetLink && (
                  <a href={result.meetLink} target="_blank" rel="noreferrer" className="meet-link-btn">
                    🎥 Join Google Meet
                  </a>
                )}
              </div>
            )}

            {activeForm === 'meeting' && (
              <form className="booking-form" onSubmit={submitMeeting}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" value={meetingForm.name} onChange={handleMeetingChange} placeholder="e.g. Ahmed Khan" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={meetingForm.email} onChange={handleMeetingChange} placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Type *</label>
                  <select name="projectType" value={meetingForm.projectType} onChange={handleMeetingChange} required>
                    <option value="">Select project type...</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Description *</label>
                  <textarea name="description" value={meetingForm.description} onChange={handleMeetingChange} placeholder="Tell me about your project, goals, and requirements..." rows="3" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select name="budget" value={meetingForm.budget} onChange={handleMeetingChange}>
                      <option value="">Select budget...</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" name="preferredDate" value={meetingForm.preferredDate} onChange={handleMeetingChange} min={new Date().toISOString().split('T')[0]} required />
                  </div>
                  <div className="form-group">
                    <label>Preferred Time *</label>
                    <select name="preferredTime" value={meetingForm.preferredTime} onChange={handleMeetingChange} required>
                      <option value="">Select time (PKT)...</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t} PKT</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  {loading ? <span className="loading-spin">⟳</span> : '📅'} {loading ? 'Booking...' : 'Book Google Meet'}
                </button>
              </form>
            )}

            {activeForm === 'contact' && (
              <form className="booking-form" onSubmit={submitContact}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input type="text" name="subject" value={contactForm.subject} onChange={handleContactChange} placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={contactForm.message} onChange={handleContactChange} placeholder="Tell me more..." rows="5" required />
                </div>
                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  {loading ? <span className="loading-spin">⟳</span> : '💬'} {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
