import About from '@/app/components/aboutPage/About'
import Faqs from '@/app/components/aboutPage/Faqs'
import Hero from '@/app/components/aboutPage/Hero'
import Leaders from '@/app/components/aboutPage/Leaders'
import Services from '@/app/components/aboutPage/Services'
import Team from '@/app/components/aboutPage/Team'
import Testimonial from '@/app/components/homePage/Testimonial'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Leaders />
      <Team />
      <Testimonial />
      <Faqs />
    </div>
  )
}

export default AboutUs
