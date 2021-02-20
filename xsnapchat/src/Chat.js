import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"


function Chat() {
    return (
        <div class="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon/>
                    <input placeholder="Friends" type="text"/>
                    <ChatBubbleIcon className="chats__chatsIcons" />
                </div>
                <div className="chat__posts">
                    
                </div>
            </div>
           
        </div>
    )
}

export default Chat
