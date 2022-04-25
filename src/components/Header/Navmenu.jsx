import React,{useState} from 'react';
import {Link} from "react-router-dom"

const Navmenu = () => {

    const [navOpen, setOpen] = useState(false);

    return (
        <>
            <div className="fs-product-nav">
                <span className="nav-toggle text-end"><i className="fas fa-times"></i></span>
                <div className="container">
                    <div className="product-navigation">
                        <div className="fs-categories-nav">
                            <div className="category-span"><span className='toggleIcon' onClick={()=> setOpen(!navOpen)}><i className="fa-solid fa-bars"></i></span> CATEGORIES</div>
                            <div className={`sidebar-wpr ${navOpen ? 'show' : ''}`}>
                                <div className="sidebar-menu">
                                    <div className="menu-heading">
                                        <Link to="/"><h5>Fashion Store</h5></Link>
                                        <span className='toggleIcon' onClick={()=> setOpen(!navOpen)}><i class="fa-solid fa-xmark"></i></span>
                                    </div>
                                </div>
                            </div>
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