import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import herobg from '@/public/herobg.jpg'
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
      <Hero span1="All Car Brands Repair & Maintenance" span2="Services in Dubai by 800 Motor Guru" desc="We provide expert repair and maintenance services for all major car brands across Dubai with fast, reliable mobile support at your location." features={features} img={herobg} />
      <Brands />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default BrandsPage
