import React, { useEffect, useState } from 'react';
import './Conversation.scss';
import { Checkbox, Input, Badge } from 'antd';
import search from '../../Assets/images/search.png';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { getArchived, getOpen } from '../../Redux/Conversation/ConversationAction';

const Conversation = (props) => {
  const {getArchived, getOpen} = props;
  const [check, setCheck] = useState(false);
  const colorMan = (status) => {
    switch (status) {
      case 'online':
        return '#1bc167';
      case 'offline':
        return '#f4db50';
      default:
        return '#ed4c4c'
    }
  }

  const handleOpen = () => {
    getOpen();
    setCheck(!check);
  }
  const handleArchived = () => {
    getArchived();
    setCheck(!check);
  }

  useEffect( () => {
    getOpen();
  }, [])

  return (
    <div className='conversation__part'>
      <div className='option_list'>
        <h2>Conversation</h2>
        <div className='choose'>
          <Checkbox onClick={() => handleOpen()} checked={!check}>Open</Checkbox>
          <Checkbox onClick={() => handleArchived()} checked={check}>Archived</Checkbox>
        </div>
      </div>
      <div className='search_wrapper'>
        <Input size="large" placeholder="Find contacts" prefix={<img src={search} alt='search'/>}/>
      </div>
      <div className='member_list'>
        {
          props.chatMembers.map((item, id) => {
            return <div className='simple__member' key={id}>
              <div className='member'>
                <Badge color={colorMan(item.status)}/>
                <Avatar size={40} icon={<img src={item.image} alt={item.fullName}/>}/>
                <h2>{item.fullName}</h2>
              </div>
              {!item.messageCount ? undefined : <div className='badge'>{item.messageCount}</div>}
            </div>
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    chatMembers: state.conversation.toShow,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOpen: () => dispatch(getOpen()),
    getArchived: () => dispatch(getArchived()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);