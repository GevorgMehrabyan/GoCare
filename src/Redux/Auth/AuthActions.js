import {
  LOGIN,
  RESET_PASSWORD,
  VERIFY_PASS,
  VERIFY_EMAIL,
  FORGOT_PASSWORD
} from './Types';
import { User } from './FakeData';

const axios = require('axios');


export const login = values => {
  let token = '';

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8088/api/auth/login',
  //   data: {
  //     email: values.email,
  //     password: values.password
  //   }
  // });

  axios.post('http://localhost:8088/api/auth/login', {
        email: varEmail, //varEmail is a variable which holds the email
        password: varPassword
      },
      {
        headers: {
          Authorization: 'Bearer ' + varToken
        }
      })

  localStorage.setItem('token', token);
  return async dispatch => {
    dispatch({
      type: LOGIN,
      user: values,
      token: token
    });
  };
};


export const forgotPass = values => {
  axios.post('http://localhost:8088/api/auth/forgot-pass').then(resp => {
    console.log(resp.data);
  });
  return async dispatch => {
    dispatch({
      type: FORGOT_PASSWORD,
    });
  };
};




export const verifyEmail = values => {
  return async dispatch => {
    dispatch({
      type: VERIFY_EMAIL,
      user: User,
      // token: token
    });
  };
};


export const verifyPassword = values => {
  return async dispatch => {
    dispatch({
      type: VERIFY_PASS,
      user: User,
      // token: token
    });
  };
};




