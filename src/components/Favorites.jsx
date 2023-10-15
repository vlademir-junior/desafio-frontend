import React, { useEffect, useState } from "react";
import Card from "./Card";

function Favorites() {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const favoriteKeys = keys.filter((key) => key.startsWith("favorited_"));
    const favoriteItems = favoriteKeys.map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });

    setFavoriteItems(favoriteItems);
  }, []);

  if (favoriteItems.length === 0) {
    return (
      <div className="container">
        <h2>Favoritos:</h2>
        <p>Nenhum item favorito encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Favoritos:</h2>
      <div className="row">
        {favoriteItems.map((item) => (
          <Card key={item.id} data={item} type="favorito" />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
