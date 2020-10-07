import React, { useState } from 'react';
import { Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import "./Chat.css";
import InsertEmotionalIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios.js';

function Chat({messages}) {
  const [input,setInput] =useState("");
 const sendMessage = async (e)=>{
  e.preventDefault();

await axios.post("/messages/new",{
  message:input,
  name:"DEMO APP",
  timestamp:"just now!",
  received:false,
});
 setInput('');
  };
    return (
        <div className="chat">
         <div className="chat_header">
            <Avatar />
            <div className="chat_headerInfo">
                <h3>room name</h3>
                <p>last seen at....</p>
            </div>
            <div className="chat_headerRight">
            <IconButton> 
                      <SearchOutlined />
             </IconButton>
             <IconButton>
             <AttachFile />
             </IconButton>
             <IconButton>
                 <MoreVert />
             </IconButton>
            </div>
         </div>
            <div className="chat__body">
              {messages.map((message) =>(
                 <p className={`chat__message ${message.received && "chat__reciever"}`} >
              <span className="chat__name">{message.name}</span>  
                   
               {message.message}
               
               <span className="chat__timestamp">
                   {message.timestamp}
                 </span>
               </p>
              ))}
            </div>

            
            <div className="chat__footer">
              <InsertEmotionalIcon />
              <form>
                <input value={input} onChange={e =>setInput(e.target.value)} placeholder="Type a massege" type="text" />
                <button onClick={sendMessage} type="submit">send a massege</button>
              </form>
              <MicIcon/>
            </div>
        </div>
    );
}

export default Chat

