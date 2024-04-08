import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Searchbar"; 

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${searchQuery}&language=es&apiKey=36494067a5d144d3aa11d4ef2c5b71f7`
            );

            setSearchResults(response.data.articles);
        } catch (error) {
            console.error("Error al realizar la búsqueda:", error);
        }
    };

    const saveForLater = (article) => {
        const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
        savedArticles.push(article);
        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    };

    return (
        <div className="search-page">
            <h1 className="H11">Busqueda de noticias</h1>
            <div className="rectangulo"></div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            <p className="small-text">Emplea términos clave para localizar la noticia que desees obtener información.</p>
            <div className="search-results">
                {searchResults.map((article, index) => (
                    <div className="card" key={index}>
                        <img src={article.urlToImage} alt={article.title} />
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Leer más
                        </a>
                        <button onClick={() => saveForLater(article)} className="custom-button">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="30"
                                        height="30"
                                        className="icon"
                                    >
                                        <path
                                            d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Save</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;