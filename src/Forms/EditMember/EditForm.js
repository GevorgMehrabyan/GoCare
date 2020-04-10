import React from 'react';
import '../AddMember/AddForm.scss';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import { textField, checkboxField, radioField } from '../../Auth/Fields';
import { validate } from './EditFormVallidate';
import username from '../../Assets/images/username.png';
import password from '../../Assets/images/password.png';
import email from '../../Assets/images/email.png';
import { Radio } from 'antd'

const EditForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name='name'
                type='text'
                component={textField}
                prefix={<img src={username} alt='password logo' />}
                placeholder='Francesca Metts'
            />
            <Field
                name='email'
                type='email'
                component={textField}
                prefix={<img src={email} alt='email logo' />}
                default='gocare_info@gmail.com'
            />
            <Field
                name='password'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='* * * * * * * * * * * * '
            />
            <Field
                name='changePassword'
                type='password'
                component={textField}
                prefix={<img src={password} alt='password logo' />}
                placeholder='* * * * * * * * * * * * '
            />
            <div className='switch__list'>
                <div className='simple__switch'>
                    <p> <span>Active</span> <span>:</span> </p>
                    <Field label="Active" name="Active" component={radioField}  >
                        <Radio value={true} >Yes</Radio>
                        <Radio value={false} >No</Radio>
                    </Field>
                </div>
            </div>
            <div className='permissions'>
                <hr />
                <h3>Permissions</h3>
                <hr />
            </div>
            <div className='switch__list'>
                <div className='simple__switch'>
                    <p> <span>Supervisor</span> <span>:</span> </p>
                    <Field label="Supervisor" name="Supervisor" component={radioField}>
                        <Radio value={true} >Yes</Radio>
                        <Radio value={false} >No</Radio>
                    </Field>
                </div>
                <div className='simple__switch big'>
                    <p> <span>Team Chat</span> <span>:</span> </p>
                    <Field label="Team Chat" name="TeamChat" component={radioField} >
                        <Radio value={true} >Allow</Radio>
                        <Radio value={false} >Disallow</Radio>
                    </Field>
                </div>
            </div>
            <div className='channels_wrap'>
                <h3>Channels Allowed :</h3>
                <div className='chanel_list'>
                    <div>
                        <Field className='checkbox_wrap' name="All" component={checkboxField} >All</Field>
                        <Field className='checkbox_wrap' name="Email" component={checkboxField}>Email</Field>
                    </div>
                    <div>
                        <Field className='checkbox_wrap' name="Webchat" component={checkboxField} >Webchat</Field>
                        <Field className='checkbox_wrap' name="SMS" component={checkboxField} >SMS</Field>
                    </div>
                    <div>
                        <Field className='checkbox_wrap' name="Facebook" component={checkboxField} >Facebook</Field>
                    </div>
                    <div>
                        <Field className='checkbox_wrap' name="Twitter" component={checkboxField}>Twitter</Field>
                    </div>
                </div>
            </div>
            <button className='submit__button' type='submit'>Save</button>
        </form >
    )
}


const mapStateToProps = (state, props) => ({
    initialValues: state.edit.data,
})

export default connect(
    mapStateToProps
)(reduxForm({
    form: 'EditForm',
    validate,
    enableReinitialize: true
})(EditForm))