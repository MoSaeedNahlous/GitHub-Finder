import React, { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext.js';
import AlertContext from '../../context/alert/AlertContext.js';
import { GlobalContext } from '../../context/theme/ThemeState.js';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  const { theme } = useContext(GlobalContext);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something to search...', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users....'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 ? (
        <button
          className={
            theme === 'light'
              ? 'btn btn-danger btn-block'
              : 'btn btn-dark btn-block'
          }
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
};

export default Search;
