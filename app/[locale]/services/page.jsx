import Brands from '@/app/components/homePage/Brands'
import ServicePackage from '@/app/components/homePage/ServicePackage'
import Testimonial from '@/app/components/homePage/Testimonial'
import bg from '@/public/herobg.jpg'
import React from 'react'
import TyreAndBatteryService from '@/app/components/services/TyreAndBatteryService'
import CarService from '@/app/components/services/CarService'
import Cta from '@/app/components/homePage/Cta'
import Hero from '@/app/components/aboutPage/Hero'
import RoadingSide from '@/app/components/services/RoadingSide'

export async function generateMetadata() {
  return {
    title: "800 Motor Guru | Auto Repair Service in Dubai",
    description: "800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation.",
    alternates: {
      canonical: "https://800motorguru.ae/services",
    },
  };
}

const ServicesPage = () => {

  return (
    <div>
 <Hero about="All Car Services by 800 Motor Guru" desc="800 Motor Guru provides car services in Dubai with complete repair and maintenance solutions for all vehicles. The company offers car oil changes, AC service, battery replacement, tyre service, engine repair, diagnostics, and detailing. 800 Motor Guru covers all major car brands and provides service packages and seasonal offers for cost savings. The company has 2,000+ Google reviews and delivers affordable, high-quality, and fast auto repair services with certified technicians." bg={bg} />
{/* <TyreAndBatteryService /> */}
       <RoadingSide />
    <Brands
  desc="800 Motor Guru offers expert repair and maintenance services for all major car brands available on Dubai's roads. From precision German engineering to iconic British luxury, powerful American performance, refined Japanese reliability, and elegant French design our certified technicians are trained to service every make and model to manufacturer standards."
  span1="Services in Dubai"
  span="All Car Brands Repair"
/>
   <ServicePackage desc='800 Motor Guru provides car service packages in Dubai for different engine types including V4, V6, V8, and V12 vehicles. The company offers structured maintenance plans with minor and major services, oil change, inspection, and spare parts discounts. 800 Motor Guru offers Silver, Gold, and Platinum packages with minor and major service combinations. These packages help maintain vehicle performance and reduce long-term repair costs with clear and transparent pricing. 800 Motor Guru offers Silver, Gold, and Platinum packages with minor and major service combinations.
' span='Car Service' span1=' Packages in Dubai' />
       <Testimonial />
      <CarService />
      <Cta />
    </div>
  )
}

export default ServicesPage


