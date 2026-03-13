import React from "react";
import "./Card.css";

const Cards = ({titulo, texto}) => {
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text">
          {texto}
        </p>
      </div>
    </div>
  );
};
