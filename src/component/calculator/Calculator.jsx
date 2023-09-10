import React, { useState } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';
import { operations } from '../function/Calculate';
import { LABEL } from '../../const/Constant';

const Calculator = () => {
  const [result, setResult] = useState('Result');
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState('addition');



  const handleSubmit = (e) => {
    e.preventDefault();

    const calculate = operations[operation];

    {!calculate ? setResult('Invalid operation') : setResult(calculate(number1, number2));}}

  const isOneInput=  operation !== 'squareRoot' && operation !== 'logarithm';

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input label={`${LABEL} 1`} value={number1} onChange={setNumber1} />
        { isOneInput && (
          <Input label={`${LABEL} 2`} value={number2} onChange={setNumber2} />
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
