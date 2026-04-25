import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const SkillBar = ({ skill, animate }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-pct">{skill.level}%</span>
    </div>
    <div className="skill-track">
      <div
        className="skill-fill"
        style={{ width: animate ? `${skill.level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { label: 'Frontend', key: 'frontend', color: '#00d4ff', icon: '⚛️' },
    { label: 'Libraries & UI', key: 'libraries', color: '#7c3aed', icon: '📦' },
    { label: 'Tools & Platforms', key: 'tools', color: '#10b981', icon: '🔧' },
  ];

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.key} className="skills-card glass-card" style={{ '--cat-color': cat.color }}>
              <div className="skills-card-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-label">{cat.label}</h3>
              </div>
              <div className="skills-list">
                {skills[cat.key].map((skill, i) => (
                  <SkillBar key={i} skill={skill} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="tech-cloud">
          <p className="cloud-label">Also familiar with</p>
          <div className="cloud-tags">
            {['Node.js', 'MongoDB', 'REST APIs', 'Responsive Design', 'WordPress',
              'JMeter', 'Adobe Illustrator', 'UI/UX', 'Agile/Scrum', 'Component Architecture'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
