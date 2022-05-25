import React,{useState} from 'react';
import Header from "../components/Header/Header"
import Footer from "../footer/Footer";
import { useNavigate } from 'react-router-dom';

const OTP = () => {

    let navigate = useNavigate();

    const [otp,setOtp] = useState(new Array(5).fill(""))

    const handleChange = (element ,index) => {

        if(isNaN(element.value)) return false

        setOtp([...otp.map((d,idx)=>(idx === index) ? element.value : d )])

        if(element.nextSibling){
            element.nextSibling.focus();
        }

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/new-pass")
    }

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className='sign-form-wpr'>
                        <div className="sign-form">
                            <div className="otp-source text-center">
                                <h5 className='mb-2'>Enter OTP</h5>
                                <span>Email/Phone</span>
                            </div>
                            <form className="otp-with-mail" onSubmit={(e)=> handleSubmit(e)}>
                                <div className="otp-number py-3 p-sm-4">
                                    {otp.map((data,index)=>(
                                        <input key={index} type="text" maxLength="1" name="otp" value={data} onChange={(e)=> handleChange(e.target,index)} onFocus={(e)=> e.target.select()}/>
                                    ))}
                                </div>
                                <button type='submit' className='sign-btn mt-0' onClick={(e)=> handleSubmit(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OTP