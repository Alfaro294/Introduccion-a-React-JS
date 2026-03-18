import React from "react";

function ProgressBar({ porcentaje, color }) {
  return (
    <div className="progress">
      <div
        className={`progress-bar bg-${color}`}
        role="progressbar"
        style={{ width: `${porcentaje}%` }}
      >
        {porcentaje}%
      </div>
    </div>
  );
}

export default ProgressBar;