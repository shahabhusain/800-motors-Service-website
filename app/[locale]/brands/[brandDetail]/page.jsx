import Hero from '@/app/components/homePage/Hero'
import React from 'react'
import bg from '@/public/herobg.jpg'
import { Car, Clock, MapPin, Toolbox } from 'lucide-react';

import Testimonial from '@/app/components/homePage/Testimonial';
import Faqs from '@/app/components/aboutPage/Faqs';
import About from '@/app/components/bands/About';
import NearMe from '@/app/components/bands/NearMe';
import Benifits from '@/app/components/bands/Benifits';
import Cta from '@/app/components/homePage/Cta';

export async function generateMetadata() {
  return {
    title: "Audi Service & Repair | 800 Motor Guru Dubai",
    description: "Professional Audi repair and maintenance services in Dubai. Specialized technicians, genuine parts, and expert diagnostics for all Audi models including A3, A4, A6, Q5, Q7, and more.",
    alternates: {
      canonical: "https://800motorguru.ae/brands/audi",
    },
  };
}

const BrandDetail = () => {
            const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min Arrival in Dubai" },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: " Certified Audi technicians" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: " Genuine parts with warranty" },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Same-day repair"},
  ];
    const faqs = [
    {
        question:"What is the cost to repair Audi cars in Dubai?",
        answer:"Audi repair cost in Dubai depends on model, issue, and parts required. Small services like oil change or diagnostics usually range from AED 250–600. Mid-level repairs such as AC, suspension, or brake work range from AED 600–2,500. Major repairs like engine or transmission work for models like A6, Q7, or RS variants can range from AED 3,000–12,000+, depending on damage level and parts used."
    },
    {
        question:"How does 800 Motor Guru perform Audi car repairs in Dubai?",
        answer:"800 Motor Guru performs Audi repairs using advanced diagnostic systems, trained technicians, and Audi-specific repair procedures. Each vehicle is first scanned for fault codes, then inspected physically before accurate repair solutions are applied for engine, transmission, AC, suspension, and electrical systems."
    },
    {
        question:"How to contact 800 Motor Guru for Audi car repair and maintenance services in Dubai?",
        answer:"You can contact 800 Motor Guru through multiple channels including phone call, WhatsApp support, online booking form, and direct workshop visit. Customers can also request pickup and drop-off service anywhere in Dubai for convenience. The support team provides instant booking confirmation and service guidance for Audi repair and maintenance."
    },
    {
        question:"What are the operating hours of the 800 Motor Guru Audi service center in Dubai?",
        answer:"800 Motor Guru operates 7 days a week with extended working hours to support urgent Audi repairs. The service center is typically open from morning until evening, and emergency roadside assistance is also available for breakdown situations across Dubai."
    },
    {
        question:"What is the location of the 800 Motor Guru Audi service center in Dubai?",
        answer:"800 Motor Guru provides Audi repair services across Dubai with a central workshop location and mobile service coverage. Customers can also use pickup and drop-off service, so location flexibility is available across all major Dubai areas including residential, commercial, and roadside locations."
    },
        {
        question:"What is the estimated turnaround time for a standard Audi service or repair job in Dubai?",
        answer:"A standard Audi service in Dubai usually takes 2 to 4 hours, while minor repairs may take less than a day. According to general automotive service standards in Dubai, major repairs can take 1–3 days depending on parts availability and complexity. At 800 Motor Guru, most routine Audi services are completed the same day with fast diagnostics and priority handling to reduce downtime."
    },
        {
        question:"How often should an Audi undergo a routine service or oil change in Dubai's driving conditions?",
        answer:"In general, Audi recommends servicing every 10,000–15,000 km or once a year, but in Dubai conditions (heat, dust, and traffic), more frequent checks every 7,000–10,000 km are ideal. Factors like aggressive driving, long idle time, and AC usage increase service needs. At 800 Motor Guru, we recommend slightly earlier servicing to protect engine life, improve performance, and avoid heat-related damage common in UAE conditions."
    },
        {
        question:"Does 800 Motor Guru handle Audi bodywork, paint correction, or accident repair alongside mechanical servicing in Dubai?",
        answer:"Yes, 800 Motor Guru also handles Audi bodywork, paint correction, and accident repair along with mechanical servicing. The service includes dent removal, paint matching, scratch repair, bumper fixing, and full accident restoration to bring the Audi back to original condition with proper finish and alignment."
    },
        {
        question:"Are Audi cars reliable in UAE?",
        answer:"Yes, Audi cars are generally reliable in the UAE when properly maintained. They offer strong performance, advanced technology, and comfort, but in UAE conditions like extreme heat, traffic, and dust, they require regular servicing to maintain reliability. With proper care, Audi engines, transmissions, and electronics perform well for long-term use."
    },
            {
        question:"Where to buy Audi car parts in UAE?",
        answer:"Audi parts in UAE can be purchased from authorized dealers, certified workshops, and specialized auto parts suppliers."
    },
        
   ]
  return (
    <div>
      <Hero img={bg} span1="Audi Service Center Dubai Audi " span2="Car Garage and Maintenance Services " desc="Drive an Audi in Dubai as it represents a premium German luxury car known for performance, advanced electronics, and Quattro all-wheel-drive technology. Audi vehicles offer unique features like turbocharged TFSI engines, virtual cockpit systems, DSG/S-Tronic transmission, and precision engineering designed for high performance and comfort. Audi is widely used in Dubai as one of the top luxury car brands, with thousands of vehicles operating daily across areas like Downtown, Marina, and Sheikh Zayed Road, making it a common choice for professionals and families due to its balance of luxury and usability. The brand has strong market presence in the UAE luxury segment, especially in sedan and SUV categories. Dubai environment directly impacts Audi cars due to extreme heat (often above 45–50°C), heavy traffic, and dust exposure. These conditions create common Audi problems such as engine overheating, AC cooling failure, DSG transmission jerking or delay, battery drain, and suspension wear. Heat causes fluids to degrade faster, electronics to malfunction, and rubber components to crack, while sand and traffic increase mechanical stress. Audi vehicles require proper solutions because their systems are highly sensitive and performance-based. Generic garages often fail due to lack of Audi-specific diagnostic tools, coding systems, and experience with DSG gearboxes and advanced electronics, leading to repeated faults and incorrect repairs. 800 Motor Guru provides specialized Audi repair solutions in Dubai with advanced diagnostics, trained technicians, and brand-specific expertise. The company handles key Audi services including engine repair, DSG transmission service, AC and cooling system repair, suspension work, battery solutions, and electrical diagnostics using proper tools and methods." features={features} />
      <About />
      <NearMe />
      <Benifits />
      <Testimonial />
      <Cta />
      <Faqs faqs={faqs} />
    </div>
  )
}

export default BrandDetail
