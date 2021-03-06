import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner.js';

import { Link } from 'react-router-dom';
import Repos from '../repos/Repos.js';
import GithubContext from '../../context/github/githubContext.js';
import Orgs from '../Orgs/Orgs.js';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    githubContext.getUserOrgs(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    bio,
    location,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = githubContext.user;

  if (githubContext.loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back
      </Link>
      Hireable :{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p> {bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  {' '}
                  <strong> Username: </strong>
                  {login}{' '}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  {' '}
                  <strong> Company: </strong>
                  {company}{' '}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  {' '}
                  <strong> Website: </strong>
                  <a href={blog} target='_blank' rel='noopener noreferrer'>
                    {blog}
                  </a>{' '}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-dark'>Followers:{followers}</div>
        <div className='badge badge-white'>Following:{following}</div>
        <div className='badge badge-danger'>Public Repos:{public_repos}</div>
        <div className='badge badge-success'>Public Gists:{public_gists}</div>
      </div>
      <Orgs />
      <Repos />
    </Fragment>
  );
};

export default User;
