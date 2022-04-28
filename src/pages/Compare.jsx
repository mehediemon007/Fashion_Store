import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCompare} from "../redux/actions";

const Compare = () => {

    const dispatch = useDispatch();

    const {compareList, compQty} = useSelector(state => state.compareList)

    return (
        <>
            <Header/>
            <div className="fs-main-content sec-spacer-50">
                <div className="container">
                    <h3 className='mb-3'>Compare Products</h3>
                    <div className="fs-comp-table">
                        <div className="row">
                            <div className="col-12">
                                {compQty > 0 && <div className="table-responsive">
                                    <table className='table table-bordered comp-table'>
                                        <tbody>
                                        <tr>
                                            <th>Preview</th>
                                            {compareList.map((item,index)=>(
                                                <td key={index} className="product-img"><img src={`images/products/${item.thumbnail}`} alt={item.alt}/></td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            {compareList.map((item,index)=>(
                                                <td key={index}>{item.name}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            {compareList.map((item,index)=>(
                                                 <td>&#2547; {item.price}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            {compareList.map((item,index)=>(
                                                <td>{item.des}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>Stock</th>
                                            {compareList.map((item,index)=>(
                                                <td className='text-success'>In Stock</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            {compareList.map((item,index)=>(
                                                <td>N/A</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th className='py-2'>Buy</th>
                                            {compareList.map((item,index)=>(
                                                <td className='py-2'><button className='btn btn-primary' onClick={()=> dispatch(addToCart(item))}>Add Cart</button></td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <th>Remove</th>
                                            {compareList.map((item,index)=>(
                                                <td><span className='del-wishlist' onClick={()=> dispatch(removeFromCompare(item.id))}><i className="fa-solid fa-trash-can"></i></span></td>
                                            ))}
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Compare