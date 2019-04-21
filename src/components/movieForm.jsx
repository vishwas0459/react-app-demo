import React from 'react';
const MovieForm = ({ match, history }) => {
  return (
    <div className='container'>
      <h1>Movie Form {match.params.id}</h1>
      <button className='btn btn-primary' onClick={() => history.push('/')}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
