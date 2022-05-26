import React,{useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

const Checkout = () => {

    const [totalPrice, setTotal] = useState(0)

    const [shipAdrs, setAdrs] = useState({
        address:"",
        zip:"",
        city:""
    })

    const [cardData, setcrad] = useState({
        cardNum:"",
        cardDate:"",
        cardPin:""
    })

    const {cart} = useSelector(state => state.cart);

    useEffect(()=>{
        let totalPrice = 0;
        cart.forEach(item=> totalPrice+= item.qty * item.price);
        setTotal(totalPrice)
    },[cart])

    const handleCard = () =>{
        
    }

    const handleAddress = () =>{

    }
    
    const notify = () =>{
        toast.success("Order Placed!!!");
    }

    return (
        <>
            <Header/>
            <div className="fs-main-content sec-spacer-50">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="user-delivery-data">
                                <div className="fs-payments">
                                    <h5>Payment Methods</h5>
                                    <div className="payments pt-0">
                                        <label htmlFor="paypal"><input type="radio" id="paypal" defaultChecked name='payment'/> <img src="/images/paypal.png" alt="paypal" /></label>
                                        <div className="pay-cards">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label htmlFor="card"><input type="radio" id="card" name='payment'/> Credit Crads/ Debit Cards</label>
                                                <img src="/images/cards.png" alt="cards" />
                                            </div>
                                            <form action="" className='card-form' onSubmit={handleCard}>
                                                <div className="single-input position-relative mb-3">
                                                    <label htmlFor="card-num">Card Number</label>
                                                    <input type="number" id='card-num' placeholder='0000 0000 0000 00XX' name='cardNum'/>
                                                    <i className="fa-solid fa-credit-card"></i>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="single-input position-relative mb-3">
                                                            <label htmlFor="card-date">Expire Date</label>
                                                            <input type="date" id='card-date' name='cardDate'/>
                                                            <i className="fa-solid fa-calendar"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="single-input position-relative mb-3">
                                                            <label htmlFor="card-pin">CVC/CVV</label>
                                                            <input type="password" id='card-pin' placeholder='....' name='cardPin'/>
                                                            <i className="fa-solid fa-lock"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="fs-payments mt-40">
                                    <h5>Delivery Address</h5>
                                    <div className="address">
                                        <form action="" className='address-form' onSubmit={handleAddress}>
                                            <div className="single-input position-relative mb-3">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" id='address' placeholder='Enter Address' name='address'/>
                                                <i className="fa-solid fa-address-card"></i>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="single-input position-relative mb-3">
                                                        <label htmlFor="zip">Zip/Postal</label>
                                                        <input type="number" id='zip' placeholder='Zip/Postal' name='zip'/>
                                                        <i className="fa-solid fa-envelope"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="single-input position-relative mb-3">
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" id='city' placeholder='City' name='city'/>
                                                        <i className="fa-solid fa-city"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="order-summery">
                                <h5>Summery</h5>
                                <div className="order-total">
                                   <p><b>Product Total({cart.length})</b><span>&#2547; {totalPrice}</span></p> 
                                   <p><b>Discount</b><span>&#2547; 0.00</span></p> 
                                   <p><b>Shipping Charge</b><span>Free </span></p>
                                   <p><b>Total</b><span>&#2547; {totalPrice}</span></p>  
                                </div>
                                <Link to="/" className='cart-btn mt-3 ms-0' onClick={notify}>Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Checkout