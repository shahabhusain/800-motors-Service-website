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
import HowItWorks from '../components/homePage/HowItWorks'
import Location from '../components/homePage/Location'
import CarServices from '../components/homePage/CarServices'
import RepairEngine from '../components/homePage/RepairEngine'
import FastRepairs from '../components/homePage/FastRepairs'
import Contact from '../components/homePage/Contact'
import Cta from '../components/homePage/Cta'

export const metadata = {
  title: "800 Motor Guru | Auto Repair Service in Dubai",
  description:
    "800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation.",
      alternates: {
    canonical: "https://800motorguru.ae",
  },
};

const page = () => {
  const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min Arrival in Dubai " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "24/7 Roadside Assistance" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Free Pickup & Drop " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Expert Technicians"},
  ];


  return (
    <div>
      <Hero
        features={features}
        span1="Automotive Services in Dubai Complete "
        span2=" Car Repair and Solutions"
        desc="Automotive services in Dubai cover car maintenance and repair for passenger cars, commercial vehicles, motorcycles, and off-road equipment. These automotive services in Dubai help car owners maintain performance, ensure safety, and reduce the risk of breakdown on the road. 800 Motor Guru provides complete automotive services in Dubai across roadside, mechanical, maintenance, and body repair categories. The company handles car battery replacement, fuel delivery, jump starts, engine repair, diagnostics, AC service, tire work, car denting, and painting. The workshop process includes inspection, problem identification, solution selection, and repair execution. This approach helps customers receive accurate service without delay. 800 Motor Guru operates with certified technicians, modern tools, and defined service steps for consistent results. 800 Motor Guru operates with 13 years of industry experience and a team of certified technicians for multi-brand car vehicles. The company uses modern diagnostic tools and follows clear service steps for accurate results. 800 Motor Guru has received over 2,000 positive Google reviews with high ratings, which reflect consistent service quality. The company provides transparent pricing before repair and ensures a quick response across Dubai for customer convenience."
        img={herobg}
      />
      <AutoRepair />
      <Testimonial />
      <CompleteAutoRepair />
      <Brands />
            <ServicePackage />
            <HowCarRepair />
            <NearMe />
            <HowItWorks />
            <Location />
            <CarServices />
            <RepairEngine />
            <FastRepairs />
            <Cta />
            <Contact />
    </div>
  );
};

export default page;