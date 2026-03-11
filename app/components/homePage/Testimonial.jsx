"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Testimonial = () => {
  const trusted = {
    trustedArrayTitle: "Great service! Highly recommended for everyone looking for quality work.",
    trustedArrayName: "John Doe",
    trustedArrayDate: "March 15, 2024",
    postedON: "Posted on"
  };

  return (
    <div className='md:w-[85%] w-[95%] mx-auto my-20'>
      <h1 className='uppercase md:text-[36px] text-[26px] font-semibold text-center'>Testimonials</h1>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
        className="mySwiper w-full mt-12"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className='bg-[#F1F3FF] dark:bg-gray-900 md:mb-12 mb-16 p-6 rounded-2xl flex flex-col items-center gap-y-4'>
              <div className='text-yellow-500 flex items-center gap-1'>
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar key={starIndex} size={20} />
                ))}
              </div>
              <p className='text-[#00000099] dark:text-white text-[14px] text-center font-normal'>
                {trusted.trustedArrayTitle}
              </p>
              <div className='flex flex-col gap-y-0.5 items-center'>
                <button className='h-12 w-12 rounded-full text-[18px] font-medium text-white bg-orange-500 flex items-center justify-center'>
                  {trusted.trustedArrayName.charAt(0)}
                </button>
                <h1 className='text-[14px] font-[600] text-[#000000CC] dark:text-white flex items-center gap-1'>
                  {trusted.trustedArrayName} 
                  <span className='text-[#FF7800]'>
                    <RiVerifiedBadgeFill />
                  </span>
                </h1>
                <p className='text-[10px] font-normal text-[#00000066] dark:text-white'>
                  {trusted.trustedArrayDate}
                </p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <span><FcGoogle size={30} /></span> 
                <h1 className='text-[12px] font-medium text-[#000000CC] dark:text-white flex flex-col gap-y-0.5'>
                  {trusted.postedON} 
                  <span className='text-[#FF7800]'>Google</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial