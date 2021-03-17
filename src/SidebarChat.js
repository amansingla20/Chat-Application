import './SidebarChat.css';
import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

function SidebarChat(props) {
    const [seed ,setSeed] =useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    return (
        <div className = 'sidebarChat'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className='sidebarChat-info'>
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default SidebarChat;
