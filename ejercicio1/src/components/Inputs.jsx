import React from "react";

function Input() {
  return (
    <div className="input-group">
      <span className="input-group-text" id="visible-addon">
        @
      </span>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="visible-addon"
      />

      <input
        type="text"
        className="form-control d-none"
        placeholder="Hidden input"
        aria-label="Hidden input"
        aria-describedby="visible-addon"
      />
    </div>
  );
}

export default Input;