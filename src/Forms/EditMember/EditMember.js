import React from 'react';
import AddForm from './EditForm';
import './EditMember.scss';

const EditMember = () => {
    const onSubmit = (addData) => {
        console.log(addData)
    }
    return (
        <div className='add__memeber__modal'>
            <h1>Edit Team Member</h1>
            <div className='form_wrapper'>
                <AddForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default EditMember;