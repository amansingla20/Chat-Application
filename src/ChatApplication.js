import React from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';

function ChatApplication() {
    return (
      <div className="App">
      <div className='App-body'>
          <Sidebar />
          <Chat />
      </div>
    </div>
    )
}

export default ChatApplication
