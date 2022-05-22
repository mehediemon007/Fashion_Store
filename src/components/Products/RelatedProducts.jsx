import React from 'react';
import {data} from "../../data/data";
import SingleProduct from './SingleProduct';
import Slider from "react-slick";

const RelatedProducts = () => {

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
        swipe: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 416,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <div className="fs-related-products">
                <div className="container">
                    <div className="sec-heading" style={{borderBottom:"1px solid #d3d3d3",paddingBottom:"8px"}}>
                        <h4 className='mb-2'>Related Products</h4>
                    </div>
                    <div className="feature-products">
                        <Slider className='product-slider' {...settings}>
                            {products.slice(-6).map((product,index) => (
                                <SingleProduct value={product} key={index}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedProducts