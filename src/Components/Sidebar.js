import React, { useState } from 'react';
import './Sidebar.css'; // You can create your own CSS file for styling

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="toggle-btn" onClick={toggleMinimize}>
        ///
      </div>
      {!isMinimized && (
        <div className="content">
          <h2>TaskFlow</h2>
          <ul>
            <li>
              <a href="/Indice">Indice</a>
            </li>
            <li>
              <a href="/Todo">To-Do</a>
            </li>
            <li>
              <a href="/Clima">Clima</a>
            </li>
          </ul>
        </div>
      )}
      {isMinimized && (
        <div className="content-minimized">
          <ul>
            <li>
              <a href="/Indice">Indice</a>
            </li>
            <li>
              <a href="/Todo">To-Do</a>
            </li>
            <li>
              <a href="/Clima">Clima</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
