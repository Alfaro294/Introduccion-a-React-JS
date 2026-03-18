import React from "react";
function Switch({ label, checked = false, onChange }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Switch;