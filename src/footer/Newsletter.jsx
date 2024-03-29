import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="fs-newsletter">
                <div className="container">
                    <div className="news-head d-flex">
                        <i><i className="fa-solid fa-paper-plane"></i></i>
                        <div>
                            <h4>Signup for Newsletter</h4>
                            <p>We’ll never share your email address with a third-party</p>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className="col-md-6">
                            <form action="" className='subs-form position-relative'>
                                <input type="email" placeholder='Enter your mail' />
                                <button type='submit' className='subs-btn'>Subscribe</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="social-links">
                                <a href="https://www.facebook.com/" className='ms-0'><i className="fa-brands fa-facebook-f"></i> Facebook</a>
                                <a href="https://www.instagram.com/web/lite/"><i className="fa-brands fa-instagram"></i> Instagram</a>
                                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i> Twitter</a>
                                <a href="https://policy.pinterest.com/en/terms-of-service"><i className="fa-brands fa-pinterest-p"></i> Pinterest</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;