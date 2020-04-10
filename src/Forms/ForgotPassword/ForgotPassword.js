import React from 'react';
import './ForgotPassword.scss';
import ForgotPasswordForm from '../ForgotPassword/ForgotPasswordForm';
import logo from '../../Assets/images/logo.png';
import { connect } from 'react-redux';
import {forgotPass} from '../../Redux/Auth/AuthActions';

const ForgotPassword = (props) => {
    const {forgotPass} = props;
    const onSubmit = (forgotData) => {
        forgotPass(forgotData);
        props.history.push('./reset-password');
    }
    return (
        <div className='forgot__password__page'>
            <div className='forgot__password__page__wrapper'>
                <div className='form_wrapper'>
                    <div className='logo_wrapper'>
                        <img src={logo} alt='logo' />
                    </div>
                    <h1>FORGOT PASSWORD</h1>
                    <h2>Enter your email below to receive your password reset instructions</h2>
                    <ForgotPasswordForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = () => {
    return{
        verifyPassword: (values) => dispatchEvent(forgotPass(values))
    }
}

export default connect(null, mapDispatchToProps)(ForgotPassword);