import React, { useState } from 'react';
import './ChatContainer.scss';
import { Tag, Avatar, Input } from 'antd';
import click from '../../Assets/images/click.png';
import plus from '../../Assets/images/plus.png'
import { connect } from 'react-redux';
import { deleteTag, addTag } from '../../Redux/ChatContainer/ChatContainerAction';

const ChatContainer = (props) => {
  const { chatInfo, tagList, deleteTag, addTag } = props;
  const [value, setValue] = useState('');
  const handleClose = (id) => {
    deleteTag(id)
  }
  const handleAdd = (value) => {
    value && addTag(value);
    setValue('');
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className='chatContainer__part'>
      <div className='wraps'>
        <div className='selected__title'>
          <h2>Selected Conversation Subject or Title</h2>
          <div className='add_tag'>
            <Input onChange={(event) => handleChange(event)} value={value} placeholder='Add Tag'/>
            <button onClick={() => handleAdd(value)}><img src={plus} alt='add'/></button>
          </div>
        </div>
        <div className='tag_list'>
          {
            tagList.map((item, id) => {
              return <Tag onClose={() => handleClose(id)} closable key={id}>{item}</Tag>
            })
          }
        </div>
        <div className='message_list'>
          {
            chatInfo.map((item, index) => {
              return (
                item.id === 1
                  ?
                  <>
                    {!item.read && <div className='unread_text'>
                      <hr/>
                      <h3>UNREAD</h3>
                      <hr/>
                    </div>
                    }
                    <div className='my_message_form' key={index}>
                      {
                        item.messages.map((message, id) => {
                          return <div className={item.read ? 'my_message__text ' : 'my_message__text unread'} key={id}>
                            {message}
                          </div>
                        })
                      }
                      <div className='my_pre_tag'>
                        <Avatar size={32} icon={<img src={item.image} alt='user'/>}/>
                        <p>{item.fullName} <span>{item.sendTime}</span></p>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    {!item.read && <div className='unread_text'>
                      <hr/>
                      <h3>UNREAD</h3>
                      <hr/>
                    </div>
                    }
                    <div className='my_message_form' style={{ alignItems: 'flex-end' }} key={index}>
                      {
                        item.messages.map((message, id) => {
                          return <div className={item.read ? 'my_message__text ' : 'my_message__text unread'} key={id}>
                            {message}
                          </div>
                        })
                      }
                      <div className='my_pre_tag' style={{ flexDirection: 'row-reverse' }}>
                        <Avatar size={32} icon={<img src={item.image} alt='guest'/>}/>
                        <p style={{ paddingRight: 12 }}>{item.fullName} <span>{item.sendTime}</span></p>
                      </div>
                    </div>
                  </>
              )
            })
          }
        </div>
      </div>
      <div className='text__typing'>
        <Input suffix={<img src={click} alt='click me'/>} placeholder='Comment or Team chat inputbox'/>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTag: id => dispatch(deleteTag(id)),
    addTag: value => dispatch(addTag(value)),
  }
}
const mapStateToProps = state => {
  return {
    tagList: state.chatContainer.tagList,
    chatInfo: state.chatContainer.chatInfo,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);


