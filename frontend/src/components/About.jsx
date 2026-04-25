import React from 'react';
import { personalInfo, certificates } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-grid">
          {/* Left - Image & Info */}
          <div className="about-left">
            <div className="about-img-container">
              <div className="about-img-frame">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="about-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.parentNode.classList.add('no-img-frame');
                  }}
                />
                <div className="about-img-placeholder">SR</div>
              </div>
              <div className="about-img-glow" />
              <div className="about-corner-tag">
                <span>📍</span> Abbottabad, PK
              </div>
            </div>

            <div className="contact-pills">
              <a href={`mailto:${personalInfo.email}`} className="pill">
                <span>📧</span> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="pill">
                <span>📞</span> {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="about-right">
            <div className="about-bio-box">
              <div className="terminal-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">about.js</span>
              </div>
              <div className="terminal-body">
                <p className="about-bio-text">{personalInfo.bio}</p>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">🎓</span>
                <div>
                  <strong>BSc Software Engineering</strong>
                  <p>AUST, GPA: 3.05</p>
                </div>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">💼</span>
                <div>
                  <strong>Currently Working At</strong>
                  <p>AUXWORK, Abbottabad</p>
                </div>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>Certified By</strong>
                  <p>Meta - Front End Developer</p>
                </div>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">⚡</span>
                <div>
                  <strong>Specialization</strong>
                  <p>React.js & Modern Frontend</p>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="certificates">
              <h3 className="cert-title">Certifications</h3>
              {certificates.map((cert, i) => (
                <div key={i} className="cert-card" style={{ borderColor: cert.color }}>
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <strong>{cert.name}</strong>
                    <span>Issued by {cert.issuer} • {cert.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
