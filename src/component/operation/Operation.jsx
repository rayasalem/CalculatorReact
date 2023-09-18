import React from 'react';
import './Operation.css';
import { OPTION,SET_OPERATION  } from '../../const/Constant';

const Operation = ({ dispatch }) => {
  const handleOperationChange = (e) => {
      dispatch({ type: SET_OPERATION, payload: e.target.value });
    
  };

  return (
    <div className="selectOperation">
      <br />
      <label htmlFor="selectOption">Select operation</label>
      <select id="selectOption" onChange={handleOperationChange}>
        {OPTION.map((item) => (
          <option key={item.name} value={item.name}>
            {item.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Operation;
