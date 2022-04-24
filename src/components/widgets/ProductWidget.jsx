import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {data} from "../../data/data"


const ProductWidget = () => {

    const categorySlug = useParams().category_name;

    const products = data.products.filter(datam => datam.category === categorySlug)

    return (
        <>
            <div className="single-widget products-widget">
                <div className="widget-title">
                    <h5>New Products</h5>
                </div>
                <div className="widget-products mt-3">
                    {products.slice(0,3).map(product=>(
                        <div className="single-product">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <div className="product-image">
                                        <img src={`/images/products/${product.thumbnail}`} alt={product.alt}/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="product-content">
                                        <Link to="/product-details"><h6>{product.name}</h6></Link>
                                        <p className='price'>&#2547; {product.price}</p>
                                        <div className="product-ratings">
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                            <span><i class="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductWidget