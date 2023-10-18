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
      <main>
        <div className="container">
          <br/>
          <h2>Favoritos:</h2>
          <br/>
          <br/>
          <p>Nenhum item favorito encontrado.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <h2>Favoritos:</h2>
      <div className="">
        {favoriteItems.map((item) => (
          <Card key={item.id} data={item} type="favorito" />
        ))}
      </div>
    </main>
  );
}

export default Favorites;
