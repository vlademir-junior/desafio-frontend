import React, { useState, useEffect } from 'react';
import Card from './Card';
import fetchApi from '../service/fetchApi';
import '../App.css'

export default function List({ type }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { tipo: type, qtd: 9 };
        const { data, error } = await fetchApi(params);

        if (error) {
          console.error(error);
        } else {
          setItems(data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <main>
      <div className={`container ${type}s-container`}>
        <h1>{type === 'release' ? 'Releases' : 'Notícias'}:</h1>
        <div className="row">
          {items.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      </div>
    </main>
  );
}
