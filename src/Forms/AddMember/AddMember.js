import React from 'react';
import AddForm from './AddForm';
import './AddMember.scss';
import { addMember } from '../../Redux/ManageTable/ManageTableAction';
import { connect } from 'react-redux';

const AddMember = (props) => {
  const { addMember, initialValues } = props;
  const onSubmit = (member) => {
    addMember(member);
  }
  return (
    <div className='add__memeber__modal'>
      <h1>Add New Team Member</h1>
      <div className='form_wrapper'>
        <h2>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. </h2>
        <AddForm onSubmit={onSubmit} initialValues={initialValues}/>
      </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    addMember: member => dispatch(addMember(member)),
  }
}

export default connect(null, mapDispatchToProps)(AddMember);