import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const OrderTrack = () => {

    const {orderId} = useParams();

    const {orders} = useSelector(state => state.orderInfo);

    const {products, totalPrice} = orders.find(order => order.orderId == orderId);

    
    useEffect(()=>{

    },[])

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-order-track">
                        <div className="order-data">
                            <div className="order-product">
                                <div className="product-image">
                                    <img src={`/images/products/${products[0].thumbnail}`} alt={products[0].name} />
                                </div>
                                <div className="product-details">
                                    <div>
                                        <p>Order:</p>
                                        <h5>{orderId}</h5>
                                        <p>Sold by: Labib Mahmud</p>
                                    </div>
                                    <div>
                                        <p>Total Price</p>
                                        <h5>&#2547; {totalPrice}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="shipping-adrs">
                                <div className="address">
                                    <h5>Mehedi Hasan Emon</h5>
                                    <p>House 51/C, Road 13/B, Uttara-3 Dhaka.</p>
                                </div>
                                <div className="arrive-date">
                                    <p>Arrive On:</p>
                                    <h5>28 April, 2022</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OrderTrack