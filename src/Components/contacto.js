import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#023047', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Contacto</h1>
        <p>¡Hola! ¿Cómo podemos ayudarte?</p>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" />
          <br/>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
