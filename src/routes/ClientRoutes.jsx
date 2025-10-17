import React from 'react'
import Layout from '../components/Layout'
import About from '../pages/about/index'
import Products from '../pages/products/index'
import Contact from '../pages/contact/index'
import { Route, Routes } from 'react-router-dom'
import HeroSection from '../pages/home/index'
import ViewProduct from '../pages/viewproducts/ViewProduct'
import ViewOven from '../pages/viewpopularproducts/ViewOven'

const ClientRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HeroSection />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/viewoven' element={<ViewOven />} />
                    <Route path='/viewproduct' element={<ViewProduct />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </div>
    )
}

export default ClientRoutes
