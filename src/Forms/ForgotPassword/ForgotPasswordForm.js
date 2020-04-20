import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { textField } from '../../Auth/Fields';
import { validate } from './ForgotPasswordValidation';
import { Link } from 'react-router-dom';
import username from '../../Assets/images/username.png';


const ForgotPassword = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='email'
        type='email'
        component={textField}
        prefix={<img src={username} alt='password logo' />}
        placeholder='Email'
      />
      <button className='submit__button' type='submit'>Submit</button>
      <p className='link_to'><Link to={'/'} >Cancel</Link></p>
    </form>
  )
}

export default reduxForm({
  form: 'ForgotPasswordForm',
  validate,
})(ForgotPassword)