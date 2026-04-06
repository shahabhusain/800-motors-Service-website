import React from 'react'
import Hero from '../components/homePage/Hero'
import ServicePackage from '../components/homePage/ServicePackage'
import Brands from '../components/homePage/Brands'
import Testimonial from '../components/homePage/Testimonial'
import herobg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from "lucide-react";
import AutoRepair from '../components/homePage/AutoRepair'
import CompleteAutoRepair from '../components/homePage/CompleteAutoRepair'
import HowCarRepair from '../components/homePage/HowCarRepair'
import NearMe from '../components/homePage/NearMe'

export const metadata = {
  title: "800 Motor Guru | Auto Repair Service in Dubai",
  description:
    "800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation.",
};

const page = () => {
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
        span1="24/7 Mobile & Workshop"
        span2="Auto Repair Service in Dubai"
        desc="800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation."
        img={herobg}
      />
      <AutoRepair />
      <Testimonial />
      <CompleteAutoRepair />
      <Brands />
            <ServicePackage />
            <HowCarRepair />
            <NearMe />
    </div>
  );
};

export default page;