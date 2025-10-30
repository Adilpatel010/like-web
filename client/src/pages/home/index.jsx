import React from 'react'
import HeroSection from './HeroSection'
import Welcome from './Welcome'
import PopularProducts from './PopularProducts'
import WhyChooseUs from './WhyChooseUs'
import Client from './Client'
import Contact from './Contact'


const index = () => {
  return (
    <div>
      <HeroSection />
      <Welcome />
      <PopularProducts />
      <WhyChooseUs />
      <Client />
      <Contact />
    </div>
  )
}

export default index
