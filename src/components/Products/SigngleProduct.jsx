import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom"

const SigngleProduct = (props) => {

    const product = props.value;

    const [selectedThumb, setThumb] = useState(product.images[1]);

    const handleThumbImage = (img,e) =>{
        setThumb(img)
    }

    return (
        <>
            <div className="single-product">
                <div className="product-image position-relative">
                    <Link to="/product-details"><img src={`images/products/${product.thumbnail}`} alt={product.alt} className="image1"/></Link>
                    <Link to="/product-details"><img src={`images/products/${selectedThumb}`} alt={product.alt} className="image2"/></Link>
                    <div className="thumbs-img">
                        {product.images.map((img,index)=> <img src={`images/products/${img}`} alt={product.name} key={index} onClick={(e)=> handleThumbImage(img,e)}/>)}
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-ratings">
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                        <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <h5>{product.name}</h5>
                    <p className='price'>&#2547; {product.price}</p>
                </div>
            </div>
        </>
    )
}

export default SigngleProduct;