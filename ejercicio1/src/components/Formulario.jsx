import React, { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    usuario: "",
    correo: "",
    opcion: "",
    activo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulario enviado 🚀");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">

      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input
          type="text"
          className="form-control"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Opciones</label>
        <select
          className="form-select"
          name="opcion"
          value={formData.opcion}
          onChange={handleChange}
        >
          <option value="">Seleccione</option>
          <option value="1">Uno</option>
          <option value="2">Dos</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          name="activo"
          checked={formData.activo}
          onChange={handleChange}
        />
        <label className="form-check-label">
          Acepto términos
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>

    </form>
  );
}

export default Formulario;