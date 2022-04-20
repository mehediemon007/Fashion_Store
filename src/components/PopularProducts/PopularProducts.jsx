import React,{useState, useEffect} from 'react';
import {data} from "../../data/data";
import SigngleProduct from '../Products/SingleProduct';

const PopularProducts = () => {

    const [popularProducts , setCategory ] = useState([]);

    const menuLinks = [];

    function filterProducts(category,e){

        menuLinks.forEach(el=>{

            if(el.classList.contains("active")){
                el.classList.remove("active");
            }
        })

        e.target.classList.add("active")

        let products = data.products.filter(product => product.category === category);

        setCategory(products)

    }

    useEffect((category='fashion')=>{

        let products = data.products.filter(product => product.category === category);

        setCategory(products)

    },[])

    return (
        <>
            <div className="fs-popular-products mb-40">
                <div className="container">
                    <div className="sec-heading text-center mb-4">
                        <h3>Popular Products</h3>
                    </div>
                    <div className="popular-products-tab">
                        <div className="tab-menu">
                            <button className='menu-link active' onClick={(e)=> filterProducts('fashion',e)} ref={el => menuLinks.push(el)}>Fashion</button>
                            <button className='menu-link' onClick={(e)=> filterProducts('cosmetic',e)} ref={el => menuLinks.push(el)}>Cosmetic</button>
                            <button className='menu-link' onClick={(e)=> filterProducts('jewellary',e)} ref={el => menuLinks.push(el)}>Jewellary</button>
                        </div>
                        <div className="tab-content popular-products">
                            <div className="row">
                                {popularProducts.map((product,index) => (
                                    <div className="col-3" key={index}>
                                        <SigngleProduct value={product}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProducts;