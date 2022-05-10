import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useSelector } from 'react-redux';

const Orders = () => {

    const {orders} = useSelector(state => state.orderInfo);

    console.log(orders)

    return (
        <>
            <Header/>
            <main className="fs-main-content py-5">
                <div className="container">
                    <div className="row">
                        <div className="fs-orders">
                            <h4 className='mb-3'>My Orders</h4>
                            {orders.map((order,index)=>(
                                <Link to="/orders/order-list" key={index}>
                                    <div className="single-order">
                                        <div className="order-info">
                                            <div className="order-image">
                                                <img src={`/images/products/${order.products[0].thumbnail}`} alt={order.products[0].alt} />
                                            </div>
                                            <div className="order-data">
                                                <h5>{order.orderId}</h5>
                                                <p>Order Date: April 10, 2011</p>
                                            </div>
                                        </div>
                                        <div className="order-meta-data">
                                            <h6>&#2547; {order.totalPrice}</h6>
                                            <p className='order-sts'>{order.status}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Orders