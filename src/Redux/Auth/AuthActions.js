import {
    LOGIN,
    RESET_PASSWORD,
    VERIFY_PASS,
    VERIFY_EMAIL
  } from './Types';
  
  import {User} from './FakeData';
  const token = 'token_dkjf65464';
  
  export const login = values => {
    localStorage.setItem('token', token);
  
    return async dispatch => {
      dispatch({
        type: LOGIN,
        user: User,
        token: token
      });
    };
  };
  
  
  export const verifyEmail = values => {
    return async dispatch => {
      dispatch({
        type: VERIFY_EMAIL,
        user: User,
        token: token
      });
    };
  };
  export const verifyPassword = values => {
    return async dispatch => {
      dispatch({
        type: VERIFY_PASS,
        user: User,
        token: token
      });
    };
  };
  export const forgotPass = values => {
    // localStorage.setItem('token', token);
    return async dispatch => {
      dispatch({
        type: RESET_PASSWORD
      });
    };
  };
  
  