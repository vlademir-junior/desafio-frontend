import React, { useState, useEffect } from 'react';
import fetchApi from '../../service/fetchApi';
import NoticiaCard from '../card/NoticiaCard';

export default function NoticiasList() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticiasData = async () => {
      try {
        const data = await fetchApi({ tipo: 'noticia', qtd: 9 });
        setNoticias(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNoticiasData();
  }, []);

  return (
    <div>
      <div className="noticias-container">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
}
