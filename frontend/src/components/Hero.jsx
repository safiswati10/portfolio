import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#00d4ff' : '#7c3aed'
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = '#00d4ff';
            ctx.globalAlpha = (1 - dist/100) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section id="home" className="hero-section">
      <canvas ref={particlesRef} className="hero-canvas" />

      {/* Background glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Work
          </div>

          <div className="hero-greeting">
            <span className="mono-text">Hello World! I'm</span>
          </div>

          <h1 className="hero-name">
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? 'name-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <div className="hero-title-wrap">
            <span className="hero-title-static">I build </span>
            <TypeAnimation
              sequence={[
                'React.js Applications', 2000,
                'Responsive UIs', 2000,
                'E-Commerce Solutions', 2000,
                'Interactive Dashboards', 2000,
                'Modern Web Apps', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero-typed"
            />
          </div>

          <p className="hero-bio">{personalInfo.bio.substring(0, 150)}...</p>

          <div className="hero-actions">
            <Link to="projects" smooth={true} duration={600} offset={-70}>
              <button className="btn-primary">View My Work ↓</button>
            </Link>
            <Link to="contact" smooth={true} duration={600} offset={-70}>
              <button className="btn-outline">Book a Meeting 📅</button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Companies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-ring-outer">
            <div className="profile-ring-inner">
              <div className="profile-img-wrap">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="profile-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('no-img');
                  }}
                />
                <div className="profile-placeholder">
                  <span>S</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div className="tech-badge badge-react">⚛️ React</div>
          <div className="tech-badge badge-js">🟨 JS</div>
          <div className="tech-badge badge-css">🎨 CSS3</div>
          <div className="tech-badge badge-node">🟢 Node</div>

          {/* Code snippet decoration */}
          <div className="code-snippet">
            <span className="code-line"><span className="code-kw">const</span> dev = {'{'}</span>
            <span className="code-line">  name: <span className="code-str">"Safi"</span>,</span>
            <span className="code-line">  stack: <span className="code-str">"MERN"</span></span>
            <span className="code-line">{'}'}</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
