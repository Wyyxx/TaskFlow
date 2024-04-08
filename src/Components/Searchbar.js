import React from "react";
import "./SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
    
 

    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type="submit"
                onClick={(e) => handleSearch(searchQuery)}
            >
                Go
            </button>
        </div>
    );
}

export default SearchBar;
