import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import herobg from '@/public/home/battery.webp'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import ServicePackage from '@/app/components/homePage/ServicePackage';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import ServiceAreas from '@/app/components/ServiceDetailPage/ServiceAreas';
import AutoRepair from '@/app/components/homePage/AutoRepair';
import CarBattery from '@/app/components/ServiceDetailPage/CarBattery';
import NearMe from '@/app/components/ServiceDetailPage/NearMe';
import Cost from '@/app/components/ServiceDetailPage/Cost';

export async function generateMetadata() {
  return {
    title: "Battery Replacement | 800 Motor Guru",
    description: "Quick and reliable battery replacement service in Dubai. Genuine batteries with professional installation. 24/7 roadside assistance available.",
    alternates: {
      canonical: "https://800motorguru.ae/services/battery-replacement",
    },
  };
}

const ServiceDetail = () => {
    const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: " 20-minute arrival time " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " battery replacement" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Genuine batteries " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: " Expert technicians"},
  ]; 

    
  return (
    <div className=''>
      <Hero span1=" Car Battery Service Dubai Replace, " span2="Repair, and Install within 20 Minutes" desc="800 Motor Guru provides complete car battery services in Dubai, including battery replacement, repair, and installation for all car brands. The service includes emergency support, 24/7 roadside assistance, battery testing, and on-site installation to restore vehicle power quickly. The team performs battery health check, voltage testing, and terminal inspection before service. Battery replacement uses the correct battery type, while repair covers connection issues and minor faults. Jump start service is also available for immediate support. The process is simple. Customers book through call or WhatsApp; the technician arrives on-site, inspects the battery, and completes replacement or repair after approval. The service ensures a quick response and proper working before completion. 800 Motor Guru provides fast service within 20 minutes, certified technicians, transparent pricing, and reliable battery solutions across Dubai.
" img={herobg} features={features} />
    <AutoRepair />
    <CarBattery />
        <Testimonial span='Battery Service Dubai Reviews' />
        <NearMe />
        <Cost />
     <ServiceAreas />
      <ServicePackage />
  
    </div>
  )
}

export default ServiceDetail