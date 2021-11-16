import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'


function SidebarChat({name,chatID}) {
    return (
        <Link to={`/rooms/${chatID}`}>
            <div className="sidebarChat">
                <Avatar src=""/>
                <div className="sidebarChat_info">
                    <p>{name}</p>
                    {/* <p>last message</p> */}
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat
