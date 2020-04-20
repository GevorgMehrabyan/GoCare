import React, { useEffect } from 'react';
import './Panel.scss';
import whiteLogo from '../../Assets/images/whiteLogo.png';
import location from '../../Assets/images/location.png';
import { connect } from 'react-redux';
import sms from '../../Assets/images/sms.png';
import { Avatar } from 'antd';
import {logout} from '../../Redux/Auth/AuthActions';
import {useHistory, Link} from 'react-router-dom';


const Panel = (props) => {
  const { conversations, inboxes, chats, userInfo, logout, token } = props;
  const history = useHistory();
  const Logout = () => {
    logout();
  }
  useEffect(() => {
    !localStorage.getItem('token') && history.push('/login');
  }, [token])
  return (
    <div className='panel_part'>
      <div className='img_wrapper'>
        <Link to={(history.location.pathname === '/management' ? '/home' : '/management' )}>
          <img title={(history.location.pathname === '/management' ? 'CLick me to go Home page' : 'CLick me to go Team Member Management page ' )} src={whiteLogo} alt='white logo'/>
        </Link>
      </div>
      <div className='avatar_wrapper'>
        <Avatar size={64} icon={<img src={userInfo.image} alt='user avatar'/>}/>
        <div className='location'>
          <h3>{userInfo.fullName}</h3>
          <div>
            <img src={location} alt='location'/>
            {userInfo.location}
          </div>
        </div>
      </div>
      <div className='conversation_part'>
        {
          conversations.map((item, id) => {
            return <div key={id}>
              <img src={item.image} alt={item.name}/>
              {item.name}
            </div>
          })
        }
      </div>
      <div className='team_inbox'>
        <div className='title'>
          <h2>Team Inboxes</h2>
          <hr/>
        </div>
        {
          inboxes.map((item, id) => {
            return <div key={id} className='simple__option'>
              <img src={item.image} alt={item.name}/>
              {item.name}
            </div>
          })
        }
      </div>
      <div className='team_inbox'>
        <div className='title'>
          <h2>Team Chat</h2>
          <hr/>
        </div>
        {
          chats.map((item, id) => {
            return <div key={id} className='simple__option'>
              <img src={item.image} alt={item.name}/>
              {item.name}
            </div>
          })
        }
      </div>
      <div className='logout' onClick={ () => Logout()}>
        <img src={sms} alt='logout'/>
        Logout
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    conversations: state.panel.conversations,
    inboxes: state.panel.inboxes,
    chats: state.panel.chats,
    userInfo: state.panel.userInfo,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Panel);