import React from 'react';
import {Link} from "react-router-dom"
import SingleProduct from '../Products/SingleProduct';

const CategoryProducts = ({value: products}) => {

    return (
        <>
            <div className="fs-category-products">
                <div className="row">
                    {products.map((product,index) =>(
                        <div className="col-md-4 col-6" key={index}>
                            <SingleProduct value={product}/>
                        </div>
                    ))}
                    <ul className="fs-pagination mb-5">
                        <li><Link to="" className='page-link'><i className="fa-solid fa-angles-left"></i></Link></li>
                        <li><Link to="" className='page-link'>1</Link></li>
                        <li><Link to="" className='page-link'>2</Link></li>
                        <li><Link to="" className='page-link'><i className="fa-solid fa-angles-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CategoryProducts;