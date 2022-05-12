import React, {useState} from 'react';
import {data} from "../../data/data";
import SingleFeatureProduct from './SingleFeatureProduct';
import Slider from "react-slick";
import QuickViewModal from '../widgets/QuickViewModal';

    const FeatureProducts = () => {

        const [modal,setModal] = useState(false);
        const [viewProduct , setProduct] = useState(null);

        const {products} = data;

        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: "0px",
            swipe: false
        };

        return (
            <>
                <div className="fs-feature-products">
                    <div className="container">
                        <div className="sec-heading text-center">
                            <h3 className='mb-2'>Featured Products</h3>
                            <p>Check and Get Your Desired Products</p>
                        </div>
                        <div className="feature-products">
                            <Slider className='product-slider' {...settings}>
                                {products.filter(product => product.tag === 'feature').map((product,index) => (
                                    <SingleFeatureProduct value={{product, modal , setModal , setProduct}} key={index}/>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                {modal && <QuickViewModal product={viewProduct} modal={{modal,setModal}}/>}
            </>
        )
    }

export default FeatureProducts