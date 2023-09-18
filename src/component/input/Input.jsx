import React from 'react';
import './Input.css';
import { SET_NUMBER1, SET_NUMBER2 } from '../../const/Constant';

const Input = ({ label, value, dispatch, readOnly = false, inputType }) => {
  const handleInputChange = (e) => {
    switch({inputType}) {
    case 'number1' :
      dispatch({ type: SET_NUMBER1, payload: parseFloat(e.target.value) });
     case 'number2':
      dispatch({ type: SET_NUMBER2, payload: parseFloat(e.target.value) });
    }
  };

  return (
    <div className="inputGroup">
      <div className="form-group">
        {label != null && <label htmlFor={label}>Enter {label}</label>}
        <input
          type={readOnly ? 'text' : 'number'}
          id={label}
          value={value}
          onChange={readOnly ? null : handleInputChange}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default Input;
