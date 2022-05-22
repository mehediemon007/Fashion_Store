import React from 'react'
import Newsletter from './Newsletter';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <Newsletter/>
            <div className="fs-footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-between">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget footer-about">
                                <Link to="/"><h4 className='mb-4'>Fashion Store</h4></Link>
                                <ul className="contact-list">
                                    <li><i className="fa-solid fa-map-location"></i> <span>San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SPL, Mexico</span></li>
                                    <li><i className="fa-solid fa-headset"></i> <a href='tel:019893234567'>+880-19893234567</a></li>
                                    <li><i className="fa-solid fa-envelope"></i> <a href='mailto:Contact@Wpthemego.Com'>Contact@Wpthemego.Com</a></li>
                                    <li><i className="fa-solid fa-clock-rotate-left"></i> <span>San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SPL, Mexico</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget customer-care">
                                <h5>Customer Care</h5>
                                <ul className="footer-list">
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">F.A.Q</Link></li>
                                    <li><Link to="/">Help Center</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget footer-category">
                                <h5>Categories</h5>
                                <ul className="footer-list">
                                    <li><Link to="/">Online Shopping</Link></li>
                                    <li><Link to="/">My Orders</Link></li>
                                    <li><Link to="/">Policy</Link></li>
                                    <li><Link to="/">Returns</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget footer-gallery">
                                <h5>Gallery</h5>
                                <div className="insta-links">
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                    <Link to=""><img src="/images/category/men-insta.jpg" alt='insta' /></Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-mid">
                    <div className="container">
                        <Link to="/"><img src="/images/category/payment.png" alt='payemnt'/></Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row text-sm-center">
                            <p className='text-white'>©2022 React Theme Fashion Shop. All Rights Reserved by <Link to="/" className='text-white'>Akaarit Ltd.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;