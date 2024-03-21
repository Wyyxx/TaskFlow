import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
    return (
        <div className="searchBox">
            <input className="searchInput" type="text" placeholder="Buscar..." />
            <button className="searchButton" type="button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}


export default Searchbar;


