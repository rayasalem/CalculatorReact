import React from 'react';
import './Input.css';

const Input = ({ setNumber1, setNumber2, operation }) => {
  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const isSquareOperation = operation === 'square' || operation === 'log';

  return (
    <div className="inputGroup">
      <div className="form-group">
        <label htmlFor="number1">Enter number one</label>
        <input
          type="number"
          step=".01"
          id="number1"
          placeholder="Enter number one"
          onChange={handleNumber1Change}
        />
      </div>
      {!isSquareOperation && (
        <div className="form-group">
          <label htmlFor="number2">Enter number two</label>
          <input
            type="number"
            step=".01"
            id="number2"
            placeholder="Enter number two"
            onChange={handleNumber2Change}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
