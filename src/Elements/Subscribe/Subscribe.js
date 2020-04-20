import React from 'react';
import './Subscribe.scss';
import { Avatar } from 'antd';
import minev from '../../Assets/images/minev.png';
import phone from '../../Assets/images/phone.png';
import mail2 from '../../Assets/images/mail2.png';
import calendar from '../../Assets/images/calendar.png';
import {connect} from 'react-redux';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Subscribe = (props) => {
  const {journeys, subscriber} = props;
  return (
    <div className='subscribe_part'>
      <div className='subscriber__details'>
        <h1>Subscriber Details</h1>
        <hr/>
        <div className='subscriber__info'>
          <div className='info'>
            <div className='avatar_wrap'>
              <Avatar icon={<img src={subscriber.pic} alt='user avatar'/>}/>
            </div>
            <div className='subs_description'>
              <h3>{subscriber.fullName}</h3>
              <div>
                <img src={phone} alt=''/>
                {subscriber.phone}
              </div>
              <div>
                <img src={mail2} alt=''/>
                {subscriber.mail}
              </div>
            </div>
          </div>
          <hr/>
          <p>{subscriber.description}</p>
        </div>
      </div>
      <div className='tabs_info'>
        <Tabs defaultActiveKey="1" type="card" size='small'>
          <TabPane tab="Journey" key="1">
            <div className='journey_list'>
              {
                journeys.map((item, id) => {
                  return <div className='simple_journey' key={id}>
                    <div className='from_who'>
                      <h3>{item.name}</h3>
                      <div>
                        <img src={calendar} alt='date'/>
                        {item.date}
                      </div>
                    </div>
                    <p>{item.comment}</p>
                  </div>
                })
              }
            </div>
          </TabPane>
          <TabPane tab="Notes" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Tools" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    journeys: state.subscribe.journeys,
    subscriber: state.subscribe.subscriber
  }
}
export default connect(mapStateToProps)(Subscribe);