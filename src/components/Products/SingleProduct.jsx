import React,{useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from "react-router-dom"
import { addToCart} from "../../redux/actions"

const SigngleProduct = (props) => {

    let dispatch = useDispatch();

    const product = props.value;

    const [previewImg , setPreviewImg] = useState("");
    const [selectedThumb, setThumb] = useState("");

    // let thumbImg = useRef([])
    const thumbImg = []; 

    const handleThumbImage = (img,index) =>{
        
        setPreviewImg(img);
        setThumb(img);
        // thumbImg.current.forEach(el=>{

        //     if(el.classList.contains("active")){
        //         el.classList.remove("active");
        //     }
        // })

        thumbImg.forEach(el=>{

            if(el.classList.contains("active")){
                el.classList.remove("active");
            }
        })

        // thumbImg.current[index].classList.add("active")
        thumbImg[index].classList.add("active")
    }

    useEffect(()=>{
        // thumbImg.current = []
        thumbImg.forEach(el=>{

            if(el.classList.contains("active")){
                el.classList.remove("active");
            }
        })
        
        setPreviewImg(product.thumbnail);
        setThumb(product.images[1])

    },[product])

    return (
        <>
            <div className="single-product">
                <div className="product-image-wpr">
                    <Link to={`/product_details/${product.id}`} className='product-image'>
                        <img src={`/images/products/${previewImg}`} alt={product.alt} className="image1"/>
                        <img src={`/images/products/${selectedThumb}`} alt={product.alt} className="image2"/>
                    </Link>
                    <div className="thumbs-img">
                        {product.images.map((img,index)=> <img src={`/images/products/${img}`} alt={product.name} key={index} onClick={()=>handleThumbImage(img,index)} ref={el => thumbImg.push(el)}/>)}
                    </div>
                    <div className="action-btns">
                        <Link to="" className='action-btn'><i className="fa-solid fa-eye"></i></Link>
                        <Link to="" className='action-btn'><i className="fa-solid fa-heart"></i></Link>
                        <Link to="" className='action-btn'><i className="fa-solid fa-shuffle"></i></Link>
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
                    <Link to={`/product_details/${product.id}`}><h5 className='product-name'>{product.name}</h5></Link>
                    <p className='price'>&#2547; {product.price}</p>
                    <Link to="" className='add-cart-btn action-btn' onClick={(e)=>{e.preventDefault(); dispatch(addToCart(product))}}><i className="fa-solid fa-bag-shopping"></i></Link>
                </div>
            </div>
        </>
    )
}

export default SigngleProduct;