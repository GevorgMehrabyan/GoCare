import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from './Types';
import {User} from './FakeData';

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
    // case FORGOT_PASSWORD:
    //   return {
    //     ...state,
    //     user: action.user
    //   };
    case RESET_PASSWORD:
      return {
        ...state
      };
    default:
      return state;
  }
};
