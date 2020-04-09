import React, { useState } from 'react';
import './Home.scss';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
import AddForm from '../../Forms/AddForm/AddForm';


const Home = (props) => {
    const [visible, setVisible] = useState(false)
    const onSubmit = (addData) => {
        console.log(addData)
    }
    const showModal = () => setVisible(true);
    const handleCancel = e => setVisible(false);

    return (
        <div className='modal_style'>
            <Button type="primary" onClick={showModal}>
                Open Modal
        </Button>
            <Modal
                width={480} 
                visible={visible}
                onCancel={handleCancel}
            >
                <div className='add__memeber__modal'>
                    <h1>Add New Team Member</h1>
                    <div className='form_wrapper'>
                        <h2>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. </h2>
                        <AddForm onSubmit={onSubmit} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Home;