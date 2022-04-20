import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import {data} from "../data/data";
import { useParams } from 'react-router-dom';
import CategoryProducts from '../components/Category/CategoryProducts';

const Category = () => {

    const categorySlug = useParams().category_name;
    // const [categoryProducts , setProducts] = useState([]);

    const products = data.products.filter(datam => datam.category === categorySlug)


    // function fetchProducts(category){

    //     return data.products.filter(datam => datam.category === category)

    // }

    // useEffect(()=>{

    //     setProducts(fetchProducts(categorySlug));

    // },[]);

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="fs-category-wpr">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <CategoryProducts value={products}/>
                            </div>
                            <div className="col-3">
                                <div className="fs-sidebar-widget">

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

export default Category;