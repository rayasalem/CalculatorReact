 export const operations = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
    exponentiation: (a, b) => Math.pow(a, b),
    modulo: (a, b) => a % b,
    squareRoot: (a) => (a >= 0 ? Math.sqrt(a) : 'Cannot calculate square root of a negative number'),
    logarithm: (a) => (a > 0 ? Math.log2(a) : 'Cannot calculate logarithm of a non-positive number'),
  };