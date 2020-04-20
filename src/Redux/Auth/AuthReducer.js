import { LOGIN, LOGOUT, RESET_PASSWORD } from './Types';
const User = {
  test: 'testing'
}
const token = localStorage.getItem('token');

const initState = {
  user: token ? User : null,
};

export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token
      };
    case LOGOUT:
      return {
        ...state,
        token: action.token
      };
    case RESET_PASSWORD:
      return {
        ...state,
        user: action.password,
        token: token
      };
    default:
      return state;
  }
};
