import Hero from '@/app/components/aboutPage/Hero'
import Testimonial from '@/app/components/homePage/Testimonial'
import React from 'react'
import bg from '@/public/herobg.jpg'
import Filter from '@/app/components/offer/Filter'
import HowItWorks from '@/app/components/homePage/HowItWorks'

export async function generateMetadata() {
  return {
    title: "Special Offers & Discounts | 800 Motor Guru Dubai",
    description: "Grab the best deals on auto repair services in Dubai. Limited time offers on battery replacement, oil change, AC repair, and more. Save up to 30% on service packages.",
    alternates: {
      canonical: "https://800motorguru.ae/offers",
    },
  };
}
const Offers = () => {

  return (
    <div>
      <Hero about="Car repair, maintenance and servicing Offers in Dubai" desc="Car repair offers in Dubai are discounted service packages and promotional deals that reduce the cost of vehicle maintenance, repair, and servicing for customers. These offers include routine maintenance, diagnostic checks, and specific repair services at reduced prices while maintaining quality standards. 800 Motor Guru provides these offers through structured service packages, seasonal discounts, and bundled maintenance plans for all major car brands. The company applies transparent pricing, certified technician support, and proper vehicle inspection before repair. Each offer is designed to make car servicing more affordable while ensuring reliable performance, accurate diagnosis, and professional repair solutions across Dubai." bg={bg} />
       <Filter />
       <HowItWorks />
       <Testimonial />
    </div>
  )
}

export default Offers
