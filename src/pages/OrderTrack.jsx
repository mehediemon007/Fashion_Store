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
            <main className="fs-main-content my-5">
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
                        <div className="order-track-sts">
                            <div className="track">
                                <div className="step">
                                    <div className="passed">
                                        <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span>
                                    </div> 
                                </div>
                                <div className="step">
                                    <div className="passed">
                                        <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="active">
                                        <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span>
                                        <div className="step-details">
                                            <div className='heading'>
                                                <i class="fa-solid fa-truck"></i>
                                                <h5>20 April, 2022</h5>
                                            </div>
                                            <p>Packeage arrived at the delivery station Uttara at 12.00 Pm , April 21, 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="">
                                        <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span>
                                    </div>
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