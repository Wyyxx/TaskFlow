import React from 'react';
import '../styles/styles.css';

const Tecnologia = () => {
  const noticiasTecnologia = [
    {
      id: 1,
      titulo: "Lanzamiento del nuevo Iphone 15 Pro Max",
      imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009278906", 
      resumen: "La empresa Apple anuncia el lanzamiento de su último smartphone con características innovadoras."
    },
    {
      id: 2,
      titulo: "Avances en inteligencia artificial revolucionan la industria",
      imagen: "https://d3t4nwcgmfrp9x.cloudfront.net/upload/estadisticas-inteligencia-artificial-2023-643x342.jpg", 
      resumen: "Investigadores logran nuevos avances en inteligencia artificial que prometen transformar diversos sectores de la industria."
    }
  ];

  return (
    <div className="tecnologia-container">
      <h2>Noticias de Tecnología</h2>
      <div>
        {noticiasTecnologia.map(noticia => (
          <div key={noticia.id} className="tecnologia-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologia;
