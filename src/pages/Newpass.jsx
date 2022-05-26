import React,{useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../footer/Footer";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePass } from '../redux/actions';
import {toast} from 'react-toastify';

const Newpass = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [authData, setAuthDate] = useState({
        "mail":"",
        "password":"",
    })

    const inputChange = (e) =>{
        setAuthDate({
            ...authData,
            [e.target.name] : e.target.value
        })
    }

    const handleSignUp = (e) =>{
        e.preventDefault();
        dispatch(changePass(authData.password));
        notify("Password Change!")
        navigate("/")
    }

    const notify = (msg) =>{
        toast.success(msg);
    }

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className='sign-form-wpr'>
                        <div className="sign-form">
                            <h4 className='sign-head mb-2'>Change Password</h4>
                            <form action="">
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' placeholder='Enter Password' value={authData.password} onChange={(e) => inputChange(e)} name='password'/>
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="re-password">Re-Password</label>
                                    <input type="password" id='re-password' placeholder='Enter Re-password' onChange={(e) => inputChange(e)} name='password'/>
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <button type='submit' className='sign-btn' onClick={(e)=> handleSignUp(e)}>Change</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Newpass