import React,{useState, useEffect} from 'react';
import {data} from "../../data/data";
import SigngleProduct from '../Products/SingleProduct';

const PopularProducts = () => {

    const [popularProducts , setCategory ] = useState([]);

    function filterProducts(category="fashion"){

        let products = data.products.filter(product => product.category === category);

        setCategory(products)

    }
    
    useEffect(()=>{

        filterProducts();

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
                            <button className='menu-link' onClick={()=> filterProducts('fashion')}>Fashion</button>
                            <button className='menu-link' onClick={()=> filterProducts('cosmetic')}>Cosmetic</button>
                            <button className='menu-link' onClick={()=> filterProducts('jewellary')}>Jewellary</button>
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