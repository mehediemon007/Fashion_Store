import React,{useState,useEffect} from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incQty, decQty, removeFromCart, placeOrder} from '../redux/actions';

const ShopCart = () => {

    const [totalPrice, setTotal] = useState(0)

    let dispatch = useDispatch()

    const {cart} = useSelector(state => state.cart);

    useEffect(()=>{
        let totalPrice = 0;
        cart.forEach(item=> totalPrice+= item.qty * item.price);
        setTotal(totalPrice)
    },[cart])
    
    return (
        <>
            <Header/>

            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-shopcart sec-spacer-50">
                        <div className="cart-products mb-50">
                            <h4 className='mb-3'>Cart Products</h4>
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
                        <div className="order-totals">
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="shipping">
                                        <h4>Calculate Shipping</h4>
                                        <p className='flat-rate my-3'>Flat Rate: <b>5%</b></p>
                                        <form action="" className='shipping-info'>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" placeholder='City' />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder='Postal Code / Zip' />
                                                </div>
                                            </div>
                                            <button type='submit' className='cart-btn ms-0'><i className="fa-solid fa-shuffle"></i> Update</button>
                                        </form>
                                    </div>
                                    <div className="shop-coupon">
                                        <h4 className='my-3'>Apply Coupon</h4>
                                        <form action="" className='subs-form position-relative'>
                                            <input type="email" placeholder='Enter your coupon' />
                                            <button type='submit' className='subs-btn'>Apply</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 offset-lg-1">
                                    <div className="shopcart-total">
                                        <h4 className='mb-4'>Cart Totals</h4>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td className="cart_total_label">Cart Subtotal</td>
                                                    <td className="cart_total_amount"><span className="font-lg fw-900 text-brand">&#2547; {totalPrice}</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">Shipping</td>
                                                    <td className="cart_total_amount"><i className="ti-gift mr-5"></i>Free Shipping</td>
                                                </tr>
                                                <tr>
                                                    <td className="cart_total_label">Total</td>
                                                    <td className="cart_total_amount"><strong><span className="font-xl fw-900 text-brand">&#2547; {totalPrice}</span></strong></td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="text-end mt-3">
                                        {cart.length > 0 && <div className='text-end'>
                                            <Link to="/" className='cart-btn mb-2 mb-lg-0'><i className="fa-solid fa-bag-shopping"></i> Continue Shopping</Link>
                                            <Link to="/checkout" className='cart-btn' onClick={()=> dispatch(placeOrder(cart,totalPrice))}><i className="fa-solid fa-credit-card"></i> Checkout</Link>
                                        </div>}
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

export default ShopCart