import React, {useEffect} from 'react';
import './ForgotPassword.scss';
import ForgotPasswordForm from '../ForgotPassword/ForgotPasswordForm';
import logo from '../../Assets/images/logo.png';
import { connect } from 'react-redux';
import {forgotPass} from '../../Redux/Auth/AuthActions';
import { useHistory } from 'react-router-dom';

const ForgotPassword = (props) => {
    const {forgotPass, token} = props;
    const history = useHistory();
    const onSubmit = (forgotData) => {
        forgotPass(forgotData);
    }

    useEffect( () => {
        localStorage.getItem('token') && history.push('/home')
    })
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

const mapStateToProps = (state) => {
    return{
        token: state.auth.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        forgotPass: (values) => dispatch(forgotPass(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);