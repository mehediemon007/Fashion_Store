import React from 'react';
import {Link} from 'react-router-dom';
import { useCountdown } from './useCountDown';

const DealProduct = ({product}) => {

    const [days, hours, minutes, seconds] = useCountdown(product.targetDate);

    return (
        <>
            <div className="single-product align-items-center">
                <div className="product-image">
                    <Link to={`/product_details/${product.id}`}><img src={`images/products/${product.thumbnail}`} alt={product.alt}/></Link>
                    <span className='tag'>{product.discount}%</span>
                </div>
                <div className="product-content px-3">
                    <Link to={`/product_details/${product.id}`}><h5>{product.name}</h5></Link>
                    <p className='price'>&#2547; {product.price - ( product.price * product.discount ) / 100 }<del>&#2547; {product.price}</del></p>
                    <div className="sale-count">
                        <div className="count-left">
                            <h4><img src="images/alarm-clock.png" alt='clock'/> Hurry Up!</h4>
                            <p>Deal Ends In</p>
                        </div>
                        <div className="sale-counter">
                            <div className="single-counter">
                                <p className='count-num'>{days}</p>
                                <p>Days</p>
                            </div>
                            <div className="single-counter">
                                <p className='count-num'>{hours}</p>
                                <p>Hours</p>
                            </div>
                            <div className="single-counter">
                                <p className='count-num'>{minutes}</p>
                                <p>Minutes</p>
                            </div>
                            <div className="single-counter">
                                <p className='count-num'>{seconds}</p>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealProduct;