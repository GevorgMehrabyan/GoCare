import React, { useState } from 'react';
import './AddForm.scss';
import { Field, reduxForm } from 'redux-form'
import { textField, checkboxField, radioField } from '../../Auth/Fields';
import { validate } from './AddFormVallidate';
import username from '../../Assets/images/username.png';
import password from '../../Assets/images/password.png';
import email from '../../Assets/images/email.png';
import { Radio } from 'antd'


const AddForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='name'
        type='text'
        component={textField}
        prefix={<img src={username} alt='password logo'/>}
        placeholder='Name'
      />
      <Field
        name='email'
        type='email'
        component={textField}
        prefix={<img src={email} alt='email logo'/>}
        placeholder='Email'
      />
      <Field
        name='password'
        type='password'
        component={textField}
        prefix={<img src={password} alt='password logo'/>}
        placeholder='Password'
      />
      <Field
        name='changePassword'
        type='password'
        component={textField}
        prefix={<img src={password} alt='password logo'/>}
        placeholder='Change Password'
      />
      <div className='switch__list'>
        <div className='simple__switch'>
          <p><span>Active</span> <span>:</span></p>
          <Field label="Active" name="Active" component={radioField}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Field>
        </div>
        <div className='simple__switch'>
          <p><span>Supervisor</span> <span>:</span></p>
          <Field label="Supervisor" name="Supervisor" component={radioField}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Field>
        </div>
        <div className='simple__switch big'>
          <p><span>Team Chat</span> <span>:</span></p>
          <Field label="Team Chat" name="TeamChat" component={radioField}>
            <Radio value={true}>Allow</Radio>
            <Radio value={false}>Disallow</Radio>
          </Field>
        </div>
      </div>
      <div className='channels_wrap'>
        <h3>Channels Allowed :</h3>
        <div className='chanel_list'>
          <div>
            <Field className='checkbox_wrap' name="Facebook" component={checkboxField} value="Facebook">Facebook</Field>
            <Field className='checkbox_wrap' name="Webchat" component={checkboxField} value="Webchat">Webchat</Field>
          </div>
          <div>
            <Field className='checkbox_wrap' name="SMS" component={checkboxField} value="SMS">SMS</Field>
          </div>
          <div>
            <Field className='checkbox_wrap' name="Email" component={checkboxField} value="Email">Email</Field>
          </div>
          <div>
            <Field className='checkbox_wrap' name="Twitter" component={checkboxField} value="Twitter">Twitter</Field>
          </div>
        </div>
      </div>
      <button className='submit__button' type='submit'>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'AddForm',
  validate,
  enableReinitialize: true,
})(AddForm)