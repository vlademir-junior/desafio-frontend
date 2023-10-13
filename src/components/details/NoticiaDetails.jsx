import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../service/fetchApi';

export default function NoticiaDetail() {
  const { id } = useParams(); // Access the route parameter (article ID)
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const data = await fetchApi({ tipo: 'noticia', id }); // Fetch the specific article
        setArticle(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticleData();
  }, [id]);

  return (
    <div>
      {article ? (
        <div className="noticia-detail">
          <h2>{article.titulo}</h2>
          <p>{article.conteudo}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
