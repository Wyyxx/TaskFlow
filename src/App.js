import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Navbar from './Components/navbar';
import Carousel from './Components/carousel';
import ContactPage from './Components/contacto'; 
import NewsComponent from './Components/noticias';
import Home from './Components/home';
import Salud from './Components/salud';
import Tecnologia from './Components/tecnologia';
import Deportes from './Components/deportes';
import Entretenimiento from './Components/entretenimiento';
import Footer from './Components/footer';
import './styles/styles.css';
const App = () => {
  
  const images = [
    'imagen1.avif',
    'imagen2.png',
    'imagen3.jpg',
  ];

  return (
    <Router>
      <div>
        <Header /> {/* Utiliza el componente de encabezado */}
        <Navbar /> {/* Utiliza el componente Navbar */}
        <Routes>
          <Route path="/" element={<div><Carousel images={images} /><Home /></div>} /> {/* Agrupa Carousel y Home */}
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/noticias" element={<NewsComponent />} />
          <Route path="/salud" element={<Salud />} /> 
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/deportes" element={<Deportes />} /> 
          <Route path="/entretenimiento" element={<Entretenimiento />} />
        </Routes>
        <Footer /> {/* Utiliza el componente Footer */}
      </div>
    </Router>
  );
};;

export default App;
