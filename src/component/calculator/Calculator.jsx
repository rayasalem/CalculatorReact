import React, { useReducer,useRef } from 'react';
import Input from '../input/Input';
import Operation from '../operation/Operation';
import './Calculator.css';
import Header from '../header/Header';
import {calculatorReducer } from './CalculationFunction';
import { LABEL, RESET, CALCULATE,INITIAL_STATE } from '../../const/Constant';


const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CALCULATE });
  };

  const handleReset = () => {
    dispatch({ type: RESET });
  };

  const isOneInput =
    state.operation !== 'squareRoot' && state.operation !== 'logarithm';

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Input
          label={`${LABEL} 1`}
          value={state.number1}
          dispatch={dispatch}
          inputType='number1'
        />
        {isOneInput && (
          <Input
            label={`${LABEL} 2`}
            value={state.number2}
            dispatch={dispatch}
            inputType='number2'
          />
        )}
        <Operation dispatch={dispatch}/>
        <button type='submit'>Calculate</button>
        <button type='button' onClick={handleReset}>Reset</button>
        <div className='output'>
          <Input value={state.result} readOnly />
        </div>
      </form>
    </>
  );
};

export default Calculator;
