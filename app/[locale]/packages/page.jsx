import Hero from '@/app/components/homePage/Hero'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';
import bg from '@/public/herobg.jpg'
import React from 'react'
import ServicePackage from '@/app/components/homePage/ServicePackage';
import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import HowCarRepair from '@/app/components/homePage/HowCarRepair';
import { data } from 'framer-motion/m';
import support from '@/public/home/support.webp'
import freePickup from '@/public/home/freePickup.jpeg'
import diagnose from '@/public/home/diagnose.webp'
import repair from '@/public/home/repair.webp'
import Location from '@/app/components/packageSection/Location';

export async function generateMetadata() {
  return {
    title: "Service Packages | 800 Motor Guru Dubai",
    description: "Explore our affordable auto repair and maintenance packages in Dubai. From basic oil changes to comprehensive vehicle checkups. Save more with our service bundles.",
    alternates: {
      canonical: "https://800motorguru.ae/packages",
    },
  };
}
const Packages = () => {
            const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min Arrival in Dubai " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "24/7 Roadside Assistance" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "Free Pickup & Drop " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Expert Technicians"},
  ];
 const data=[  
  {
              title: "Step 1: Choose Your Package",
              desc: "The customer selects a suitable package based on vehicle type, engine category, and service needs.",
              color: "from-orange-500 to-red-500",
              img:support
          },
          {
              title: "Step 2: Book Your Appointment",
              desc: "The customer books a service through a call, WhatsApp, or online request and confirms the preferred time slot.",
              color: "from-blue-500 to-cyan-500",
              img:freePickup
          },
          {
              title: "Step 3: Drop Off or Get It Picked Up",
              desc: "800 Motor Guru collects the vehicle from the customer’s location or receives it at the workshop based on customer preference.",
              color: "from-green-500 to-emerald-500",
              img:diagnose
          },
          {
              title: "Step 4: Our Certified Technicians Get to Work",
              desc: "The certified technicians inspect the vehicle, perform diagnostics, and complete all required maintenance tasks.",
              color: "from-purple-500 to-pink-500",
              img:repair
          },
          {
              title: "Step 5: Pick Up & Drive with Confidence",
              desc: "The customer receives the serviced vehicle after final checks and drives with improved performance and safety.",
              color: "from-indigo-500 to-blue-500",
              img:freePickup
          }
        ]
        const faqs = [
          {
            question:"Does 800 Motor Guru provide car maintenance packages for all car brands in Dubai?",
          answer:"800 Motor Guru provides maintenance packages for all major car brands in Dubai, including German, Japanese, American, British, and French vehicles. The company supports different engine types such as V4, V6, V8, and V12. The technicians are trained to handle brand-specific systems and use diagnostic tools for accurate servicing."
          },

            {
            question:"Is a car service contract worth it for luxury cars?",
          answer:"A car service contract is useful for luxury cars because it reduces high repair costs and ensures regular maintenance. Luxury vehicles require specialized care, and service packages help to maintain car performance, safety, and engine life."
          },

            {
            question:"Is a car service contract worth it for normal cars?",
          answer:"A service contract is beneficial for normal cars because it provides routine maintenance at fixed cost. It helps avoid unexpected repair expenses and ensures smooth vehicle performance over time."
          },

            {
            question:"Is a car service contract worth it for passenger cars?",
          answer:"A service contract is suitable for passenger cars because it ensures regular inspection and timely servicing. It improves safety, fuel efficiency and reduces long-term maintenance costs."
          },

            {
            question:"Does 800 Motor Guru provide custom car maintenance packages in Dubai?",
          answer:"800 Motor Guru provides custom car maintenance packages based on vehicle type, usage, and customers' requirements. The team creates flexible plans for different engine conditions and driving needs."
          },

            {
            question:"Does 800 Motor Guru provide discount on custom car maintenance packages in Dubai?",
          answer:"800 Motor Guru offers discounts on selected custom maintenance packages depending on service scope and vehicle type. The company also provides spare parts discounts within package plans."
          },

            {
            question:"What payment methods does 800 Motor Guru accept for car maintenance packages in Dubai?",
          answer:"800 Motor Guru accepts cash, card payments, and online payment options. The company also provides Tabby installment plans for selected packages to make payments easier."
          },

            {
            question:"What is the car maintenance package cancellation policy by 800 Motor Guru?",
          answer:"800 Motor Guru allows package cancellation based on service usage and policy terms. If no service has been used, partial refunds or adjustments may apply depending on the case."
          },

            {
            question:"What is the car maintenance package transfer policy by 800 Motor Guru?",
          answer:"800 Motor Guru allows package transfer in some cases where the vehicle ownership changes. The team reviews the request and confirms eligibility before transferring the remaining services to another vehicle or owner."
          },

          
        ]
  return (
    <div>
      <Hero img={bg} span1="Car Maintenance and " span2="Servicing Packages in Dubai" desc="800 Motor Guru provides car maintenance and servicing packages in Dubai for different engine types and usage needs. The company offers package options for V4, V6, V8, and V12 vehicles with structured service plans. Each package includes routine maintenance with defined service intervals and coverage limits. 800 Motor Guru offers Silver, Gold, and Platinum packages with minor and major service combinations. Each plan includes engine oil replacement, filter service, and vehicle inspection. The packages use Havoline Caltex oil for engine performance and protection. 800 Motor Guru defines service value through 3 minor services and 2 major services within each plan. The company provides spare parts discount within package coverage. The packages follow a no time limit condition within the defined kilometer plan. 800 Motor Guru sets package pricing based on vehicle engine type and service level. The company offers flexible payment through Tabby in monthly installments. The packages reduce long-term maintenance cost and provide planned vehicle servicing without delay." features={features} />
      <ServicePackage span='Car Maintenance ' span1='Packages' />
      <HowCarRepair data={data} span1='How Our Car Maintenance ' span2='Packages Work in Dubai' desc='800 Motor Guru provides a simple and structured process for car maintenance packages in Dubai. The customer selects a package, books an appointment, and chooses pick-up or drop-off service. The company then inspects the vehicle, performs required maintenance, and delivers the car back after service is complete. Each step follows a clear process to ensure smooth service, transparency, and timely delivery.' />
      <Location  />
      <Testimonial />
      <Faqs faqs={faqs} />
    </div>
  )
}

export default Packages
