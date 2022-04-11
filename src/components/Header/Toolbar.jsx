import React from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Toolbar = () => {
    return (
        <>
            <div className="fs-toolbar">
                <div className="container">
                    <div className="toolbar-wpr">
                        <a href="mailto:fashionstore@gmail.com" className='tool-link'><i className="fa-solid fa-paper-plane"></i> fashionstore@gmail.com</a>
                        <Link to="/" className='tool-link'>Download App</Link>
                        <Link to="/" className='tool-link'>Merchant Zone</Link>
                        <Link to="/" className='tool-link'>Upload&order</Link>
                        <Link to="/" className='tool-link'>Track order</Link>
                        <Link to="/" className='tool-link'>Live Chat</Link>
                        <a href="tel:01890234576" className='tool-link'><i className="fa-solid fa-phone"></i> 16731</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolbar