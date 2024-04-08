import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = '166f60a3e8444ccab9e8aee58228a841'; // Reemplaza 'TU_CLAVE_API' con tu propia clave de API
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1>Últimas noticias</h1>
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <a href={article.url} className="news-link" target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsComponent;
