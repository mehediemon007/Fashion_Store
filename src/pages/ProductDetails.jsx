import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';
import ProductSlider from '../components/Products/ProductSlider';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductDetails = () => {

    const {product_id} = useParams();

    const product = data.products.find(product => product.id == product_id)

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
                                <div className="product-content">
                                    <h5>{product.name}</h5>
                                    <p className='price'>&#2547; {product.price - ( product.price * product.discount ) / 100 } {product.discount > 0 && <del>&#2547; {product.price}</del>}</p>
                                    <p>{product.des}</p>
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

export default ProductDetails;