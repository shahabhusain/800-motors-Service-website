import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import bg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import {
  FaCarBattery,
  FaTools,
  FaOilCan,
  FaCarCrash,
  FaTachometerAlt,
  FaSnowflake,
  FaCarSide,
  FaWrench,
} from "react-icons/fa";
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import BmwModels from '@/app/components/bands/BmwModels';
const BrandDetail = () => {
            const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "Mobile service across Dubai" },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " Certified BMW technicians" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: " Genuine parts with warranty" },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Same-day repair"},
  ];
        const services = [
      {
        id: 1,
        icon: FaCarBattery,
        title: "Battery Replacement",
        description: "Quick and reliable car battery replacement service at your location.",
        url: "/services/battery-replacement",
      },
      {
        id: 2,
        icon: FaTools,
        title: "General Car Service",
        description: "Complete car inspection and maintenance to keep your vehicle running smoothly.",
        url: "/services/general-service",
      },
      {
        id: 3,
        icon: FaOilCan,
        title: "Oil Change",
        description: "High-quality engine oil replacement to improve performance and engine life.",
        url: "/services/oil-change",
      },
      {
        id: 4,
        icon: FaCarCrash,
        title: "Emergency Car Repair",
        description: "Professional repair services to restore your car after an accident.",
        url: "/services/accident-repair",
      },
      {
        id: 5,
        icon: FaTachometerAlt,
        title: "Engine Diagnostics",
        description: "Advanced diagnostics to identify and fix engine issues quickly.",
        url: "/services/engine-diagnostics",
      },
      {
        id: 6,
        icon: FaSnowflake,
        title: "AC Repair",
        description: "Car AC repair and gas refill for a comfortable driving experience.",
        url: "/services/ac-repair",
      },
      {
        id: 7,
        icon: FaCarSide,
        title: "Car Detailing",
        description: "Interior and exterior detailing to make your car look brand new.",
        url: "/services/car-detailing",
      },
      {
        id: 8,
        icon: FaWrench,
        title: "Mechanical Repair",
        description: "Expert mechanical repairs for all types of vehicle issues.",
        url: "/services/mechanical-repair",
      },
    ];
  return (
    <div>
      <Hero img={bg} span1="BMW Repair Services in Dubai " span2="Expert Mobile Technicians" desc="We provide professional BMW repair and maintenance services across Dubai with same-day mobile support, keeping your car safe and road-ready." features={features} />
      <Testimonial />
      <BmwModels />
      <Faqs />
    </div>
  )
}

export default BrandDetail
