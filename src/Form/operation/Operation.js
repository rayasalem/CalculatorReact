import React from 'react';
import "./Operation.css";

function Operation({ setOperation }) {
  const OperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <div className="selectOperation">
      <br />
  <label htmlFor="selectOption">Select operation</label>
    <select id="selectOption" onChange={OperationChange}>
      <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
          <option value="power">^</option>
          <option value="modulo">%</option>
          <option value="square">square</option>
          <option value="log">log2</option>
    </select>
    </div>
  );
}

export default Operation;