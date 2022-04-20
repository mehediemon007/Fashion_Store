import React from 'react';
import {data} from "../../data/data";
import SingleProduct from './SingleProduct';
import Slider from "react-slick";

    const FeatureProducts = () => {

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
                                    <SingleProduct value={product} key={index}/>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default FeatureProducts