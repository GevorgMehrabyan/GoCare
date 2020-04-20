import React from 'react';
import EditForm from './EditForm';
import './EditMember.scss';
import { connect } from 'react-redux';
import { changeMemberInfo } from '../../Redux/ManageTable/ManageTableAction';

const EditMember = (props) => {
  const { initialValues, changeMemberInfo } = props;
  const onSubmit = (editData) => {
    changeMemberInfo(editData)
  }
  return (
    <div className='add__memeber__modal'>
      <h1>Edit Team Member</h1>
      <div className='form_wrapper'>
        <EditForm onSubmit={onSubmit} initialValues={initialValues}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMemberInfo: data => dispatch(changeMemberInfo(data)),
  }
}

export default connect(null, mapDispatchToProps)(EditMember);