import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { authInfo } from '../redux/actions';

const SignUp = () => {

    const dispatch = useDispatch();

    const [authData, setAuthDate] = useState({
        "fullName":"",
        "mail":"",
        "password":"",
        "rePassword":""
    })

    const inputChange = (e) =>{
        setAuthDate({
            ...authData,
            [e.target.name] : e.target.value
        })
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
        dispatch(authInfo(authData));
        setAuthDate({
            "fullName":"",
            "mail":"",
            "password":"",
            "rePassword":""
        })
    }

    return (
        <>
            <Header/>
            <main className='fs-main-content py-4'>
                <div className="container">
                    <h3 className='sign-head'>Sign Up</h3>
                    <div className='sign-form-wpr'>
                        <div className="sign-form">
                            <div className="social-sign-links">
                                <a href="https://www.facebook.com/" className='social-sign'><i className="fa-brands fa-facebook"></i> Sign Up With Facebook</a>
                                <a href="https://www.facebook.com/" className='social-sign gmail-sign'><i className="fa-brands fa-google-plus-square"></i> Sign Up With Gmail</a>
                                <p> <span>........</span> Or, <Link to="/">sign up</Link> with your email<span> ........</span> </p>
                            </div>
                            <form action="">
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id='name' placeholder='Full Name' value={authData.fullName} onChange={(e) => inputChange(e)} name='fullName'/>
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' placeholder='E-mail Address' value={authData.mail} onChange={(e) => inputChange(e)} name='mail'/>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' placeholder='Password' value={authData.password} onChange={(e) => inputChange(e)} name='password'/>
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="re-password">Re-Password</label>
                                    <input type="password" id='re-password' placeholder='Re-Password' value={authData.rePassword} onChange={(e) => inputChange(e)} name='rePassword'/>
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="sign-action">
                                    <div className="signed-in d-flex align-items-center">
                                        <input type="checkbox" id='signedIn'/>
                                        <label htmlFor="sigedIn">I agree to the <a href="#">Terms And Conditions</a></label>
                                    </div>
                                </div>
                                <button type='submit' className='sign-btn' onClick={(e)=> handleSignUp(e)}>Sign Up</button>
                                <p className='text-center'>Already Member? <Link to="/sign-in">Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SignUp