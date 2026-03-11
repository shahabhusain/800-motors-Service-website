import React from 'react'
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import OurServices from '../components/homePage/OurServices'
import ServicePackage from '../components/homePage/ServicePackage'
import HowItWorks from '../components/homePage/HowItWorks'
import Brands from '../components/homePage/Brands'
import Testimonial from '../components/homePage/Testimonial'
import Blogs from '../components/homePage/Blogs'


const page = () => {
  return (
    <div className=''>
       <Hero />
       <About />
       <OurServices />
       <ServicePackage />
       <HowItWorks />
       <Brands />
       <Testimonial />
       <Blogs />
    </div>
  )
}

export default page
