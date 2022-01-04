import React from 'react';
import PropTypes from 'prop-types';

export const OrgsItem = ({ org }) => {
  return (
    <div className='card'>
      <div className='row'>
        <img
          className='round-img'
          src={org.avatar_url}
          alt={org.login}
          style={{ width: '50px' }}
        />
        <a href={org.url}> {org.login}</a>
      </div>
    </div>
  );
};

OrgsItem.prototype = {
  org: PropTypes.object.isRequired,
};
export default OrgsItem;
