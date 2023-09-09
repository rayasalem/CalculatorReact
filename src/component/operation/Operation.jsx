import React from 'react';
import './Operation.css';
import { OPTION } from '../../const/Constant';

const Operation = ({ setOperation }) => {
  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <div className="selectOperation">
      <br />
      <label htmlFor="selectOption">Select operation</label>
      <select id="selectOption" onChange={handleOperationChange}>
        {OPTION.map((item, index) => (
          <option key={index} value={item.name}>
            {item.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Operation;
