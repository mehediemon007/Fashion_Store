import React from 'react';
import {Routes, Route} from "react-router-dom";
import Category from '../pages/Category';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import WishList from '../pages/WishList';
import Compare from '../pages/Compare';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product_details/:product_id' element={<ProductDetails/>}/>
            <Route exact path='/category/:category_name' element={<Category/>}/>
            <Route exact path='/wishlist' element={<WishList/>}/>
            <Route exact path='/compare-products' element={<Compare/>}/>
            <Route exact path='/sign-in' element={<SignIn/>}/>
            <Route exact path='/sign-up' element={<SignUp/>}/>
        </Routes>
    )
}

export default routes