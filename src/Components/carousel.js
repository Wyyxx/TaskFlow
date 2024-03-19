import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Anterior</button>
      <img 
        src={require(`../img/${images[currentIndex]}`)} 
        alt={`Slide ${currentIndex + 1}`} 
        style={{ width: '100%', height: 'auto' }} // Set fixed dimensions
      />
      <button onClick={nextSlide}>Siguiente</button>
    </div>
  );
};

export default Carousel;
