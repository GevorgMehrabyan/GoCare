import React from 'react';
import { useHistory } from 'react-router-dom';
import ResetPasswordForm from './ResetPasswordForm';
import { resetPass } from '../../Redux/Auth/AuthActions';
import './ResetPassword.scss';
import logo from '../../Assets/images/logo.png';


const ResetPassword = (props) => {
  const history = useHistory();
  const onSubmit = (resetData) => {
    resetPass(resetData).then(() => {
      history.push('/login')
    });
  };
  
  return (
    <div className='reset__password__page'>
      <div className='reset__password__page__wrapper'>
        <div className='form_wrapper'>
          <div className='logo_wrapper'>
            <img src={logo} alt='logo'/>
          </div>
          <h1>RESET PASSWORD</h1>
          <ResetPasswordForm onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword;