import React from 'react';
import {Link} from "react-router-dom"

const Navmenu = () => {

    return (
        <>
            <div className="fs-product-nav">
                <span className="nav-toggle text-end"><i className="fas fa-times"></i></span>
                <div className="container">
                    <div className="product-navigation">
                        <div className="fs-categories-nav show">
                            <div className="category-span"><i className="fa-solid fa-bars"></i> CATEGORIES</div>
                        </div>
                        <div className="fs-product-menu">
                            <Link to="#flash-deals">FLASH DEALS</Link>
                            <Link to="#new-arrive">NEW ARRIVAL</Link>
                            <Link to="#brands">BRANDS</Link>
                            <Link to="#month-top">Month's Top</Link>
                            <Link to="top-selling.html">TOP SALES</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navmenu