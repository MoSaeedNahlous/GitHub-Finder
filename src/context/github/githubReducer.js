import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
  GET_ORGS,
} from '../types.js';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case SEARCH_USERS:
      return { ...state, loading: false, users: action.payload };
    case GET_USER:
      return { ...state, user: action.payload, laoding: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case GET_ORGS:
      return { ...state, orgs: action.payload, loading: false };

    default:
      return state;
  }
};
