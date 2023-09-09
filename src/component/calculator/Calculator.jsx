import React, { useState } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';

const Calculator = () => {
  const [result, setResult] = useState('Result');
  const [number1, setNumber1] = useState(0); 
  const [number2, setNumber2] = useState(0); 
  const [operation, setOperation] = useState('addition');

  const formCalculation = () => {

    let calculatedResult = 'Invalid input(s)';
   

    switch (operation) {
      case 'addition':
        calculatedResult = number1 + number2;
        break;
      case 'subtraction':
        calculatedResult = number1 - number2;
        break;
      case 'multiplication':
        calculatedResult = number1 * number2;
        break;
      case 'division':
        if (number2 !== 0) {
          calculatedResult = number1 / number2;
        } else {
          calculatedResult = 'Cannot divide by zero';
        }
        break;
      case 'exponentiation':
        calculatedResult = Math.pow(number1, number2);
        break;
      case 'modulo':
        calculatedResult = number1 % number2;
        break;
      case 'square root':
        if (number1 >= 0) {
          calculatedResult = Math.sqrt(number1);
        } else {
          calculatedResult = 'Cannot calculate square root of a negative number';
        }
        break;
      case 'logarithm':
        if (number1 > 0) {
          calculatedResult = Math.log2(number1);
        } else {
          calculatedResult = 'Cannot calculate logarithm of a non-positive number';
        }
        break;
 
    }

    setResult(calculatedResult);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formCalculation();
  };
  const label = 'Number';

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input label={`${label} 1`} value={number1} onChange={setNumber1} />
        {operation !== 'square root' && operation !== 'logarithm' && (
          <Input label={`${label} 2`} value={number2} onChange={setNumber2} operation={operation} />
        )}
        <Operation onChange={setOperation} />
        <button type="submit">Calculate</button>
        <div className="output">
          <input type="text" value={result} readOnly />
        </div>
      </form>
    </>
  );
};

export default Calculator;
