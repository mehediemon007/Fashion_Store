import React,{useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../footer/Footer";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authInfo } from '../redux/actions';

const ForgetPass = () => {

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
        // dispatch(authInfo(authData));
        navigate("/otp")
    }

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <h3 className='sign-head'>Forget Password</h3>
                    <div className='sign-form-wpr'>
                        <div className="sign-form">
                            <form action="">
                                <div className="single-input position-relative mb-3">
                                    <label htmlFor="email">Email/Phone</label>
                                    <input className='px-3' type="text" id='email' placeholder='Enter Your Email/Phone' value={authData.mail} onChange={(e) => inputChange(e)} name='mail'/>
                                </div>
                                <button type='submit' className='sign-btn' onClick={(e)=> handleSignUp(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default ForgetPass