export const OPTION = [
  { name: 'addition', symbol: '+' },
  { name: 'subtraction', symbol: '-' },
  { name: 'multiplication', symbol: '*' },
  { name: 'division', symbol: '/' },
  { name: 'exponentiation', symbol: '^' },
  { name: 'modulo', symbol: '%' },
  { name: 'squareRoot', symbol: 'square' },
  { name: 'logarithm', symbol: 'log2' }
];
export   const LABEL = 'Number';
export const SET_NUMBER1 = 'SET_NUMBER1';
 export const SET_NUMBER2 = 'SET_NUMBER2';
export const SET_OPERATION = 'SET_OPERATION';
 export const CALCULATE = 'CALCULATE';
 export const RESET = 'RESET';

 export  const INITIAL_STATE = {
  result: 0,
  number1: 0,
  number2: 0,
  operation: 'addition',
};