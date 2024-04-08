import React, { useEffect, useState } from "react";
import "./ReadLaterPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';



function ReadLaterPage() {
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
        setSavedArticles(savedArticles);
    }, []);

    const removeFromSaved = (index) => {
        const updatedArticles = [...savedArticles];
        updatedArticles.splice(index, 1);
        setSavedArticles(updatedArticles);
        localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    };

    return (
        <div>
            <div className="container">
                <h1 className="Art">Artículos Guardados</h1>
            </div>
            {savedArticles.map((article, index) => (
                <div className="card2" key={index}>
                    <h2 className="H22">{article.title}</h2>
                    <img className="img"src={article.urlToImage} alt={article.title} />
                    <p>{article.description}</p>
                    <a className="custom-button" href={article.url} target="_blank" rel="noopener noreferrer">
                        <span>Leer más</span>
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                    </a>
                    <button className="buttons"onClick={() => removeFromSaved(index)}>
                       Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ReadLaterPage;
