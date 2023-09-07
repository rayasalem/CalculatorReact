import React from 'react';
import "./Operation.css";

const Operation = ({ setOperation }) => {
  const OperationChange = (e) => {
    setOperation(e.target.value);
  };

  const oper = [
    { name: 'add', symbol: '+' },
    { name: 'subtract', symbol: '-' },
    { name: 'multiply', symbol: '*' },
    { name: 'divide', symbol: '/' },
    { name: 'power', symbol: '^' },
    { name: 'modulo', symbol: '%' },
    { name: 'square', symbol: 'square' },
    { name: 'log', symbol: 'log2' }
  ];

  return (
    <div className='selectOperation'>
      <br />
      <label htmlFor='selectOption'>Select operation</label>
      <select id='selectOption' onChange={OperationChange}>
        {oper.map((item, index) => (
          <option  value={item.name}>
            {item.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Operation;
