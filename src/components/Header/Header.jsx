import React,{ useState} from 'react'
import Mainnav from './Mainnav'
import Navmenu from './Navmenu'
import Toolbar from './Toolbar';
import {Link} from "react-router-dom";
import {catList} from "../Category/Category"

const Header = () => {

    const [navOpen, setOpen] = useState(false);

    return (
        <>
            <header className="fs-header">
                <Toolbar/>
                <Mainnav navOpen={navOpen} setOpen={setOpen}/>
                <Navmenu navOpen={navOpen} setOpen={setOpen}/>
                <div className={`sidebar-wpr ${navOpen ? 'show' : ''}`}>
                    <div className="sidebar-menu">
                        <div className="menu-heading">
                            <Link to="/"><h5>Fashion Store</h5></Link>
                            <span className='toggleIcon' onClick={()=> setOpen(!navOpen)}><i className="fa-solid fa-xmark"></i></span>
                        </div>
                        <ul className="nav-menu">
                            {catList.map((categoty,index) =>(
                                <li key={index}>
                                    <Link to={`/category/${categoty.name.toLowerCase()}`}><img src={`images/category/${categoty.image}`} alt="category"/> {categoty.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header