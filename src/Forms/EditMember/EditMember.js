import React from 'react';
import EditForm from './EditForm';
import './EditMember.scss';
import { connect } from 'react-redux';

const EditMember = (props) => {
    const {initialName} = props;
    const onSubmit = (addData) => {
        console.log(addData)
    }
    return (
        <div className='add__memeber__modal'>
            <h1>Edit Team Member</h1>
            <div className='form_wrapper'>
                <EditForm onSubmit={onSubmit}  initialValues={initialName}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        initialName: state.edit.data
    };
};

export default connect(mapStateToProps)(EditMember) ;