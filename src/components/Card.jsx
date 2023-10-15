import React from "react";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  return (
    <div className={`col-md-4 mb-4`}>
      <div className={`card`}>
        <div className="card-body">
          <h3 className="card-title">{data.titulo}</h3>
          <p className="card-text">{data.introducao}</p>
          <Link to={`/${type === 'release' ? 'releases' : 'noticias'}/${data.id}`} className="btn btn-primary">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
