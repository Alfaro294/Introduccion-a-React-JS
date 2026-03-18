import React from "react";

function Cards({ titulo, texto, imagen }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="imagen" />

      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>

        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
}

export default Cards;