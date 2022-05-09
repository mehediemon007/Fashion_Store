import React,{useState} from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incQty, decQty, removeFromCart} from '../redux/actions';

const ShopCart = () => {

    let dispatch = useDispatch()

    const {cart} = useSelector(state => state.cart);

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-wishlist sec-spacer-50">
                        <h4 className='mb-3'>Wishlist Products</h4>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered wishlist-table">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Sub-total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item,index)=> (
                                                <tr key={index}>
                                                    <td colSpan={2}>
                                                        <div className="wish-product">
                                                            <div className="product-image">
                                                                <img src={`images/products/${item.thumbnail}`} alt={item.alt} />
                                                            </div>
                                                            <div className="product-name">
                                                                <p>{item.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>&#2547; {item.price}</td>
                                                    <td><span className="product-quantity text-start">{item.qty}<Link to="#" className='qty-btn inc-btn' onClick={()=> dispatch(incQty(item.id))}><i className="fa-solid fa-angle-up"></i></Link><Link to="#" className='qty-btn dec-btn' onClick={()=>{(item.qty ==1 ) ? void(0) : dispatch(decQty(item.id))}}><i className="fa-solid fa-angle-down"></i></Link></span></td>
                                                    <td>&#2547; {item.qty * item.price} </td>
                                                    <td><span className='del-wishlist' onClick={()=> dispatch(removeFromCart(item.id))}><i className="fa-solid fa-trash-can"></i></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default ShopCart