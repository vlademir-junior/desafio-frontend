import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Card({ data }) {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const isFavorited = localStorage.getItem(`favorited_${data.id}`);
    if (isFavorited) {
      setFavorited(true);
    }
  }, [data.id]);

  const toggleFavorite = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);

    if (newFavorited) {
      localStorage.setItem(`favorited_${data.id}`, JSON.stringify(data));
    } else {
      localStorage.removeItem(`favorited_${data.id}`);
    }
  };

  return (
    <div className={`col-md-4 mb-4`}>
      <div className={`card my-card`}>
        <div className="card-body">
          <h3 className="card-title">{data.titulo}</h3>
          <p className="card-text">{data.introducao}</p>
          <p className="card-text">
            <strong>Data de Publicação:</strong> {data.data_publicacao}
          </p>
          <p className="card-text">
            <strong>Tipo:</strong> {data.tipo}
          </p>
          <p className="card-text">
            <strong>Editorias:</strong> {data.editorias}
          </p>
          {data.destaque && (
            <p className="card-text">
              <strong>Destaque:</strong> Sim
            </p>
          )}
          {data.link && (
            <a
            href={data.link}
            className="btn btn-outline-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja a notícia completa
          </a>          
          )}
          <button
            onClick={toggleFavorite}
            className={`btn btn-link text-danger`}
          >
            {favorited ? (
              <i className="bi bi-heart-fill"></i>
            ) : (
              <i className="bi bi-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
