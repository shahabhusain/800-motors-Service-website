import React from 'react'
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import OurServices from '../components/homePage/OurServices'
import ServicePackage from '../components/homePage/ServicePackage'
import HowItWorks from '../components/homePage/HowItWorks'
import Brands from '../components/homePage/Brands'
import Testimonial from '../components/homePage/Testimonial'
import Blogs from '../components/homePage/Blogs'
import {
  Car,
  Clock,
  MapPin,
  Toolbox,
} from "lucide-react";

const page = () => {
    const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs"},
  ];
  return (
    <div className=''>
       <Hero   features={features}
        span1="24/7 Mobile & Workshop"
        span2="Auto Repair Service in Dubai"
        desc="Your Roadside Lifeline - Faster Than You Expect!"
        desc1="Dead Battery, Flat Tire, or Breakdown? We'll Get You Back on the Road!"  />
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
