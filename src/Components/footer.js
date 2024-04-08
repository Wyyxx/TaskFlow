import React from 'react';
import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} The Daily Bugle - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
