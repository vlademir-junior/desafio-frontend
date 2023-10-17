import React, { useState, useEffect } from 'react';
import fetchApi from '../service/fetchApi';
import Card from './Card';
import '../App.css';
import Pagination from './Pagination';

export default function Home() {
  const [recentNoticias, setRecentNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRecentNoticias = async (page) => {
    try {
      const params = { tipo: 'noticia', qtd: 18, page };
      const { data, error } = await fetchApi(params);

      if (error) {
        console.error(error);
      } else {
        setRecentNoticias(data.items);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecentNoticias(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      <div className="container">
        <div className="home-content">
          <h1 className="display-4">Bem-vindo ao Hub de notícias do IBGE</h1>
          <br />
          <p className="lead">Fique por dentro de todas as novidades.</p>
        </div>
        <div className="recent-noticias">
          <h2 className="mt-5">Últimas notícias:</h2>
          <ul className="row">
            {recentNoticias.map((noticia) => (
              <Card key={noticia.id} data={noticia} type="noticia" />
            ))}
          </ul>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </main>
  );
}
