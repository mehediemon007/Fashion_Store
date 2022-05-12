import React from 'react';
import Avatar from './Avatar';

const ChatItem = (props) => {
    return (
        <>
            <div className={`chat-item ${props.user ? props.user : ""}`} style={{ animationDelay: `0.8s` }}>
                <div className="chat-item-content">
                    <div className="chat-msg">{props.msg}</div>
                    <div className="chat-meta">
                        <span>16 mins ago</span>
                        <span>Seen 1.03PM</span>
                    </div>
                </div>
                <Avatar isOnline="active" image={`/images/${props.image}`} />
            </div>
        </>
    )
}

export default ChatItem;