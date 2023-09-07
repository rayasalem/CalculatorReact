import './Input.css'
import React, { useState } from 'react';

function Input({numbers}){
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

 
    const Number1Change = (e) => {
        setNumber1(Number(e.target.value));
      };
    
      const  Number2Change = (e) => {
        setNumber2(Number(e.target.value));
      };
        numbers=({number1,number2});

    return(
        <div className="inputGroup">
        <div className="form-group">
          <label htmlFor="number1">Enter number one</label>
          <input
            type="number"
            id="number1"
            placeholder="Enter number one"
            value={number1}
            onChange={Number1Change}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number2">Enter number two</label>
          <input
            type="number"
            id="number2"
            placeholder="Enter number two"
            value={number2}
            onChange={Number2Change}
          />
        </div>
      </div>
);
}
export default Input;