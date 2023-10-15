import React, { useState, useEffect } from 'react';
import fetchApi from '../service/fetchApi';
import Card from './Card';

export default function Home() {
  const [recentNoticias, setRecentNoticias] = useState([]);

  useEffect(() => {
    const fetchRecentNoticias = async () => {
      try {
        const params = { tipo: 'noticia', qtd: 18 };
        const { data, error } = await fetchApi(params);

        if (error) {
          console.error(error);
        } else {
          setRecentNoticias(data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentNoticias();
  }, []);

  return (
    <div className="container">
      <div className="home-content">
        <h1 className="display-4">Welcome to IBGE News Dashboard</h1>
        <p className="lead">Stay updated with the latest news and releases from the Brazilian Institute of Geography and Statistics (IBGE).</p>
      </div>
      <div className="recent-noticias">
        <h2 className="mt-5">Most Recent News</h2>
        <ul className="row">
          {recentNoticias.map((noticia) => (
            <Card key={noticia.id} data={noticia} type="noticia" />
          ))}
        </ul>
      </div>
    </div>
  );
}
