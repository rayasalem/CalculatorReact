import React from 'react';
import "./Operation.css";

const Operation = ({ setOperation }) => {
  const OperationChange = (e) => {
    setOperation(e.target.value);
  };

  const oper = [
    { name: 'add', op: '+' },
    { name: 'subtract', op: '-' },
    { name: 'multiply', op: '*' },
    { name: 'divide', op: '/' },
    { name: 'power', op: '^' },
    { name: 'modulo', op: '%' },
    { name: 'square', op: 'square' },
    { name: 'log', op: 'log2' }
  ];

  return (
    <div className='selectOperation'>
      <br />
      <label htmlFor='selectOption'>Select operation</label>
      <select id='selectOption' onChange={OperationChange}>
        {oper.map((item, index) => (
          <option  value={item.name}>
            {item.op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Operation;
