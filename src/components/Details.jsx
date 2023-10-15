import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import fetchApi from '../service/fetchApi';

function Details() {
  const { tipo, id } = useParams();
  const [data, setData] = useState(null);
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { tipo, id };
        const { data, error } = await fetchApi(params);

        if (error) {
          console.error(error);
        } else {
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [tipo, id]);

  useEffect(() => {
    const isFavorited = localStorage.getItem(`favorited_${id}`);
    if (isFavorited) {
      setFavorited(true);
    }
  }, [id]);

  const toggleFavorite = () => {
    const newFavorited = !favorited;
    setFavorited(newFavorited);

    if (newFavorited) {
      localStorage.setItem(`favorited_${id}`, JSON.stringify(data));
    } else {
      localStorage.removeItem(`favorited_${id}`);
    }
  };

  if (data === null) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={data.imagens} className="card-img-top" alt="Imagem" />
        <div className="card-body">
          <h5 className="card-title">{data.titulo}</h5>
          <p className="card-text">Data de Publicação: {data.data_publicacao}</p>
          <p className="card-text">Tipo: {data.tipo}</p>
          <a href={data.link} className="btn btn-primary">
            Ler mais
          </a>
          <button onClick={toggleFavorite} className="btn btn-link">
            {favorited ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
