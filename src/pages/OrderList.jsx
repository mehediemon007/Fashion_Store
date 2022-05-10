import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';

const OrderList = () => {

    const {orderId} = useParams();

    const {orders} = useSelector(state => state.orderInfo);

    const {products, totalPrice} = orders.find(order => order.orderId == orderId);


    return (
        <>
            <Header/>
            <main className="fs-main-content py-5">
                <div className="container">
                    <div className="order-details">
                        <div className="order-heading">
                            <div className="order-info">
                                <h4>Order Id: {orderId}</h4>
                                <div className="order-timeline-data">
                                    <p><b>Order date:</b> April 10, 2022</p>
                                    <p className='text-success'><b><i className="fa-solid fa-motorcycle"></i> Estimated Delivery:</b> April 20, 2022</p>
                                </div>
                            </div>
                            <Link to="track" className='cart-btn'>Track Order</Link>
                        </div>
                        <div className="ordered-products">
                            {products.map((product,index) =>(
                                <div className="single-product" key={index}>
                                    <div className="product-info d-flex align-items-center">
                                        <div className="product-image">
                                            <img src={`/images/products/${product.thumbnail}`} alt={product.alt} />
                                        </div>
                                        <div className="product-name ms-4">
                                            <h6>{product.name}</h6>
                                        </div>
                                    </div>
                                    <div className="product-meta-data">
                                        <p><b>&#2547;</b> {product.price * product.qty}</p>
                                        <p><b>Qty:</b> {product.qty}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-total text-end">
                            <p><b>Cart Subtotal:</b> <span>&#2547; {totalPrice}</span></p>
                            <p><b>Shipping:</b> <span>Free Shipping</span></p>
                            <p><b>Total:</b> <span>&#2547; {totalPrice}</span></p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OrderList