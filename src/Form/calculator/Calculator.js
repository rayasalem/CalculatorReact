import React, { useState } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';

function Calculator() {
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
      default:
        calculatedResult = 0; 
    }

    setResult(calculatedResult);
  };
  const Submit = (e) => {
    e.preventDefault();
    formCalculation();
  };

  return (
    <>
    <Header/>
    <form onSubmit={Submit}>
      <Input setNumber1={setNumber1} setNumber2={setNumber2} operation={operation} />
      <Operation setOperation={setOperation} />
      <button type="submit">Calculate</button>
      <div className="output">Result is: {result}</div>
    </form>
    </>
  );
}

export default Calculator;
