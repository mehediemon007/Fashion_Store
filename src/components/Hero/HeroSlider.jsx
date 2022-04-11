import React from 'react'
import Slider from "react-slick";
import {Link} from "react-router-dom"

const Heroslider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: "0px",
    };
    
    return (
        <>
            <div className="fs-banner">
                <Slider className="fs-banner-wpr" {...settings}>
                    <div className="single-blog item overlay-blog">
                        <Link to="/"><img src="images/banner/banner1.jpg" alt="banner"/></Link>
                    </div>
                    <div className="single-blog item overlay-blog">
                        <Link to="/"><img src="images/banner/banner2.jpg" alt="banner"/></Link>
                    </div>
                    <div className="single-blog item overlay-blog">
                        <Link to="/"><img src="images/banner/banner3.jpg" alt="banner"/></Link>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Heroslider