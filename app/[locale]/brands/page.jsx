import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import herobg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import Brands from '@/app/components/homePage/Brands';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
const BrandsPage = () => {
        const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "Same-day service available " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " Genuine spare parts" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified technicians" },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Mobile service anywhere in Dubai"},
  ];

  return (
    <div>
      <Hero span1="All Car Brands Repair & Maintenance" span2="Services in Dubai by 800 Motor Guru" desc="We provide expert repair and maintenance services for all major car brands across Dubai with fast, reliable mobile support at your location." features={features} img={herobg} />
      <Brands />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default BrandsPage
