import React from "react";

function Select() {
  return (
    <select className="form-select" aria-label="Default select example">
      <option defaultValue>Seleccionar lo que más te guste</option>
      <option value="1">Gatos</option>
      <option value="2">Perros</option>
      <option value="3">o nadota</option>
    </select>
  );
}

export default Select;