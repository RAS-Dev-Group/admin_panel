import React from 'react';
// import avatar from '.images/user-avatar.png';

export default function UserInfo() {
  return <div className='user-info flex bg-white'>
    <img className="user-avatar" src='/images/user-avatar.png' alt="User Avatar" />
    <label className='user-name my-auto'>Dash Studio</label>
  </div>;
}