import React, { useState, useEffect } from 'react';
import Card from './Card';
import fetchApi from '../service/fetchApi';
import '../App.css';
import Pagination from './Pagination';

export default function List({ type }) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const params = { tipo: type, qtd: 9, page };
        const { data, error } = await fetchApi(params);

        if (error) {
          console.error(error);
        } else {
          setItems(data.items);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(currentPage);
  }, [type, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      <div className={`container ${type}s-container`} data-testid="list">
        <br/>
        <h1>{type === 'release' ? 'Releases' : 'Notícias'}:</h1>
        <br/>
        <div className="row">
          {items.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
        <div className="pagination-container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
}
