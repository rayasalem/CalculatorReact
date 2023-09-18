import React from 'react';
import './Button.css';
const Button = ({ type, onClick, label }) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
