import React from 'react';


const Header = () => {
  return (
    <header>
      <h1>The Daily Bugle</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/noticias">Noticias</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
