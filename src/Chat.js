import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React ,{useState, useEffect} from 'react';
import './Chat.css';

function Chat() {
    const [seed ,setSeed] =useState('');
    const [input , setInput] =useState('');
    const [chats, setChats] = useState([])
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    const sendMessage = (e) =>{
        e.preventDefault();
        let x = chats.slice()
        x.push({"text":input,"time": new Date().toLocaleTimeString()})
        setChats(x);
        setInput('');
    };
    return (
        <div className = 'chat'>
            <div className='chat-header'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg` }/>
            <div className='chat-headerInfo'>
                <h3>Group Chat</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat-headerRight'>
            <IconButton>
                <SearchOutlined/>
                </IconButton>
                <IconButton>
                <AttachFile/>
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
            </div>
            <div className='chat-body'>
                {
                    chats.map((chat) => (
                        <React.Fragment key={chat.time}>
                        <p className ='chat-message'>
                        <span className ='chat-name'>Apple</span>
                         {chat.text}
                         <span className='chat-timestamp'>
                         {chat.time}
                         </span>
                        </p>
                        <br/>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='chat-footer'>
                <InsertEmoticonIcon />
                <form>
                    <input type='text'placeholder= 'Type a message....'
                    value = {input}
                    onChange={(e)=> setInput(e.target.value)}/>
                    <button onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
