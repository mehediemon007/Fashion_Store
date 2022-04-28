import React from 'react';
import {Routes, Route} from "react-router-dom";
import Category from '../pages/Category';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import WishList from '../pages/WishList';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product_details/:product_id' element={<ProductDetails/>}/>
            <Route exact path='/category/:category_name' element={<Category/>}/>
            <Route exact path='/wishlist' element={<WishList/>}/>
        </Routes>
    )
}

export default routes