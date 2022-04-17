import React from 'react';
import {Link} from 'react-router-dom';

const DealProduct = ({product}) => {

    return (
        <>
            <div className="single-product">
                <div className="product-image">
                    <Link to="/product-details"><img src={`images/products/${product.thumbnail}`} alt={product.alt}/></Link>
                    <span className='tag'>{product.discount}%</span>
                </div>
                <div className="product-content p-3">
                    <Link to="/product-details"><h5>{product.name}</h5></Link>
                    <p className='price'>{product.price - ( product.price * product.discount ) / 100 } <del>{product.price}</del></p>
                    <p className='p-des'>{product.des}</p>
                    <div className="sale-count">
                        <div className="count-left">
                            <h4>Hurry Up!</h4>
                            <p>Deal Ends In</p>
                        </div>
                        <div className="sale-counter">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealProduct;