import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const catList =[
        {
            image:"grocery.png",
            name:"Fashion"
        },
        {
            image:"grocery.png",
            name:"Health & Beauty"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Mobile & Tablets"
        },
        {
            image:"grocery.png",
            name:"Automobiles"
        },
        {
            image:"grocery.png",
            name:"Sports & Outdoors"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
        {
            image:"grocery.png",
            name:"Home & Lifestyle"
        },
    ]
    return (
        <>
            <div className="fs-category sec-spacer-50">
                <div className="container">
                    <div className="row">
                        <div className="sec-heading text-center mb-5">
                            <h3 className='mb-3'>Categories</h3>
                            <p>Get Your Product from Category</p>
                        </div>
                        <div className="category-list">
                            {catList.map((cat,index) =>(
                                <Link to={`/category/${cat.name.toLowerCase()}`} className="single-cat" key={index}>
                                    <div className="cat-image"><img src={`images/category/${cat.image}`} alt="category"/></div>
                                    <p className="cat-name">{cat.name}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                                <Link to="/" className='view-cat'>All Categories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category