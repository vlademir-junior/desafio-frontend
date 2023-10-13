import React, { useState, useEffect } from 'react';
import fetchApi from '../../service/fetchApi';
import NoticiaCard from '../card/NoticiaCard';

export default function FavoritosList() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fetchFavoritosData = async () => {
      try {
        const data = await fetchApi({ tipo: 'favoritos', qtd: 9 }); // Adjust API call as needed
        setFavoritos(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoritosData();
  }, []);

  return (
    <div>
      <div className="favoritos-container">
        {favoritos.map((favorito) => (
          <NoticiaCard key={favorito.id} noticia={favorito} />
        ))}
      </div>
    </div>
  );
}
