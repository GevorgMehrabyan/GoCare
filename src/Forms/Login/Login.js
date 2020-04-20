import React, {useEffect} from 'react';
import './Login.scss';
import LoginForm from './LoginForm';
import logo from '../../Assets/images/logo.png';
import { connect } from 'react-redux';
import {login} from '../../Redux/Auth/AuthActions';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const {loginCall} = props;
    const history = useHistory();
    const onSubmit = (loginData) => {
        loginCall(loginData);
    }

    useEffect( () => {
        localStorage.getItem('token') && history.push('/home')
    })

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

const mapStateToProps = (state) => {
    return{
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loginCall: values => dispatch(login(values))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login) ;