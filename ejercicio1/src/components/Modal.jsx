import React from "react";

function Modal({ mostrar, cerrar }) {
  if (!mostrar) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Holiss</h5>
            <button className="btn-close" onClick={cerrar}></button>
          </div>

          <div className="modal-body">
            <p>Te gusta maluma?</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={cerrar}>
              Cerrar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;