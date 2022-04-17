import React from 'react'
import Category from '../components/Category/Category'
import Deals from '../components/Deals/Deals'
import Header from '../components/Header/Header'
import HeroSlider from "../components/Hero/HeroSlider"
import FeatureProducts from '../components/Products/FeatureProducts'
import Footer from '../footer/Footer'

function Home() {
    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <HeroSlider/>
                <Category/>
                <Deals/>
                <FeatureProducts/>
            </main>
            <Footer/>
        </>
    )
}

export default Home