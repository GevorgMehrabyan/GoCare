import React, { useEffect, useState } from 'react';
import './ManageTable.scss';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Checkbox, Modal } from 'antd';
import plus from '../../Assets/images/plus.png';
import user from '../../Assets/images/user.jpg';

import editIcon from '../../Assets/images/editIcon.png';
import deleteIcon from '../../Assets/images/deleteIcon.png';
import AddMember from '../../Forms/AddMember/AddMember';
import EditMember from '../../Forms/EditMember/EditMember';
import { deleteMember, editMember } from '../../Redux/ManageTable/ManageTableAction';

const ManageTable = (props) => {
  const { deleteMember, members, initialName, editMember, addItem } = props;
  const [type, setType] = useState('')
  const [visible, setVisible] = useState(false)
  const showModal = (type) => {
    (type === 'edit') ? setType('edit') : setType('add')
    setVisible(true)
  };
  const handleCancel = e => setVisible(false);
  const handleDelete = (id) => {
    deleteMember(id)
  }
  const handleEdit = (id) => {
    editMember(id);
    showModal('edit');
  }

  const isEmptyObject = (val) => {
    return !Object.keys(val).length
  }

  useEffect(() => {
    setVisible(false)
  }, [members])

  return (
    <div className='manage_table_part'>
      <Modal
        width={480}
        visible={visible}
        onCancel={handleCancel}
      >
        {(type === 'edit') ? <EditMember initialValues={(!isEmptyObject(initialName)) && initialName}/> : <AddMember  initialValues={addItem}/>}
      </Modal>
      <div className='table'>
        <div className='tool_bar'>
          <h1>Team Member Management</h1>
          <button onClick={() => showModal('add')}>
            <img src={plus} alt='add'/>
            Add Team Member
          </button>
        </div>
        <div className='table_head tr_style'>
          <div></div>
          <div>Name</div>
          <div>Email</div>
          <div>Action</div>
        </div>
        <div className='table_body'>
          {
            members.map((item, id) => {
              return (
                <div key={id} className='table_row tr_style'>
                  <div className='checkbox'>
                    <Checkbox key={item.id}/>
                  </div>
                  <div className='name_div'>
                    <img src={(item.image) ? item.image : user} alt='pic'/>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>{item.email}</p>
                  </div>
                  <div className='action_div'>
                    <button onClick={() => handleEdit(id)}><img src={editIcon} alt='edit'/></button>
                    <button onClick={() => handleDelete(id)}><img src={deleteIcon} alt='delete'/></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    members: state.table.members,
    initialName: state.table.activeMember,
    addItem: state.table.addItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMember: id => dispatch(deleteMember(id)),
    editMember: id => dispatch(editMember(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTable);
