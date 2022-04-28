import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ProductSlider from '../Products/ProductSlider';

const QuickViewModal = ({product, modal:{modal,setModal}}) => {
    
    const [productQty,setQty] = useState(1);

    useEffect(()=>{

    },[product])

    return (
        <>
            <div className={`fs-quick-view ${modal ? 'show' : ''} `}>
                <div className="quick-view-container">
                    <span className='modal-close' onClick={()=> setModal(false)}><i class="fa-solid fa-xmark"></i></span>
                    <div className="fs-product-details my-5">
                        <div className="row">
                            <div className="col-6">
                                <ProductSlider images={product.images}/>
                            </div>
                            <div className="col-6">
                                <div className="product-content py-4">
                                    <h3 className='mb-3'>{product.name}</h3>
                                    <div className="brand d-flex justify-content-between">
                                        <p>Brands:Zara</p>
                                        <div className="product-ratings">
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star"></i></span>
                                            <span><i className="fa-solid fa-star-half-stroke"></i></span>
                                            <p className='d-inline-block'>(22 Reviews)</p>
                                        </div>
                                    </div>
                                    <p className='price'>&#2547; {product.price - ( product.price * product.discount ) / 100 } {product.discount > 0 && <del>&#2547; {product.price}</del>}</p>
                                    <p>{product.des}</p>
                                    <ul className="meta-data my-4">
                                        <li><i className="fa-solid fa-crown"></i> <span>1 Year AL Jazeera Brand Warranty</span></li>
                                        <li><i className="fa-solid fa-arrows-rotate"></i> <span>30 Day Return Policy</span></li>
                                        <li><i className="fa-solid fa-credit-card"></i> <span>Cash on Delivery available</span></li>
                                    </ul>
                                    <div className="color-filter my-3">
                                        <h6 className='mb-2'>Color</h6>
                                        <ul>
                                            <li><input type="checkbox" className='bg-primary'/></li>
                                            <li><input type="checkbox" className='bg-danger'/></li>
                                            <li><input type="checkbox" className='bg-success'/></li>
                                            <li><input type="checkbox" className='bg-dark'/></li>
                                        </ul>
                                    </div>
                                    <div className="size-filter">
                                        <h6 className='mb-2'>Size</h6>
                                        <ul>
                                            <li><label><input type="checkbox"/><span>All</span></label></li>
                                            <li><label><input type="checkbox"/><span>S</span></label></li>
                                            <li><label><input type="checkbox"/><span>M</span></label></li>
                                            <li><label><input type="checkbox"/><span>L</span></label></li>
                                            <li><label><input type="checkbox"/><span>XL</span></label></li>
                                            <li><label><input type="checkbox"/><span>XXL</span></label></li>
                                        </ul>
                                    </div>
                                    <div className='my-4'>
                                        <span className="product-quantity">{productQty}<Link to="#" className='qty-btn inc-btn' onClick={()=> setQty(productQty + 1)}><i className="fa-solid fa-angle-up"></i></Link><Link to="#" className='qty-btn dec-btn' onClick={()=>{(productQty == 1) ? setQty(1) : setQty(productQty - 1)}}><i className="fa-solid fa-angle-down"></i></Link></span>
                                        <Link to="#" className='cart-btn'>Add To Cart</Link>
                                    </div>
                                    <p>Availability : <span style={{color:'MediumSeaGreen'}}>Items In Stock</span></p>
                                    <div className='product-share mt-4'>
                                        <span>Share this :</span>
                                        <Link to=""><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                                        <Link to=""><i className="fa-brands fa-twitter"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickViewModal;