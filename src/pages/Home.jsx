import React from 'react'
import Category from '../components/Category/Category'
import Header from '../components/Header/Header'
import HeroSlider from "../components/Hero/HeroSlider"

function Home() {
    return (
        <>
            <Header/>
            <main className="fs-main-content">
                <HeroSlider/>
                <Category/>
            </main>
        </>
    )
}

export default Home