import React from 'react';
import {Routes, Route} from "react-router-dom";
import Category from '../pages/Category';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import WishList from '../pages/WishList';
import Compare from '../pages/Compare';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ShopCart from '../pages/ShopCart';
import SellerChat from '../pages/SellerChat';
import Orders from '../pages/Orders';
import OrderTrack from '../pages/OrderTrack';
import SingleOrder from '../pages/SIngleOrder';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product_details/:product_id' element={<ProductDetails/>}/>
            <Route exact path='/category/:category_name' element={<Category/>}/>
            <Route exact path='/wishlist' element={<WishList/>}/>
            <Route exact path='/shopcart' element={<ShopCart/>}/>
            <Route exact path='/compare-products' element={<Compare/>}/>
            <Route exact path='/sign-in' element={<SignIn/>}/>
            <Route exact path='/sign-up' element={<SignUp/>}/>
            <Route exact path='/chat' element={<SellerChat/>}/>
            <Route exact path='/orders' element={<Orders/>}/>
            <Route exact path='/orders/:orderId' element={<SingleOrder/>}/>
            <Route exact path='/orders/:orderId/track' element={<OrderTrack/>}/>
        </Routes>
    )
}

export default routes