import React from "react";
import './styles/CarouselCard.css';

export default function CarouselCard({ data }) {
  const image = JSON.parse(data.imagens);
  const linkSplit = data.link.split('/');
  const finalLink = linkSplit.slice(0, 3).join('/');

  return (
    <div>
      <div className={`carousel-card`} data-testid="carousel">
        <div>
          <h3 className="card-title">{data.titulo}</h3>
          <br/>
          <a href={data.link}>
           <img src={ `${finalLink}/${image.image_intro}` } alt="imagem ibge" />
          </a>
          <br/>
        </div>
      </div>
    </div>
  );
}
