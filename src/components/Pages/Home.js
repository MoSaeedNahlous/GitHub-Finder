import React from 'react';
import Users from '../users/Users.js';
import Search from '../users/Search.js';

export const Home = () => {
  return (
    <div className='bg-container'>
      <Search />
      <Users />
    </div>
  );
};
export default Home;
