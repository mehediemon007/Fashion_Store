import React,{useState, createRef, useEffect} from 'react';
import ChatItem from './ChatItem';
import Avatar from './Avatar';

const ChatContent = () => {

    const messagesEndRef = createRef(null);

    let chatItms = [
        {
          key: 1,
          image:
            "customer.png",
          type: "",
          msg: "Hi Tim, How are you?",
        },
        {
          key: 2,
          image:
            "seller.jpg",
          type: "other",
          msg: "I am fine.",
        },
        {
          key: 3,
          image:
            "seller.jpg",
          type: "other",
          msg: "What about you?",
        },
        {
          key: 4,
          image:
            "customer.png",
          type: "",
          msg: "Awesome these days.",
        },
        {
          key: 5,
          image:
            "seller.jpg",
          type: "other",
          msg: "Finally. What's the plan?",
        },
        {
          key: 6,
          image:
            "customer.png",
          type: "",
          msg: "what plan mate?",
        },
        {
          key: 7,
          image:
            "seller.jpg",
          type: "other",
          msg: "I'm taliking about the tutorial",
        },
    ];

    const [chatMsgs, setChatMsgs] = useState({
        chats: chatItms,
        msg:""
    })

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(()=>{

        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 13) {
              if (chatMsgs.msg != "") {
                chatItms.push({
                  key: 1,
                  type: "",
                  msg: chatMsgs.msg,
                  image:
                    "customer.png",
                });
                setChatMsgs({ ...chatMsgs, chats: [...chatItms] });
                scrollToBottom();
                setChatMsgs({ ...chatMsgs, msg: "" });
              }
            }
          });
          scrollToBottom();

    },[chatMsgs])

    const onStateChange = (e) => {
        setChatMsgs({ ...chatMsgs, msg: e.target.value });
      };


    return (
        <>
            <div className="main-chatcontent">
                <div className="content-header">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <Avatar isOnline="active" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"/>
                            <p>Hasan Masud</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="settings">
                        <button className="btn-nobg">
                            <i className="fa fa-cog"></i>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="chat-items">
                        {chatMsgs.chats.map((itm, index) => {
                            return (
                                <ChatItem animationDelay={index + 2} key={itm.key} user={itm.type ? itm.type : "me"} msg={itm.msg} image={itm.image}/>
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="content-footer">
                    <div className="sendNewMessage">
                        <button className="addFiles"><i className="fa fa-plus"></i></button>
                        <input type="text" placeholder="Type a message here" onChange={onStateChange} value={chatMsgs.msg}/>
                        <button className="btnSendMsg" id="sendMsgBtn"><i className="fa fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatContent;