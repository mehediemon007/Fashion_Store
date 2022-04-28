import React from 'react';
import Header from '../components/Header/Header'
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromWishList } from '../redux/actions';

const WishList = () => {

    let dispatch = useDispatch()

    const {wishList} = useSelector(state => state.wishList);

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="container">
                    <div className="fs-wishlist sec-spacer-50">
                        <h4 className='mb-3'>Wishlist Products</h4>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered wishlist-table">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Product</th>
                                                <th>Price</th>
                                                <th>Stock Status</th>
                                                <th>Action</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishList.map((item,index)=> (
                                                <tr key={index}>
                                                    <td colSpan={2}>
                                                        <div className="wish-product">
                                                            <div className="product-image">
                                                                <img src={`images/products/${item.thumbnail}`} alt={item.alt} />
                                                            </div>
                                                            <div className="product-name">
                                                                <p>{item.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>&#2547; {item.price}</td>
                                                    <td className='text-success'>In Stock</td>
                                                    <td><button className='btn btn-primary' onClick={()=> dispatch(addToCart(item))}>Add Cart</button></td>
                                                    <td><span className='del-wishlist' onClick={()=> dispatch(removeFromWishList(item.id))}><i className="fa-solid fa-trash-can"></i></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default WishList