import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const calculateDaysAgo = (publicationDate) => {
  const parts = publicationDate.split(' ');
  const datePart = parts[0];
  const [day, month, year] = datePart.split('/');

  const currentDate = new Date();
  const newsDate = new Date(Number(year), Number(month) - 1, Number(day));

  const timeDifference = Math.abs(currentDate - newsDate);
  const daysAgo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysAgo;
};


export default function Card({ data }) {
  const [favorited, setFavorited] = useState(false);
  const [daysAgo, setDaysAgo] = useState(null);

  useEffect(() => {
    const isFavorited = localStorage.getItem(`favorited_${data.id}`);
    if (isFavorited) {
      setFavorited(true);
    }

    const daysDifference = calculateDaysAgo(data.data_publicacao);
    setDaysAgo(daysDifference);
  }, [data.id, data.data_publicacao]);

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
          <br />
          <p className="card-text">
            <strong>Data de Publicação:</strong> {data.data_publicacao}
          </p>
          <p className="card-text">
            Publicada há <strong>{daysAgo}</strong> {daysAgo === 1 ? 'dia' : 'dias'}
          </p>
          <br />
          <strong>Resumo:</strong>
          <p className="card-text">{data.introducao}</p>
          <br />
          <p className="card-text">
            <strong>
              {data.editorias.split(";").length > 1 ? "Tags:" : "Tag:"}
            </strong>{" "}
            {data.editorias}
          </p>
          <br />
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
