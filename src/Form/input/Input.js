import './Input.css';
import React from 'react';

function Input({ setNumber1, setNumber2 ,operation }) {
  const Number1Change = (e) => {
    setNumber1(e.target.value);
  };

  const Number2Change = (e) => {
    setNumber2(e.target.value);
  };
 const isSquareOperation = operation == "square";
  return (
    <div className="inputGroup">
      <div className="form-group">
        <label htmlFor="number1">Enter number one</label>
        <input
          type="number"
          id="number1"
          placeholder="Enter number one"
          onChange={Number1Change}
        />
      </div>
      {! isSquareOperation &&(
      <div className="form-group">
        <label htmlFor="number2">Enter number two</label>
        <input
          type="number"
          id="number2"
          placeholder="Enter number two"
          onChange={Number2Change}
        />
      </div>
)}
    </div>
  );
}

export default Input;
