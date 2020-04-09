import React from 'react';
import AddForm from './AddForm';
import './AddMember.scss';

const AddMember = () => {
    const onSubmit = (addData) => {
        console.log(addData)
    }
    return (
        <div className='add__memeber__modal'>
            <h1>Add New Team Member</h1>
            <div className='form_wrapper'>
                <h2>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. </h2>
                <AddForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default AddMember;