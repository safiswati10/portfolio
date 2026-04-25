import React, { useState } from 'react';
import { experience, education } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [tab, setTab] = useState('work');

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">My <span>Journey</span></h2>

        <div className="exp-tabs">
          <button className={`exp-tab ${tab === 'work' ? 'active' : ''}`} onClick={() => setTab('work')}>
            💼 Work Experience
          </button>
          <button className={`exp-tab ${tab === 'edu' ? 'active' : ''}`} onClick={() => setTab('edu')}>
            🎓 Education
          </button>
        </div>

        {tab === 'work' && (
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item" style={{ '--item-color': exp.color }}>
                <div className="timeline-line" />
                <div className="timeline-dot" />
                <div className="timeline-card glass-card">
                  <div className="tl-header">
                    <div>
                      <h3 className="tl-role">{exp.role}</h3>
                      <div className="tl-company">{exp.company}</div>
                    </div>
                    <div className="tl-right">
                      <span className="tl-badge">{exp.type}</span>
                      <div className="tl-period">{exp.period}</div>
                      <div className="tl-location">📍 {exp.location}</div>
                    </div>
                  </div>
                  <ul className="tl-points">
                    {exp.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'edu' && (
          <div className="timeline">
            {education.map((edu, i) => (
              <div key={i} className="timeline-item" style={{ '--item-color': '#00d4ff' }}>
                <div className="timeline-line" />
                <div className="timeline-dot" />
                <div className="timeline-card glass-card">
                  <div className="tl-header">
                    <div>
                      <h3 className="tl-role">{edu.degree}</h3>
                      <div className="tl-company">{edu.institution}</div>
                    </div>
                    <div className="tl-right">
                      <div className="tl-period">{edu.period}</div>
                      <div className="tl-location">📍 {edu.location}</div>
                      {edu.gpa && <div className="tl-gpa">GPA: {edu.gpa}</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
