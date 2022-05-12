import React from 'react';
import ChatContent from '../components/Chatbox/ChatContent';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';

const SellerChat = () => {
    return (
        <>
            <Header/>
            <div className="fs-main-conternt">
                <div className="container">
                    <div className="fs-chatbox">
                        <ChatContent/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SellerChat;