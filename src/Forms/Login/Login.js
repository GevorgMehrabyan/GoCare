import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm';
import logo from '../../Assets/images/logo.png';
import { connect } from 'react-redux';
import {login} from '../../Redux/Auth/AuthActions';

const Login = (props) => {
    const {login} = props;
    const onSubmit = (loginData) => {
        login(loginData);
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

const mapDispatchToProps = (dispatch) =>{
    return{
        login: values => dispatch(login(values))
    }
}
export default connect(null, mapDispatchToProps)(Login) ;