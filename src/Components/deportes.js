import React from 'react';
import '../styles/styles.css';

const Deportes = () => {
  const noticiasDeportes = [
    {
      id: 1,
      titulo: "El 'castigo' para una de las grandes promesas del Barça",
      imagen: "https://estaticos-cdn.prensaiberica.es/clip/d6ebeacc-5a3e-40e0-b96e-6a1c6ada7abb_woman-libre-1200_default_0.webp", 
      resumen: "Dani Rodríguez sale de una lesión, fue suplente frente al Sabadell, pero todo apunta que tendrá poco protagonismo en el final de temporada."
    },
    {
      id: 2,
      titulo: "Cruz Azul (2-1) Monterrey.",
      imagen: "https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2024/04/07/17124491248010.jpg", 
      resumen: "El Estadio Ciudad de los Deportes recibió en la jornada 14 del Clausura 2024 al Cruz Azul de Martín Anselmi que llegaba a este compromiso con 3 partidos sin ganar, los celestes recibían a los Rayados del Monterrey que arribaron a este juego después de vencer al Inter de Miami en la CONCACAF Champions Cup"
    }
  ];

  return (
    <div className="deportes-container">
      <h2>Noticias de Deportes</h2>
      <div>
        {noticiasDeportes.map(noticia => (
          <div key={noticia.id} className="deportes-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deportes;
