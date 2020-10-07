import React, { Component } from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
               
                <div className="sidebar_header">
                    <Avatar src="https://i.insider.com/5ebf0f16aee6a826327d9111?width=900&format=jpeg&auto=webp"/>
                    <div className="sidebar_headerRight">
                    <IconButton > 
                      <DonutLargeIcon /> 
                      </IconButton > 
                      <IconButton>
                          <ChatIcon />
                      </IconButton>
                      <IconButton>
                          <MoreVertIcon />
                      </IconButton>
                    </div>
                </div>
                <div className="sidebar_search">
                    <div className="sidebar_serachContainer">
                       <SearchOutlined /> 
                       <input placeholder="search or start new chat" type="text"/>
                    </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>
        );
    }
}

export default Sidebar;
