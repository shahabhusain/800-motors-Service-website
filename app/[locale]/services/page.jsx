import Brands from '@/app/components/homePage/Brands'
import Hero from '@/app/components/homePage/Hero'
import HowItWorks from '@/app/components/homePage/HowItWorks'
import ServicePackage from '@/app/components/homePage/ServicePackage'
import Testimonial from '@/app/components/homePage/Testimonial'
import AllServices from '@/app/components/services/AllServices'
import WhyChooseUs from '@/app/components/services/WhyChooseUs'
import herobg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react'
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
import React from 'react'

const ServicesPage = () => {
        const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs"},
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
 <Hero
  features={features}
  span1="Our Services"
  span2="Complete Car Care Solutions"
  desc="800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation."
  img={herobg}
/>
      <AllServices services={services} button="view Detail" span="Our" span1="Services" desc="Professional car care services tailored to keep your vehicle in perfect condition"  />
      <ServicePackage />
      <WhyChooseUs />
      <Brands />
            <Testimonial />
      <HowItWorks />
      

    </div>
  )
}

export default ServicesPage
