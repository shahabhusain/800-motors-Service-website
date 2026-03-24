import React from 'react'
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import OurServices from '../components/homePage/OurServices'
import ServicePackage from '../components/homePage/ServicePackage'
import HowItWorks from '../components/homePage/HowItWorks'
import Brands from '../components/homePage/Brands'
import Testimonial from '../components/homePage/Testimonial'
import Blogs from '../components/homePage/Blogs'
import herobg from '@/public/herobg.jpg'
import blogs from '@/public/blogs.jpg'
import {
  Car,
  Clock,
  MapPin,
  Toolbox,
} from "lucide-react";

const page = () => {
    const features = [
    { icon: <Clock className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <Toolbox className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs" },
    { icon: <Car className="w-5 h-5 text-xs md:text-[16px]" />, title: "30min arrival " },
    { icon: <MapPin className="w-5 h-5 text-xs md:text-[16px]" />, title: "Certified Techs"},
  ];
    const blogData = [
    {
      id: 1,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    },
    {
      id: 2,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    },
    {
      id: 3,
      date: "Jan 28, 2025",
      readTime: "8 min read",
      title: "5 strategies for effective brand storytelling",
      image: blogs
    }
  ]
  return (
    <div className=''>
       <Hero   features={features}
        span1="24/7 Mobile & Workshop"
        span2="Auto Repair Service in Dubai"
        desc="800 Motor Guru provides quick and reliable battery replacement anywhere in Dubai with genuine batteries and professional installation."
        img={herobg}
        />
       <About />
       <OurServices />
       <ServicePackage />
       <HowItWorks />
       <Brands />
       <Testimonial />
       <Blogs blogData={blogData} span1=" LATEST FROM OUR" span2="BLOG" />
    </div>
  )
}

export default page
