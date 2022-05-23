import React from 'react'

const SubscribeModal = (props) => {

    const {showModal, setShow} = props.subsModal;

    return (

        <>
            <div className={`login-popup ${showModal ? "show" : ""}`}>
                <div className="box">
                    <div className="img-area">
                        <div className="img"></div>
                    </div>
                    <div className="form">
                        <div className="close" onClick={()=> setShow(false)}>&times;</div>
                        <h3>Subscribe</h3>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Enter your email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label><input type="checkbox"/>
                                    <span className='ms-2'>Remember Me</span>
                                </label>
                            </div>
                            <button type="button" className="btn">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscribeModal