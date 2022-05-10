import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';

const OrderList = () => {

    const [totalPrice, setTotal] = useState(0)

    const {cart: orderProducts} = useSelector(state => state.cart);

    useEffect(()=>{
        let totalPrice = 0;
        orderProducts.forEach(item=> totalPrice+= item.qty * item.price);
        setTotal(totalPrice)
    },[orderProducts])
    return (
        <>
            <Header/>
            <main className="fs-main-content py-5">
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