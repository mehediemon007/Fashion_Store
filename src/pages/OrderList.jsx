import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';

const OrderList = () => {

    const {cart: orderProducts} = useSelector(state => state.cart);

    useEffect(()=>{

    },[])

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="order-details">
                        <div className="order-heading">
                            <div className="order-info">
                                <h4>Order Id: #799Er45t</h4>
                                <div className="order-timeline-data">
                                    <p><b>Order date:</b> April 10, 2022</p>
                                    <p className='text-success'><b><i className="fa-solid fa-motorcycle"></i> Estimated Delivery:</b> April 20, 2022</p>
                                </div>
                            </div>
                            <Link to="/" className='cart-btn'>Track Order</Link>
                        </div>
                        <div className="ordered-products">
                            {orderProducts.map((product,index) =>(
                                <div className="single-product" key={index}>
                                    <div className="product-info d-flex align-items-center">
                                        <div className="product-image">
                                            <img src={`images/products/${product.thumbnail}`} alt={product.alt} />
                                        </div>
                                        <div className="product-name ms-4">
                                            <h6>{product.name}</h6>
                                        </div>
                                    </div>
                                    <div className="product-meta-data">
                                        <b>{product.price * product.qty}</b>
                                        <p><b>Qty:</b> {product.qty}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OrderList