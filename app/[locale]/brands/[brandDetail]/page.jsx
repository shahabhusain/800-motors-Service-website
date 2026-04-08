import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import bg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';

import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import About from '@/app/components/bands/About';
import NearMe from '@/app/components/bands/NearMe';
import Benifits from '@/app/components/bands/Benifits';
const BrandDetail = () => {
            const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "Mobile service across Dubai" },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " Certified BMW technicians" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: " Genuine parts with warranty" },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Same-day repair"},
  ];
  return (
    <div>
      <Hero img={bg} span1="BMW Repair Services in Dubai " span2="Expert Mobile Technicians" desc="We provide professional BMW repair and maintenance services across Dubai with same-day mobile support, keeping your car safe and road-ready." features={features} />
      <About />
      <NearMe />
      <Benifits />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default BrandDetail
