import React from 'react';
import './Input.css';

const Input = ({ label, value, onChange }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="inputGroup">
      <div className="form-group">
       { label!=null&& <label htmlFor={label}>Enter {label}</label>}
        <input
          type="number"
          id={label}
          value={value}
          onChange={handleChange}
        />
      </div>
 
    </div>
  );
};

export default Input;
