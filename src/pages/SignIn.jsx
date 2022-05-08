import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';

const SignIn = () => {
    return (
        <>
            <Header/>
            <main className='fs-main-content'>
                <div className="container">
                    <h3 className='text-center'>Sign In</h3>
                    <div className="sign-form">
                        <form action="">
                            <div className="single-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' placeholder='E-mail Address'/>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="single-input position-relative">
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
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SignIn;