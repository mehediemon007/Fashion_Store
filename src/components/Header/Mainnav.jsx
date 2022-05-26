import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, placeOrder} from "../../redux/actions"

const Mainnav = ({navOpen, setOpen}) => {

    const dispatch = useDispatch();

    const [openCart, showCart] = useState(false);
    const [totalPrice, setTotal] = useState(0)

    const {cart} = useSelector(state => state.cart)
    const {wishQty} = useSelector(state => state.wishList)
    const {compQty} = useSelector(state => state.compareList)

    const [stickyClass, setStickyClass] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

    useEffect(()=>{
        let totalPrice = 0;
        cart.forEach(item=> totalPrice+= item.qty * item.price);
        setTotal(totalPrice)
    },[cart])
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 80 ? setStickyClass(true) : setStickyClass(false);
      }
    };

    return (
        <>
            <div className={`fs-main-nav ${stickyClass ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="main-nav">
                        <div className="col-auto">
                            <div className="fs-logo d-flex align-items-center">
                                <span className="nav-toggle" onClick={()=> setOpen(!navOpen)}><i className="fas fa-bars"></i></span>
                                <Link to="/"><h2 className='logo'>Fashion Store</h2></Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="nav-middle">
                                <form className="nav-search">
                                    <fieldset className="nav-search-input">
                                        <label htmlFor="nav-search" className="visually-hidden">Search Product</label>
                                        <input type="text" id="nav-search" placeholder="Search for anything"/>
                                    </fieldset>
                                    <button type="submit" className="nav-search-btn"><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="nav-right d-flex justify-content-between align-items-center">
                                <div className='nav-icon'><Link to="/compare-products"><span className='count'>{compQty}</span><i className="fa-solid fa-shuffle"></i></Link></div>
                                <div className='nav-icon'><Link to="/wishlist"><span className='count'>{wishQty}</span><i className="fas fa-heart"></i></Link></div>
                                <div className="nav-cart shopping-cart nav-icon" onClick={()=> showCart(!openCart)}>
                                    <span className='count'>{cart.length}</span>
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className={`shopping-cart-popup ${openCart ? 'show' : ''}`}>
                                    <div className="shopping-cart-popup-content">
                                        <div className="total-item">
                                            <span className="product-count">{cart.length} ITEMS</span>
                                            <span className='toggleIcon' onClick={()=> showCart(!openCart)}><i className="fa-solid fa-xmark"></i></span>
                                        </div>
                                        {cart.length ? <ul className="cart-product-list">
                                            {cart.map((item,index)=>(
                                                <li className="cart-product-item" key={index}>
                                                    <div className="cart-product-image">
                                                        <div className="product-inner">
                                                            <span href="#" className="product-remove" onClick={()=> dispatch(removeFromCart(item.id))}>&#xd7;</span>
                                                            <img src={`/images/products/${item.thumbnail}`} alt={item.alt}/>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product-details">
                                                        <Link to={`/product_details/${item.id}`}>{item.name}</Link>
                                                        <div className="cart-product-quantity">
                                                            <span>{item.qty} x </span>
                                                            <span>${item.price}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul> : <p className='empty-cart'>Cart Is Empty</p> }
                                        {cart.length > 0 && 
                                            <>
                                                <div className="sub-total">
                                                    <span>SUB-TOTAL</span>
                                                    <span>${totalPrice}</span>
                                                </div>
                                                <Link to="/shopcart" className="view-btn">VIEW CART</Link>
                                                <Link to="/checkout" className="chechout-btn" onClick={()=> {dispatch(placeOrder(cart,totalPrice)) ; showCart(!openCart)}} >CHECK OUT</Link>
                                            </>
                                        }
                                    </div>
                                </div>
                                <Link to="/sign-up" className="nav-user">
                                    <i className="fa-solid fa-user"></i> <span className='text-white'>My Account</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainnav