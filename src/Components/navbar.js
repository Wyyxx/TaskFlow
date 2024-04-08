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
        <li><a href="/salud">Salud</a></li>
        <li><a href="/tecnologia">Tecnología</a></li>
        <li><a href="/deportes">Deportes</a></li>
        <li><a href="/entretenimiento">Entretenimiento</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
