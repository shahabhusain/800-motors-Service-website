import React from 'react'
import herobg from '@/public/herobg.jpg'
import Brands from '@/app/components/homePage/Brands';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import Hero from '@/app/components/aboutPage/Hero';
import Cta from '@/app/components/homePage/Cta';

export async function generateMetadata() {
  return {
    title: "Car Brands We Service | 800 Motor Guru",
    description: "We service all major car brands in Dubai including Toyota, Nissan, BMW, Mercedes, Audi, Ford, Honda, and more. Professional auto repair for all makes and models.",
    alternates: {
      canonical: "https://800motorguru.ae/brands",
    },
  };
}

const BrandsPage = () => {
   const faqs = [
    {
        question:"Does 800 Motor Guru provide engine repair for all petrol and diesel car brands in Dubai?",
        answer:"Yes, 800 Motor Guru provides engine repair services for all petrol and diesel car brands in Dubai. The service includes engine diagnostics, repair, overhaul, and performance restoration using proper tools and techniques."
    },
    {
        question:"Can 800 Motor Guru service Korean car brands like Hyundai and Kia in Dubai?",
        answer:"Yes, 800 Motor Guru services Korean car brands including Hyundai and Kia with full maintenance, diagnostics, and repair support. The team uses proper tools and follows manufacturer standards."
    },
    {
        question:"Does 800 Motor Guru offer AC repair for every car brand available in Dubai?",
        answer:"Yes, 800 Motor Guru provides AC repair services for all car brands in Dubai. The service includes gas refill, compressor repair, leak detection, and cooling system inspection."
    },
    {
        question:"Does 800 Motor Guru repair American car brands like Ford, Dodge, and Chevrolet in Dubai?",
        answer:"Yes, 800 Motor Guru repairs American car brands including Ford, Dodge, and Chevrolet with complete mechanical, electrical, and diagnostic services."
    },
    {
        question:"Can 800 Motor Guru handle gearbox and transmission repairs across all car brands in Dubai?",
        answer:"Yes, 800 Motor Guru provides gearbox and transmission repair for all car brands. The service includes fault diagnosis, repair, and replacement for both automatic and manual systems."
    },
        {
        question:"Does 800 Motor Guru offer home or office car pickup and drop-off in Dubai?",
        answer:"Yes, 800 Motor Guru provides free car pickup and drop-off service across Dubai. Customers can get their car serviced without visiting the workshop."
    },
        {
        question:"Does 800 Motor Guru provide genuine spare parts for all car brands in Dubai?",
        answer:"Yes, 800 Motor Guru provides genuine or equivalent-grade spare parts for all car brands. This ensures quality repair and long-term performance."
    },
        {
        question:"Can 800 Motor Guru service supercar brands like Ferrari and Lamborghini in Dubai?",
        answer:"Yes, 800 Motor Guru services supercar brands including Ferrari and Lamborghini with specialized tools and expert technicians for high-performance vehicles."
    },
        {
        question:"Does 800 Motor Guru offer car diagnostics for all brands in Dubai?",
        answer:"Yes, 800 Motor Guru provides advanced car diagnostics for all brands using modern scanning tools to detect faults accurately."
    },
            {
        question:"Is 800 Motor Guru cheaper than a dealership service center in Dubai?",
        answer:"Yes, 800 Motor Guru is more affordable than dealership service centers. The company offers competitive pricing with similar quality standards and transparent billing."
    },
            {
        question:"Does 800 Motor Guru provide warranty on car repairs in Dubai?",
        answer:"Yes, 800 Motor Guru provides warranty on selected repairs and parts depending on the service. This ensures customer confidence and service reliability."
    },
   ]
  return (
    <div>
    <Hero about="All Brands Car Repair Services in Dubai Luxury Cars Service Center in Dubai" desc="Get car repair services in Dubai for all car brands including luxury, ultra-luxury, sports, supercars, SUVs, off-road, electric, hybrid, and popular vehicles with complete maintenance and diagnostic support. 800 Motor Guru provides repair solutions for all categories with certified technicians and proper tools to ensure accurate service and long-term performance. 800 Motor Guru repairs luxury cars like Mercedes-Benz, BMW, and Audi with advanced diagnostics and precision maintenance. The company handles ultra-luxury vehicles such as Rolls-Royce, Bentley, and Maybach with high attention to detail and premium service standards. Sports and supercars including Porsche, Ferrari, and Lamborghini, are serviced with performance-focused repair methods and specialized handling. 800 Motor Guru also provides repair services for SUVs and off-road vehicles like Toyota Land Cruiser, Nissan Patrol, and Jeep Wrangler with strong mechanical support and 4x4 system expertise. Electric and hybrid vehicles such as Tesla, Lexus Hybrid, and Toyota Hybrid, are serviced with modern diagnostic tools and battery system knowledge. Popular cars including the Honda Civic, Toyota Corolla, and Hyundai Elantra are maintained with cost-effective and reliable repair solutions across Dubai.
" bg={herobg} />
      <Brands span='All Brand Cars' span1='Repair in Dubai' />
     
      <Testimonial />
       <Cta />
      <Faqs faqs={faqs} />
    </div>
  )
}

export default BrandsPage
