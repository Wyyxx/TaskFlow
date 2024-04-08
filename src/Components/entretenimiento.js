import React from 'react';
import '../styles/styles.css';
const Entretenimiento = () => {
  const noticiasEntretenimiento = [
    {
      id: 1,
      titulo: "En 'Godzilla x Kong: The New Empire' los titanes son las estrellas",
      imagen: "https://www.sdpnoticias.com/resizer/JSu7O-tsWyurc-ikbHx81V4hSwI=/1200x675/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/YMTH7VTJZ5FMXFQIEY24IZEJV4.jpeg", 
      resumen: "No había duda de quiénes eran las estrellas en “Godzilla x Kong: The New Empire” (“Godzilla y Kong: El nuevo imperio”)."
    },
    {
      id: 2,
      titulo: "Blink-182 cancela su presentación de HOY en CDMX",
      imagen: "https://lh3.googleusercontent.com/P1xw4CuyE9zhuNwtmPSI_TCECDTp59MQDOhrKe0KfJy7XyCfqikxwTkOT4b2Wy8v4O4iEgeL250yCI8=w2880-h1200-p-l90-rj",
      resumen: "Después de ofrecer un gran concierto en el Palacio de los deportes de la CDMX, este martes 2 de marzo, Blink- 182 anunció la cancelación del segundo de cuatro conciertos que tenían programados en la capital mexicana."
    }
  ];

  return (
    <div className="entretenimiento-container">
      <h2>Noticias de Entretenimiento</h2>
      <div>
        {noticiasEntretenimiento.map(noticia => (
          <div key={noticia.id} className="entretenimiento-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entretenimiento;
