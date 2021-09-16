import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Projects } from '../components/Projects/Projects'

export const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Projects/>
            <Footer />
        </div>
    )
}
