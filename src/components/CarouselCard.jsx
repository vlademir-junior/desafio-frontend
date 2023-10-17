import React from "react";
import '../App.css';

export default function Card({ data }) {

  return (
    <div>
      <div className={`carousel-card`}>
        <div>
          <h3 className="card-title">{data.titulo}</h3>
          <br/>
          <br/>
          <p className="card-text">
            <strong>Tags:</strong> {data.editorias}
          </p>
        </div>
      </div>
    </div>
  );
}
