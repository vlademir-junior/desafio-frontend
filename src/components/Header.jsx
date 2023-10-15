import React from 'react';
import { Link } from 'react-router-dom';
import ibgeLogo from '../ibge-logo.png';
import './styles/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const ibgeWebsiteUrl = 'https://www.ibge.gov.br';

  return (
    <Navbar className="custom-navbar" expand="sm">
      <a href={ibgeWebsiteUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={ibgeLogo}
          alt="IBGE Logo"
          className="logo"
        />
      </a>
      <Navbar.Brand as={Link} to="/" className="logo-link">
        <h2>News</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="link-nav" as={Link} to="/noticias">Notícias</Nav.Link>
          <Nav.Link className="link-nav" as={Link} to="/releases">Releases</Nav.Link>
          <Nav.Link className="link-nav" as={Link} to="/favorites">Favoritos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
