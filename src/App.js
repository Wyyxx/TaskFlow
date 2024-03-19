import React from 'react';
import Header from './Components/header'; 
import Navbar from './Components/navbar';
import Carousel from './Components/carousel';
import './styles/styles.css'; 

const App = () => {
  
  const images = [
    'imagen1.avif',
    'imagen2.png',
    'imagen3.jpg',
    
  ];

  return (
    <div>
      <Header /> {/* Utiliza el componente de encabezado */}
      <Navbar /> {/* Utiliza el componente Navbar */}
  
      <Carousel images={images} /> {}
    </div>
  );
};
export default App;
