import React, { useState } from 'react';
import './Home.scss';
import "antd/dist/antd.css";
import Panel from '../../Elements/Panel/Panel';
import Chat from '../../Elements/Chat/Chat';
import Subscribe from '../../Elements/Subscribe/Subscribe';

const Home = (props) => {
    return (
        <div className='home__page'>
            <Panel/>
            <Chat/>
            <Subscribe/>
        </div>
    )
}

export default Home;






