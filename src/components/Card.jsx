import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Card({ data, type }) {
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
      <div className={`card`}>
        <div className="card-body">
          <h3 className="card-title">{data.titulo}</h3>
          <p className="card-text">{data.introducao}</p>
          <Link to={`/${type === 'release' ? 'releases' : 'noticias'}/${data.id}`} className="btn btn-primary">
            Ler mais
          </Link>
          <button onClick={toggleFavorite} className={`btn btn-link`}>
            {favorited ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
