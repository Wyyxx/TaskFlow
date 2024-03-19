import React from 'react';
import Header from './Components/header'; 
import Navbar from './Components/navbar';
import './styles/styles.css'; 

const App = () => {
  return (
    <div>
      <Header /> {/* Utiliza el componente de encabezado */}
      <Navbar /> {/* Utiliza el componente Navbar */}
      {/* Aquí va el resto de tu aplicación */}
    </div>
  );
};

export default App;
