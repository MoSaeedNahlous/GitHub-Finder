import { SET_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        themeColor: action.payload,
      };
    default:
      return state;
  }
};
