import React, { Fragment, useContext } from 'react';

import ReposItem from './ReposItem.js';
import GithubContext from '../../context/github/githubContext.js';

export const Repos = () => {
  const githubContext = useContext(GithubContext);
  return (
    <Fragment>
      {/*  */}
      <h2>User's Recent Repositories</h2>
      {githubContext.repos.length === 0 ? (
        <h3 style={{ textAlign: 'center', margin: '3%' }}>
          This dose not have any repositories at the moment!
        </h3>
      ) : (
        githubContext.repos.map((repo) => (
          <ReposItem repo={repo} key={repo.id} />
        ))
      )}
    </Fragment>
  );
};

export default Repos;
