import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './ResetValidate';
import { Link } from 'react-router-dom';
import { textField } from '../../Auth/Fields';
import password from '../../Assets/images/password.png';

const ResetPasswordForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name='newPassword'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='New Password'
            />
            <Field
                name='confirmPassword'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='Confirm Password'
            />
            <button className='submit__button' type='submit'>Submit</button>
            <p className='link_to'><Link to={'/forgot-password'} >Cancel</Link></p>
        </form>
    )
}

export default reduxForm({
    form: 'ResetPasswordForm',
    validate,
})(ResetPasswordForm);