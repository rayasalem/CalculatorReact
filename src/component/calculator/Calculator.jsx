import React, { useState } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('add');

  const formCalculation = () => {
    let calculatedResult = 0;

    switch (operation) {
      case 'add':
        calculatedResult = number1 + number2;
        break;
      case 'subtract':
        calculatedResult = number1 - number2;
        break;
      case 'multiply':
        calculatedResult = number1 * number2;
        break;
      case 'divide':
        calculatedResult = number1 / number2;
        break;
      case 'power':
        calculatedResult = Math.pow(number1, number2);
        break;
      case 'modulo':
        calculatedResult = number1 % number2;
        break;
      case 'square':
        calculatedResult = Math.sqrt(number1);
        break;
      case 'log':
        calculatedResult = Math.log2(number1);
        break;
      default:
        break;
    }

    setResult(calculatedResult);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formCalculation();
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input setNumber1={setNumber1} setNumber2={setNumber2} operation={operation} />
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
