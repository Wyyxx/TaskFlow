import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  const noticiasDestacadas = [
    {
      id: 1,
      titulo: "Nuevo descubrimiento científico revoluciona la medicina",
      imagen: "https://www.gaceta.unam.mx/wp-content/uploads/2019/03/190307-aca3-des-f1-mujer-ciencia.jpg",
      resumen: "Científicos anuncian un avance innovador que podría cambiar el tratamiento de diversas enfermedades."
    },
    {
      id: 2,
      titulo: "Lanzamiento del nuevo Cybertruck de Tesla",
      imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_fef4b9d297e24e18bdf9b8433f8b26dd.webp", 
      resumen: "La empresa Tesla presenta su última creación, una innovadora tecnología que promete cambiar la forma en que interactuamos con el mundo digital."
    }
  ];
  
  const categorias = ["Salud", "Tecnologia", "Deportes", "Entretenimiento"];
  
  const ultimasNoticias = [
    {
      id: 1,
      titulo: "Entrevista exclusiva con el presidente sobre los desafíos del país",
      fecha: "15 de abril de 2024"
    },
    {
      id: 2,
      titulo: "Equipo nacional gana el campeonato mundial de fútbol",
      fecha: "12 de marzo de 2024"
    }
  ];
  

  return (
    <div className="home-container">
      {/* Sección de Noticias Destacadas */}
      <section className="section">
        <h2>Noticias Destacadas</h2>
        <div className="news-grid">
          {noticiasDestacadas.map(noticia => (
            <div key={noticia.id} className="news-card">
              <img src={noticia.imagen} alt={noticia.titulo} />
              <h3>{noticia.titulo}</h3>
              <p>{noticia.resumen}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Explorar Categorías */}
      <section className="section">
        <h2>Explorar Categorías</h2>
        <ul className="categories">
          {categorias.map(categoria => (
            <li key={categoria}>
              <Link to={`/${categoria.toLowerCase()}`}>{categoria}</Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Sección de Últimas Noticias */}
      <section className="section">
        <h2>Últimas Noticias</h2>
        <ul className="latest-news">
          {ultimasNoticias.map(noticia => (
            <li key={noticia.id}>
              <Link to={`/noticia/${noticia.id}`}>{noticia.titulo}</Link> - {noticia.fecha}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
