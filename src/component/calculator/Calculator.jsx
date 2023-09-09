import React, { useState } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';

const Calculator = () => {
  const [result, setResult] = useState('Result');
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [errorMessage, setErrorMessage] = useState(null); 

  const formCalculation = () => {
    let calculatedResult = 0;

      switch (operation) {
        case 'addition':
          calculatedResult = parseFloat(number1) + parseFloat(number2);
          break;
        case 'subtraction':
          calculatedResult = parseFloat(number1) - parseFloat(number2);
          break;
        case 'multiplication':
          calculatedResult = parseFloat(number1) * parseFloat(number2);
          break;
        case 'division':
          if (parseFloat(number2) !== 0) {
            calculatedResult = parseFloat(number1) / parseFloat(number2);
          } else {
            alert( 'Cannot divide by zero');
          }
          break;
        case 'exponentiation':
          calculatedResult = Math.pow(parseFloat(number1), parseFloat(number2));
          break;
        case 'modulo':
          calculatedResult = parseFloat(number1) % parseFloat(number2);
          break;
        case 'square root':
          if (parseFloat(number1) >= 0) {
            calculatedResult = Math.sqrt(parseFloat(number1));
          } else {
            alert('Cannot calculate square root of a negative number');
          }
          break;
        case 'logarithm':
          if (parseFloat(number1) > 0) {
            calculatedResult = Math.log2(parseFloat(number1));
          } else {
            alert('Cannot calculate logarithm of a non-positive number');
          }
          break;
    
      
    }
    setResult(calculatedResult);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    formCalculation();
  };
  const label="Number";

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
      <Input label={`${label} 1`} value={number1} onChange={setNumber1}  />
      { operation !== 'square root' && operation !== 'logarithm'&&
      <Input label={ `${label} 2`} value={number2} onChange={setNumber2} operation={operation} /> }      
       <Operation setOperation={setOperation} />
        <button type="submit">Calculate</button>
        <div className="output">
        <input type="text" value={result} readOnly />
        </div>
      </form>
    </>
  );
  };
export default Calculator;
