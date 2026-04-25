import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-logo">
        <span className="logo-bracket">&lt;</span>
        <span>Safi ur Rehman</span>
        <span className="logo-bracket">/&gt;</span>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Safi ur Rehman. Built with React.js & Node.js</p>
      <p className="footer-tagline">Designed & Developed with ❤️ in Abbottabad, PK</p>
    </div>
  </footer>
);

export default Footer;
