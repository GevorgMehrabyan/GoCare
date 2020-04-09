import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './LoginValidate';
import {Link} from 'react-router-dom';
import { textField, radioField } from '../../Auth/Fields';
import username from '../../Assets/images/username.png';
import password from '../../Assets/images/password.png';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='userName'
                type='text'
                component={textField}
                prefix={<img src={username}  alt='user logo'/>}
                placeholder='User Name'
            />
            <Field
                name='password'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo'/>}
                placeholder='Password'
            />
            <div className='remember'>
                <Field
                    name='remember'
                    label='Remember Me'
                    component={radioField}
                />
                <Link to={'/forgot-password'} className='forgot'>Forgot Password?</Link>
            </div>
            <button className='submit__button' type='submit'>Login</button>
        </form>
    )
}

export default reduxForm({
    form: 'LoginForm',
    validate,
})(LoginForm);