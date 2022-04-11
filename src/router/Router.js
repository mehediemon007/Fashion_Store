import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';

const routes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    )
}

export default routes