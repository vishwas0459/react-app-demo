import React from 'react';
const Input = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <input className='form-control' type='text' id={props.name} {...props} />
      {props.error && <div className='alert alert-danger'>{props.error}</div>}
    </div>
  );
};

export default Input;
