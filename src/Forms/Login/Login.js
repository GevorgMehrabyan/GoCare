import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm';
import logo from '../../Assets/images/logo.png';

const Login = () => {
    const onSubmit = (loginData) => {
        console.log(loginData)
    }
    return (
        <div className='login__page'>
            <div className='login__page__wrapper'>
                <div className='form_wrapper'>
                    <div className='logo_wrapper'>
                        <img src={logo} alt='logo' />
                    </div>
                    <p className='login__description'>To keep connected with us please login With your personal information by email address and password</p>
                    <LoginForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Login;