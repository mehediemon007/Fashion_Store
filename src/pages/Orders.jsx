import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';

const Orders = () => {
    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="row">
                        <div className="single-order">
                            <Link to='/orders/order-list'>Order 1</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Orders