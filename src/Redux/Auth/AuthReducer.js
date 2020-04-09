import { LOGOUT, LOGIN, REGISTRATION, RESET_PASSWORD } from './Types';
import User from './FakeData';

const token = localStorage.getItem('token');

const initState = {
  user: token ? User : null,
  token
};
export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case REGISTRATION:
      return {
        ...state,
        user: action.user
      };
    case RESET_PASSWORD:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      return state;
  }
};
