import React from 'react';
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react';

const ProductSlider = ({images}) => {

    const [activeThumb, setActiveThumb] = useState()


    return (
        <>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className='product-images-slider'
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={`/images/products/${item}`} alt="product images" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="product-images-slider-thumbs-wrapper">
                                <img src={`/images/products/${item}`} alt="product images" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

ProductSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductSlider