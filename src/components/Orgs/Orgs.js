import React, { Fragment, useContext } from 'react';

import OrgsItem from './OrgsItem.js';
import GithubContext from '../../context/github/githubContext.js';

export const Orgs = () => {
  const githubContext = useContext(GithubContext);
  return (
    <Fragment>
      <h2>User's Organizations</h2>
      {githubContext.orgs.map((org) => (
        <OrgsItem org={org} key={org.id} />
      ))}
    </Fragment>
  );
};

export default Orgs;
