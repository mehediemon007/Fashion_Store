import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'

const Mainnav = () => {

    const {cart} = useSelector(state => state.cart)

    return (
        <>
            <div className="fs-main-nav">
                <div className="container">
                    <div className="main-nav">
                        <div className="auto">
                            <div className="fs-logo d-flex align-items-center">
                                <span className="nav-toggle"><i className="fas fa-bars"></i></span>
                                <Link to="/"><h2 className='logo'>Fashion Store</h2></Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="nav-middle">
                                <form className="nav-search">
                                    <fieldset className="nav-search-input">
                                        <label htmlFor="nav-search" className="visually-hidden">Search Product</label>
                                        <input type="text" id="nav-search" placeholder="Search for anything"/>
                                    </fieldset>
                                    <button type="submit" className="nav-search-btn"><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="nav-right d-flex justify-content-between align-items-center">
                                <div className='nav-icon'><Link to="#"><span className='count'>0</span><i className="fa-solid fa-shuffle"></i></Link></div>
                                <div className='nav-icon'><Link to="#"><span className='count'>0</span><i className="fas fa-heart"></i></Link></div>
                                <div className="nav-cart shopping-cart nav-icon">
                                    <span className='count'>0</span>
                                    <i className="fas fa-shopping-cart"></i>
                                    <div className="shopping-cart-popup">
                                        <div className="shopping-cart-popup-content">
                                            <div className="total-item">
                                                <span className="product-count">3 ITEMS</span>
                                                <a href="shop-cart.html" className="view-cart">VIEW CART</a>
                                            </div>
                                            <ul className="cart-product-list">
                                                {cart.map(item=>(
                                                    <li className="cart-product-item">
                                                        <div className="cart-product-image">
                                                            <div className="product-inner">
                                                                <span href="#" className="product-remove">&#xd7;</span>
                                                                <img src={`/images/products/${item.thumbnail}`} alt={item.alt}/>
                                                            </div>
                                                        </div>
                                                        <div className="cart-product-details">
                                                            <Link to={`/product_details/${item.id}`}>{item.name}</Link>
                                                            <div className="cart-product-quantity">
                                                                <span>{item.qty} x </span>
                                                                <span>${item.price}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="sub-total">
                                                <span>SUB-TOTAL</span>
                                                <span>$1000</span>
                                            </div>
                                            <a href="shop-cart.html" className="chechout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-user">
                                    <i><i className="fa-solid fa-user"></i></i> My Account
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainnav