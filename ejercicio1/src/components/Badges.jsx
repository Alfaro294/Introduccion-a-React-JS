import React from "react";

function Badge({ texto, color }) {
  return (
    <span className={`badge bg-${color} me-2`}>
      {texto}
    </span>
  );
}

export default Badge;