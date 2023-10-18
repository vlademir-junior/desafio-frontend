import React from "react";
import { Link } from "react-router-dom";
import ibgeLogo from "../ibge-logo.png";
import "./styles/Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  const renderNavItems = () => {
    return (
      <>
        <Nav.Link className="link" as={Link} to="/noticias">
          Notícias
        </Nav.Link>
        <Nav.Link className="link" as={Link} to="/releases">
          Releases
        </Nav.Link>
        <Nav.Link className="link" as={Link} to="/favorites">
          Favoritos
        </Nav.Link>
      </>
    );
  };

  return (
    <header>
      <div className="custom-navbar">
        <div className="logo-container">
          <a href="/">
            <img src={ibgeLogo} alt="IBGE Logo" className="logo" />
          </a>
        </div>
        <div className="header">
          <Navbar expand="md">
            <Navbar.Brand as={Link} to="/" className="logo-link">
              <h2 className="text-white">News</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto link">{renderNavItems()}</Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
}

export default Header;
