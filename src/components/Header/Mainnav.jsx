import React from 'react';
import {Link} from "react-router-dom"

const Mainnav = () => {
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
                                <div className='nav-icon'><Link to="#"><i className="fa-solid fa-bolt-lightning"></i></Link></div>
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
                                                <li className="cart-product-item">
                                                    <div className="cart-product-image">
                                                        <div className="product-inner">
                                                            <a href="#" className="product-remove">&#xd7;</a>
                                                            <img src="images/products/i-phone-sm.jpg" alt="I-phone"/>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product-details">
                                                        <a href="product-details.html">I-phone 10</a>
                                                        <div className="cart-product-quantity">
                                                            <span>1 x </span>
                                                            <span>$259</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-product-item">
                                                    <div className="cart-product-image">
                                                        <div className="product-inner">
                                                            <a href="#" className="product-remove">&#xd7;</a>
                                                            <img src="images/products/travel-bag-sm.jpg" alt="Travel Bag"/>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product-details">
                                                        <a href="product-details.html">Sun Glass</a>
                                                        <div className="cart-product-quantity">
                                                            <span>1 x </span>
                                                            <span>$259</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="cart-product-item">
                                                    <div className="cart-product-image">
                                                        <div className="product-inner">
                                                            <a href="#" className="product-remove">&#xd7;</a>
                                                            <img src="images/products/ladies-bag-sm.jpg" alt="Ladies Bag"/>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product-details">
                                                        <a href="product-details.html">Ladies Bag</a>
                                                        <div className="cart-product-quantity">
                                                            <span>1 x </span>
                                                            <span>$259</span>
                                                        </div>
                                                    </div>
                                                </li>
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
                                    <i><i class="fa-solid fa-user"></i></i> My Account
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