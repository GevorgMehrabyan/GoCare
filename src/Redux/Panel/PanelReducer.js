import { GET } from './Types';
import message from '../../Assets/images/message.png';
import teamConv from '../../Assets/images/teamConv.png';
import teamChat from '../../Assets/images/teamChat.png';
import mail from '../../Assets/images/mail.png';
import facebook from '../../Assets/images/facebook.png';
import twitter from '../../Assets/images/twitter.png';
import snapchat from '../../Assets/images/snapchat.png';
import sms from '../../Assets/images/sms.png';
import man from '../../Assets/images/man.png';
import stella from '../../Assets/images/stella.png';

const initState = {
  userInfo: {
    image: stella,
    location: 'Palo Alto, CA, United States',
    fullName: 'Stella Johnson'
  },
  conversations: [
    { name: 'My Conversations', image: message },
    { name: 'Team Conversations', image: teamConv },
    { name: 'Team Chats', image: teamChat },
  ],
  inboxes: [
    { name: 'Email Support', image: mail },
    { name: 'Facebook Messenger', image: facebook },
    { name: 'Twitter', image: twitter },
    { name: 'Webchat', image: snapchat },
    { name: 'SMS', image: sms },
  ],
  chats: [
    { name: 'Team Member 1', image: man },
    { name: 'Team Member 2', image: man },
    { name: 'Team Member 3', image: man },
    { name: 'Team Member 4', image: man },
  ]
}


export const PanelReducer = (state = initState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
