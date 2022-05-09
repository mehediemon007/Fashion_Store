import React,{useState, useEffect} from 'react'
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data/data';
import ProductSlider from '../components/Products/ProductSlider';
import { Tabs, Tab } from "react-bootstrap";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from "../redux/actions";
import AdditionalInfo from '../components/Tabs/AdditionalInfo';
import Reviews from '../components/Tabs/Reviews';
import ProductDescription from '../components/Tabs/ProductDescription';
import RelatedProducts from '../components/Products/RelatedProducts';

const ProductDetails = () => {

    let dispatch = useDispatch();

    const {cart} = useSelector(state => state.cart);

    const {product_id} = useParams();

    const product = data.products.find(product => product.id == product_id);

    const [productQty,setQty] = useState(1)

    const [key, setKey] = useState("description");

    useEffect(()=>{

        const cartProduct = cart.find(product => product.id == product_id);

        if(cartProduct != null){
            
            setQty(cartProduct.qty)
        }

    },[])


    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-product-details my-5">
                        <div className="row">
                            <div className="col-5">
                                <ProductSlider images={product.images}/>
                            </div>
                            <div className="col-7">
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
                                        <Link to="#" className='cart-btn' onClick={()=>dispatch(addToCart(product,productQty))}>Add To Cart</Link>
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
                    <div className="fs-product-description mb-50">
                        <Tabs className="tabs product-tab-links" id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                            <Tab eventKey="description" title="DESCRIPTION" className='news-tab-content'>
                                <ProductDescription/>
                            </Tab>
                            <Tab eventKey="info" title="ADDITIONAL INFO" className='info-tab-content'>
                                <AdditionalInfo/>
                            </Tab>
                            <Tab eventKey="reviews" title="REVIEWS (3)" className='review-tab-content'>
                                <Reviews/>
                            </Tab>
                        </Tabs>
                    </div>
                    <RelatedProducts/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default ProductDetails;