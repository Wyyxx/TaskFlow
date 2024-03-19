import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBolt,
  faSearch,
  faBookmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? "minimized" : ""}`}>
      <div className="toggle-btn" onClick={toggleMinimize}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {!isMinimized && (
        <div className="content">
          <h2>The DailyBugle</h2>
          <ul>
            <li>
              <a href="/Indice">
                <FontAwesomeIcon icon={faHome} /> Indice
              </a>
            </li>
            <li>
              <a href="/MasRecientes">
                <FontAwesomeIcon icon={faBolt} /> Mas Recientes
              </a>
            </li>
            <li>
              <a href="/Busqueda">
                <FontAwesomeIcon icon={faSearch} /> Busqueda
              </a>
            </li>
            <li>
              <a href="/MasTarde">
                <FontAwesomeIcon icon={faBookmark} /> Leer Mas Tarde
              </a>
            </li>
          </ul>
        </div>
      )}
      {isMinimized && (
        <div className="content-minimized">
          <ul>
            <li>
              <a href="/Indice">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li>
              <a href="/MasRecientes">
                <FontAwesomeIcon icon={faBolt} />
              </a>
            </li>
            <li>
              <a href="/Busqueda">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li>
              <a href="/MasTarde">
                <FontAwesomeIcon icon={faBookmark} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
