import React from 'react';
import {Routes, Route} from "react-router-dom";
import Category from '../pages/Category';
import Home from '../pages/Home';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/category/:category_name' element={<Category/>}/>
        </Routes>
    )
}

export default routes