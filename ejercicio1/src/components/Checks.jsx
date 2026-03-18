import React from "react";
function Checkbox({ label, checked = false, onChange }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={onChange}
        defaultChecked={checked}
      />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;