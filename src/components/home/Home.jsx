import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // You can create a CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to IBGE News Dashboard</h1>
        <p>Stay updated with the latest news and releases from the Brazilian Institute of Geography and Statistics (IBGE).</p>
        <Link to="/noticias" className="explore-link">Explore Notícias</Link>
        <Link to="/releases" className="explore-link">Explore Releases</Link>
        <Link to="/favoritos" className="explore-link">Explore Favoritos</Link>
      </div>
    </div>
  );
}
