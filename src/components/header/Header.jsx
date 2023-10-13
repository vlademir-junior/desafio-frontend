import React from 'react';
import { Link } from 'react-router-dom';
import ibgeLogo from '../../ibge-logo.png';
import './Header.css';

function Header() {
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
            <Link to="/noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/releases">Releases</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
