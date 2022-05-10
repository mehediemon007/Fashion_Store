import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderTrack = () => {

    const {orderId} = useParams();

    const {orders} = useSelector(state => state.orderInfo);

    const {products, totalPrice} = orders.find(order => order.orderId == orderId);

    console.log(products[0])


    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-order-track">
                        {/* <h1>{name}</h1>
                        <img src={`/images/products/${thumbnail}`} alt={alt} /> */}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default OrderTrack