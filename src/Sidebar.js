import './Sidebar.css';
import React from 'react'
import {Avatar, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
function Sidebar() {
    const [seed ,setSeed] =useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    let x = localStorage.getItem('userName');
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
            <Link to ='/'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            </Link>
            <h1 style={{marginRight: '100px',marginTop: '2px', marginBottom: '3px'}}>{x}</h1>
            <div className='sidebar-headerRight'>
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
            </div>
            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                <SearchOutlined/>
                <input 
                placeholder='Search or start new chat' 
                type='text'/>
            </div>
        </div>
            <div className='sidebar-chats'>
                <SidebarChat name='Apple' message = 'Hi! Mango and Banana..'/>
                <SidebarChat name='Mango' message = 'Hi! Apple and Banana...'/>
                <SidebarChat name='Banana' message = 'Hi! Apple and Mango...'/> 
                <SidebarChat name='Papaya' message = 'Hi! Mango and Banana..'/>
                <SidebarChat name='Grapes' message = 'Hi! Apple and Banana...'/>
                <SidebarChat name='Watermelon' message = 'Hi! Apple and Mango...'/> 
                <SidebarChat name='Orange' message = 'Hi! Apple and Mango...'/> 
                <SidebarChat name='Cherry' message = 'Hi! Grapes and Mango...'/> 
                <SidebarChat name='Pomegranate' message = 'Hi! Cherry and Mango...'/>
                <SidebarChat name='Strawberry' message = 'Hi! Apple and Mango...'/> 
                <SidebarChat name='Pineapple' message = 'Hi! Strawberry and Cherry...'/>  
            </div>
        </div>
    )
}
export default Sidebar;
