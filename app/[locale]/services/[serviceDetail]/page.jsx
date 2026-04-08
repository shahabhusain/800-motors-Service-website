import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import herobg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import ServicePackage from '@/app/components/homePage/ServicePackage';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import ServiceAreas from '@/app/components/ServiceDetailPage/ServiceAreas';

const ServiceDetail = () => {
    const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: " 60-minute arrival time " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " battery replacement" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Genuine batteries " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: " Expert technicians"},
  ]; 

    
  return (
    <div className=''>
      <Hero span1=" Battery Replacement in Dubai" span2="30-Minute Mobile Service at Your Location" desc="800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation." img={herobg} features={features} />
     <ServiceAreas />
 
      <ServicePackage />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default ServiceDetail