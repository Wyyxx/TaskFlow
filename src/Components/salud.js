import React from 'react';
import '../styles/styles.css';

const Salud = () => {
 
  const noticiasSalud = [
    {
      id: 1,
      titulo: "Nuevo estudio revela los beneficios del ejercicio regular para la salud mental",
      imagen: "https://www.fem.es/wp-content/uploads/2022/09/consejos_ejercicio_fisico.jpg", 
      resumen: "Investigadores encuentran una fuerte correlación entre el ejercicio regular y la mejora de la salud mental."
    },
    {
      id: 2,
      titulo: "Alimentos que promueven la salud cardiovascular",
      imagen: "https://mejorconsalud.as.com/wp-content/uploads/2016/12/6-h%C3%A1bitos-saludables-para-cuidar-la-salud-cardiovascular.jpg",
      resumen: "Nutricionistas recomiendan una dieta rica en frutas, verduras y grasas saludables para mantener un corazón sano."
    }
  ];

  return (
    <div className="salud-container">
      <h2>Noticias de Salud</h2>
      <div>
        {noticiasSalud.map(noticia => (
          <div key={noticia.id} className="salud-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.resumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Salud;
