import React from 'react';
import {Link} from 'react-router-dom'

const CategoryWidget = () => {
    return (
        <>
            <div className="single-widget category-widget">
                <div className="widget-title">
                    <h5>Category</h5>
                </div>
                <ul className="categories">
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/">Jeans</Link></li>
                    <li><Link to="/">Shoe</Link></li>
                    <li><Link to="/">Jacket</Link></li>
                    <li><Link to="/">Trousers</Link></li>
                    <li><Link to="/">Accessories</Link></li>
                </ul>
            </div>
        </>
    )
}

export default CategoryWidget;