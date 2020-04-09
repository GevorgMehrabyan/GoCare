import React from 'react';
import './ResetPassword.scss';
import ResetPasswordForm from './ResetPasswordForm';
import logo from '../../Assets/images/logo.png';


const Login = () => {
    const onSubmit = (resetData) => {
        console.log(resetData)
    }
    return (
        <div className='reset__password__page'>
            <div className='reset__password__page__wrapper'>
                <div className='form_wrapper'>
                    <div className='logo_wrapper'>
                        <img src={logo} alt='logo' />
                    </div>
                    <h1>FORGOT PASSWORD</h1>
                    <ResetPasswordForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Login;