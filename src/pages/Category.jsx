import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import Footer from '../footer/Footer';
import {data} from "../data/data";
import { useParams } from 'react-router-dom';
import CategoryProducts from '../components/Category/CategoryProducts';
import CategoryWidget from '../components/widgets/CategoryWidget';
import FilterWidget from '../components/widgets/FilterWidget';
import ProductWidget from '../components/widgets/ProductWidget';

const Category = () => {

    const categorySlug = useParams().category_name;
    // const [categoryProducts , setProducts] = useState([]);

    const products = data.products.filter(datam => datam.category === categorySlug)


    // function fetchProducts(category){

    //     return data.products.filter(datam => datam.category === category)

    // }

    // useEffect(()=>{

    //     setProducts(fetchProducts(categorySlug));

    // },[categorySlug]);

    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <div className="fs-category-wpr">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <div className="filter-toolbar">
                                    <p>We found <b>16</b> items for you!</p>
                                    <div className="filters">
                                        <div className="single-filter">
                                            <i className="fa-solid fa-border-all"></i>
                                            <label htmlFor="">Show:</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option>16</option>
                                                <option value="10">10</option>
                                                <option value="14">14</option>
                                                <option value="16">16</option>
                                            </select>
                                        </div>
                                        <div className="single-filter">
                                            <i className="fa-solid fa-arrow-up-wide-short"></i>
                                            <label htmlFor="">Short by:</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option className='selt-opt'>Defaults</option>
                                                <option className='selt-opt' value="1">Featured</option>
                                                <option className='selt-opt' value="2">Trending</option>
                                                <option className='selt-opt' value="3">Low To High</option>
                                                <option className='selt-opt' value="4">High To Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <CategoryProducts value={products}/>
                            </div>
                            <div className="col-3">
                                <div className="fs-sidebar-widget">
                                    <CategoryWidget/>
                                    <FilterWidget/>
                                    <ProductWidget/>
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