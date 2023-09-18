import {RESET, CALCULATE, SET_OPERATION, SET_NUMBER2, SET_NUMBER1,INITIAL_STATE } from '../../const/Constant';

export   const operations = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
    exponentiation: (a, b) => a**b,
    modulo: (a, b) => a % b,
    squareRoot: (a) => (a >= 0 ? Math.sqrt(a) : 'Cannot calculate square root of a negative number'),
    logarithm: (a) => (a > 0 ? Math.log2(a) : 'Cannot calculate logarithm of a non-positive number'),
  };


  export const  calculatorReducer=(state, action) => {
    switch (action.type) {
      case SET_NUMBER1:
        return { ...state, number1: action.payload };
      case SET_NUMBER2:
        return { ...state, number2: action.payload };
      case SET_OPERATION:
        return { ...state, operation: action.payload };
      case CALCULATE:
        const calculate = operations[state.operation];
        const result = calculate(state.number1, state.number2);
        return { ...state, result };
      case RESET:
        return { ...INITIAL_STATE};
      default:
        return state;
    }
  }

 