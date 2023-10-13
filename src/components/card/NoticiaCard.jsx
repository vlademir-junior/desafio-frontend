import React from "react";
import { Link } from "react-router-dom";
import "./NoticiaCard.css";

function NoticiaCard({ noticia }) {
  return (
    <div className="noticia-container">
      <div className="noticia-card">
        <h3>{noticia.titulo}</h3>
        <p>{noticia.introducao}</p>
        <Link to={`/noticias/${noticia.id}`} className="ler-mais-link">
          Ler mais
        </Link>
      </div>
    </div>
  );
}

export default NoticiaCard;
