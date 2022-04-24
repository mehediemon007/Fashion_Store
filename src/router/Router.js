import React from 'react';
import {Routes, Route} from "react-router-dom";
import Category from '../pages/Category';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product_details/:product_id' element={<ProductDetails/>}/>
            <Route exact path='/category/:category_name' element={<Category/>}/>
        </Routes>
    )
}

export default routes