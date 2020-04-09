import React from 'react';
import './AddForm.scss';
import { Field, reduxForm } from 'redux-form'
import { textField } from '../../Auth/Fields';
import { validate } from './AddFormVallidate';
import username from '../../Assets/images/username.png';
import password from '../../Assets/images/password.png';

const AddForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name='name'
                type='text'
                component={textField}
                prefix={<img src={username} alt='password logo' />}
                placeholder='Name'
            />
            <Field
                name='email'
                type='email'
                component={textField}
                prefix={<img src={username} alt='password logo' />}
                placeholder='Email'
            />
            <Field
                name='password'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='Password'
            />
            <Field
                name='password'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='Change Password'
            />

            <button className='submit__button' type='submit'>Submit</button>
        </form>
    )
}

export default reduxForm({
    form: 'AddForm',
    validate,
})(AddForm)