import React from "react";

function Alerta({ tipo = "success", titulo, mensaje }) {
  return (
    <div className={`alert alert-${tipo}`} role="alert">
      <h4 className="alert-heading">{titulo}</h4>

      <p>{mensaje}</p>

      <hr />

      <p className="mb-0">Este es un mensaje adicional</p>
    </div>
  );
}

export default Alerta;