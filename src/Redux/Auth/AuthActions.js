import {
  LOGIN,
  FORGOT_PASSWORD,
  LOGOUT,
} from './Types';
import axios from 'axios';

export const login = values => {
  return dispatch => {
    axios.post('http://localhost:8088/api/auth/login', values)
      .then(res => {
        let token = res.data.token;
        localStorage.setItem('token', token);
        dispatch({
          type: LOGIN,
          user: values,
          token: token,
        })
      })
      .catch(error => {
        console.log(error)
      })
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT,
    token: '',
  })
}

export const forgotPass = values => {
  return async dispatch => {
    axios.post('http://localhost:8088/api/auth/resetPassEmail', values).then(resp => {
      alert(resp.data.msg);
    });
    dispatch({
      type: FORGOT_PASSWORD,
    });
  };
};

export const resetPass = values => {
  return axios.post('http://localhost:8088/api/auth/resetPassword', values).then(res => {
    return res
  }).catch(error => {
    console.log(error)
  });
};






