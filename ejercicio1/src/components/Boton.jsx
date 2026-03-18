import React from "react";

function Boton ({texto, clic}) {
    return (
        <button className="btn btn-primary" onClick={clic}>
            {texto}
        </button>
    );
}

export default Boton;