import React from 'react';
const Profile = props => {
  const { user } = props;
  console.log('props:', user.name);
  return (
    <div className='card mb-3' style={{ maxWidth: 240 }}>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={user.picture.large}
            className='card-img'
            alt={user.name.first}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{user.name.first}</h5>
            <p className='card-text'>{props.email}</p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
          <button className='btn btn-secondary' onClick={props.onDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
