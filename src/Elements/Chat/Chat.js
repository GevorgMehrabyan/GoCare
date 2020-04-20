import React from 'react';
import './Chat.scss';
import Conversation from '../Conversation/Conversation';
import ChatContainer from '../ChatContainer/ChatContainer';

const Chat = (props) => {
  return(
    <div className='chat_part'>
      <Conversation />
      <ChatContainer/>
    </div>
  )
}
export default Chat;