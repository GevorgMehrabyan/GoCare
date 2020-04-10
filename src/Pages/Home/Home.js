import React, { useState } from 'react';
import './Home.scss';
import { Modal, Button } from 'antd';
import "antd/dist/antd.css";
import AddMember from '../../Forms/AddMember/AddMember';
import EditMember from '../../Forms/EditMember/EditMember';

const Home = (props) => {
    const [visible, setVisible] = useState(false)
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
                <EditMember />
            </Modal>
        </div>
    )
}

export default Home;
