import React from "react";

function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
}

export default FormInput;
