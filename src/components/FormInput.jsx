import React, { useState } from "react";

function FormInput({ label, name, type, defaultValue, size }) {
  const [value, setValue] = useState(defaultValue || "");
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`input input-bordered  ${size}`}
      />
    </div>
  );
}

export default FormInput;
