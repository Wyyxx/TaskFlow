import React from 'react';


const styles = {
  nav: {
    backgroundColor: '#959590',
    padding: '10px 0',
    textAlign: 'center',
  }
};

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul>
        <li><a href="/espectaculos">Espectáculos</a></li>
        <li><a href="/politica">Política</a></li>
        <li><a href="/cultura">Cultura</a></li>
        <li><a href="/tendencias">Tendencias</a></li>
        <li><a href="/ciencia-salud">Ciencia y Salud</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
