import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="fs-newsletter">
                <div className="container">
                    <div className="news-head d-flex">
                        <i><i class="fa-solid fa-paper-plane"></i></i>
                        <div>
                            <h4>Signup for Newsletter</h4>
                            <p>We’ll never share your email address with a third-party</p>
                        </div>
                    </div>
                    <form action="" className='subs-form position-relative'>
                        <input type="email" placeholder='Enter your mail' />
                        <button type='submit' className='subs-btn'>Subscribe</button>
                    </form>
                    <div className="social-links">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i> Facebook</a>
                        <a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a>
                        <a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a>
                        <a href="#"><i class="fa-brands fa-pinterest-p"></i> Pinterest</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;