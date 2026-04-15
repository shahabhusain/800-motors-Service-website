import Hero from '@/app/components/aboutPage/Hero'
import Forms from '@/app/components/contact/Form'
import React from 'react'
import bg from '@/public/herobg.jpg'
export async function generateMetadata() {
  return {
    title: "Contact Us | 800 Motor Guru Dubai",
    description: "Get in touch with 800 Motor Guru for auto repair services in Dubai. Call +971 800 64878, email info@800motorguru.com, or visit our workshop in Al Quoz.",
    alternates: {
      canonical: "https://800motorguru.ae/contact",
    },
  };
}
const Contact = () => {
  return (
    <div>
      <Hero bg={bg} about="Contact Us" desc="Contact 800 Motor Guru for reliable and efficient auto repair solutions across Dubai. 800 Motor Guru gives a quick response to its customers within five minutes after contact. 800 Motor Guru provides you with a wide range of on-site and workshop solutions for all minor and major repairs without any delays. Once you contact 800 Motor Guru, the team quickly understands your issue. The team guides you to the best solution and arranges the right service. 800 Motor Guru keeps the process simple with clear communication, fair pricing, and regular updates. The team informs you with the right information about your vehicle. Our goal is to save your time and get you back on the road smoothly and confidently."/>
      <Forms />
    </div>
  )
}

export default Contact
