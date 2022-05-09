import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';

const SignIn = () => {
    return (
        <>
            <Header/>
            <main className='fs-main-content py-4'>
                <div className="container">
                    <h3 className='sign-head'>Sign In</h3>
                    <div className='sign-form-wpr'>
                        <div className="sign-form">
                            <div className="social-sign-links">
                                <a href="https://www.facebook.com/" className='social-sign'><i class="fa-brands fa-facebook"></i> Sign In With Facebook</a>
                                <a href="https://www.facebook.com/" className='social-sign gmail-sign'><i class="fa-brands fa-google-plus-square"></i> Sign In With Gmail</a>
                                <p> <span>........</span> Or, <Link to="/">sign in</Link> with your email<span> ........</span> </p>
                            </div>
                            <form action="">
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' placeholder='E-mail Address'/>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' placeholder='Password'/>
                                    <i class="fa-solid fa-lock"></i>
                                </div>
                                <div className="sign-action">
                                    <div className="signed-in">
                                        <input type="checkbox" id='signedIn'/>
                                        <label htmlFor="sigedIn">Keep Me Signed In</label>
                                    </div>
                                    <Link to="/">Foregt Password?</Link>
                                </div>
                                <button type='submit' className='sign-btn'>Sign In</button>
                                <p className='text-center'>New Member? <Link to="/sign-up">Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SignIn;