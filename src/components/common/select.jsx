import React from 'react';
const Select = ({ options, name, label, error, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className='form-control'>
        <option>Select...</option>
        {options.map(opt => (
          <option key={opt._id} value={opt._id}>
            {opt.name}
          </option>
        ))}
      </select>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Select;
