import React,{useEffect, useState} from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderTrack = () => {

    // const [orderProducts, setOrderProduct] = useState({
    //     product:{},
    //     totalPrice:""
    // })

    const {orderId} = useParams();

    const {orders} = useSelector(state => state.orderInfo);

    let {products, totalPrice} = orders.find(order => order.orderId == orderId);
    
    // useEffect(()=>{

    //     let {products, totalPrice} = orders.find(order => order.orderId == orderId);
    //     setOrderProduct({
    //         ...orderProducts,
    //         product: products[0],
    //         totalPrice
    //     })

    // },[])



    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-order-track">
                        <div className="order-data">
                            <div className="order-product">
                                <div className="product-image">
                                    {/* <img src={`/images/products/${orderProducts.product.thumbnail}`} alt={orderProducts.product.alt}/> */}
                                    <img src={`/images/products/${products[0].thumbnail}`} alt={products[0].alt}/>
                                </div>
                                <div className="product-details d-flex flex-column justify-content-between">
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
                            <div className="shipping-adrs d-flex flex-column justify-content-between">
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