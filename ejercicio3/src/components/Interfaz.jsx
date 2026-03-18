import React from "react";

function Contador() {
  return (
    <div className="container mt-5 d-flex justify-content-center">


    <h3 className="text-center mb-4">Calculadora</h3>

    <div className="mb-3">
      <input
        type="number"
        className="form-control form-control-lg"
        placeholder="Número 1"
      />
    </div>

    <div className="mb-3">
      <input
        type="number"
        className="form-control form-control-lg"
        placeholder="Número 2"
      />
    </div>

    <button className="btn btn-primary btn-lg mb-3">
      Calcular
    </button>

    <div className="alert alert-secondary text-center">
      Resultado: ---
    </div>

  </div>

  );
}

export default Contador;