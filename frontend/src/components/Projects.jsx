import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-hero" style={{ background: `linear-gradient(135deg, ${project.color}20, rgba(13,31,60,0.9))` }}>
          <div className="modal-img-wrap">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="modal-img"
              onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('no-img'); }}
            />
            <div className="modal-img-placeholder">
              <span style={{ color: project.color }}>📁</span>
            </div>
          </div>
          <div className="modal-hero-info">
            <span className="modal-company" style={{ color: project.color }}>{project.company}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-period">📅 {project.period}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>🧩 Project Overview</h3>
            <p>{project.details.overview}</p>
          </div>

          <div className="modal-section">
            <h3>✨ Key Features</h3>
            <ul className="modal-features">
              {project.details.features.map((f, i) => (
                <li key={i}>
                  <span className="feat-dot" style={{ background: project.color }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>🔥 Challenges</h3>
            <p>{project.details.challenges}</p>
          </div>

          <div className="modal-section">
            <h3>🏆 Outcome</h3>
            <p className="outcome-text">{project.details.outcome}</p>
          </div>

          <div className="modal-tech">
            <h3>🛠 Tech Stack</h3>
            <div className="modal-tags">
              {project.tech.map(t => (
                <span key={t} className="tag" style={{ borderColor: `${project.color}50`, color: project.color }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <p className="section-sub">Click on any project to see full details ↓</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card"
              onClick={() => setSelected(project)}
              style={{ '--proj-color': project.color }}
            >
              <div className="proj-img-wrap">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="proj-img"
                  onError={e => { e.target.style.display = 'none'; e.target.parentNode.classList.add('no-img'); }}
                />
                <div className="proj-img-placeholder">
                  
                </div>
                <div className="proj-overlay">
                  <span className="proj-view-btn">View Details →</span>
                </div>
              </div>

              <div className="proj-content">
                <div className="proj-meta">
                  <span className="proj-company" style={{ color: project.color }}>{project.company}</span>
                  <span className="proj-period">{project.period}</span>
                </div>
                <h3 className="proj-title">{project.title}</h3>
                <p className="proj-desc">{project.shortDesc}</p>
                <div className="proj-tags">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tag">+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>

              <div className="proj-card-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${project.color}15, transparent 70%)` }} />
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
