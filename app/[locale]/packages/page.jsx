import Hero from '@/app/components/homePage/Hero'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import bg from '@/public/herobg.jpg'
import React from 'react'
import ServicePackage from '@/app/components/homePage/ServicePackage';
import WhyChooseUs from '@/app/components/services/WhyChooseUs';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';

const Packages = () => {
            const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: " All-inclusive car repair packages" },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Mobile service at your doorstep" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified technicians for all brands " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Affordable pricing with warranty"},
  ];
  return (
    <div>
      <Hero img={bg} span1="Maintenance Packages in Dubai" span2="Convenient and Professional" desc="Choose from a range of tailored packages by 800 Motor Guru to keep your car running at peak performance." features={features} />
      <WhyChooseUs />
      <ServicePackage />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default Packages
