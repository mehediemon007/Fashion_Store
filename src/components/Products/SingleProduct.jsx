import React,{useState, useRef} from 'react';
import {Link} from "react-router-dom"

const SigngleProduct = (props) => {

    const product = props.value;

    const [previewImg , setPreviewImg] = useState(product.thumbnail);
    const [selectedThumb, setThumb] = useState(product.images[1]);

    const thumbImg = useRef([])

    const handleThumbImage = (img,index) =>{
        
        setPreviewImg(img);
        setThumb(img);
        thumbImg.current.forEach(el=>{

            if(el.classList.contains("active")){
                el.classList.remove("active");
            }
        })

        thumbImg.current[index].classList.add("active")
    }

    return (
        <>
            <div className="single-product">
                <div className="product-image position-relative">
                    <Link to="/product-details"><img src={`images/products/${previewImg}`} alt={product.alt} className="image1"/></Link>
                    <Link to="/product-details"><img src={`images/products/${selectedThumb}`} alt={product.alt} className="image2"/></Link>
                    <div className="thumbs-img">
                        {product.images.map((img,index)=> <img src={`images/products/${img}`} alt={product.name} key={index} onClick={()=>handleThumbImage(img,index)} ref={el => thumbImg.current.push(el)}/>)}
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
                    <h5 className='product-name'>{product.name}</h5>
                    <p className='price'>&#2547; {product.price}</p>
                </div>
            </div>
        </>
    )
}

export default SigngleProduct;