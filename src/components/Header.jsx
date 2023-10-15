import React from 'react';
import { Link } from 'react-router-dom';
import ibgeLogo from '../ibge-logo.png';
import fetchAPI from '../service/fetchApi';
import './styles/Header.css';

function Header() {
  const handleNavbarClick = (event) => {
    const target = event.target;
    switch (target.innerText) {
      case 'Releases':
        fetchAPI('?tipo=release');
        break;
      case 'Notícias':
        fetchAPI('?tipo=noticia');
        break;
      default:
        break;
    }
  };

  return (
    <header className="app-header">
      <Link to="/" className="logo-link">
        <img
          src={ibgeLogo}
          alt="IBGE Logo"
          className="logo"
        />
        <h2>IBGE News Dashboard</h2>
      </Link>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/noticias" onClick={handleNavbarClick}>Notícias</Link>
          </li>
          <li>
            <Link to="/releases" onClick={handleNavbarClick}>Releases</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
