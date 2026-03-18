import Brands from '@/app/components/homePage/Brands'
import Hero from '@/app/components/homePage/Hero'
import HowItWorks from '@/app/components/homePage/HowItWorks'
import ServicePackage from '@/app/components/homePage/ServicePackage'
import Testimonial from '@/app/components/homePage/Testimonial'
import AllServices from '@/app/components/services/AllServices'
import WhyChooseUs from '@/app/components/services/WhyChooseUs'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react'
import React from 'react'

const ServicesPage = () => {
        const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs"},
  ];
  return (
    <div>
 <Hero
  features={features}
  span1="Our Services"
  span2="Complete Car Care Solutions"
  desc="Professional Auto Services You Can Trust"
  desc1="From routine maintenance to emergency repairs, we provide fast, reliable, and expert car services to keep you moving."
/>
      <AllServices />
      <ServicePackage />
      <WhyChooseUs />
      <Brands />
      <HowItWorks />
      
      <Testimonial />
    </div>
  )
}

export default ServicesPage
