import React from 'react';
import { getGenres } from '../../services/fakeGenreService';
const Select = props => {
  console.log('props: ', props);
  const genres = getGenres();
  return (
    <div className='input-group mb-3'>
      <div className='input-group-prepend'>
        <label className='input-group-text' htmlFor='inputGroupSelect01'>
          {props.label}
        </label>
      </div>
      <select className='custom-select' id='inputGroupSelect01'>
        <option>Choose...</option>
        {genres.map(g => (
          <option key={g._id}>{g.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
