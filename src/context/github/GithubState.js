import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext.js';
import GithubReducer from './githubReducer.js';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
  GET_ORGS,
} from '../types.js';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    orgs: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (text) => {
    setLoading();
    const response =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //this.setState({users:response.data.items , loading :false});
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };
  //Get User
  const getUser = async (username) => {
    setLoading();
    const response =
      await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({ type: GET_USER, payload: response.data });
  };

  //Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    const response =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({ type: GET_REPOS, payload: response.data });
  };

  //Get Orgs
  const getUserOrgs = async (username) => {
    setLoading();
    const response =
      await axios.get(`https://api.github.com/users/${username}/orgs?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({ type: GET_ORGS, payload: response.data });
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        orgs: state.orgs,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        getUserOrgs,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
