import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchApi from '../service/fetchApi';

export default function Details() {
  const { tipo, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { tipo, id };
        const { data, error } = await fetchApi(params);

        if (error) {
          console.error(error);
        } else {
          setDetails(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [tipo, id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.titulo}</h1>
      <p>Data de Publicação: {details.data_publicacao}</p>
      <p>Editorias: {details.editorias.join(', ')}</p>
      <img src={details.imagem} alt={details.titulo} />
      <p>{details.introducao}</p>
      <Link to={details.link_completo} className="btn btn-primary">
        Ler a Reportagem Completa
      </Link>
    </div>
  );
}
