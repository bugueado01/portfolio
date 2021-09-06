import React from 'react'
import { Menu } from '../Menu/Menu'
import { Hero } from '../Hero/Hero'
import { Proyects } from '../Proyects/Proyects'
import { Footer } from '../Footer/Footer'

import './layout.css'

const Layout = () => {
     return (
          <div className="container">
               <Menu />
               <Hero />
               <Proyects />
               <Footer />
          </div>
     )
}

export default Layout
