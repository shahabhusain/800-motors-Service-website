import Brands from '@/app/components/homePage/Brands'
import Hero from '@/app/components/homePage/Hero'
import ServicePackage from '@/app/components/homePage/ServicePackage'
import Testimonial from '@/app/components/homePage/Testimonial'
import herobg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react'
import React from 'react'
import TyreAndBatteryService from '@/app/components/services/TyreAndBatteryService'
import CompleteAutoRepair from '@/app/components/homePage/CompleteAutoRepair'
import CarService from '@/app/components/services/CarService'
import Cta from '@/app/components/homePage/Cta'

const ServicesPage = () => {
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
  span1="Our Services"
  span2="Complete Car Care Solutions"
  desc="800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation."
  img={herobg}
/>
<TyreAndBatteryService />
       <Brands />
   <ServicePackage />
       <Testimonial />
      <CarService />
      <Cta />
    </div>
  )
}

export default ServicesPage
