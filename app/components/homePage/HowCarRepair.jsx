"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import support from '@/public/home/support.webp'
import freePickup from '@/public/home/freePickup.jpeg'
import diagnose from '@/public/home/diagnose.webp'
import repair from '@/public/home/repair.webp'

const HowCarRepair = () => {
    const data = [
        {
            title: "Step 1: Book in 60 Second",
            desc: "The customer books the service online or by call within a few seconds by providing vehicle and location details.",
            color: "from-orange-500 to-red-500",
            img:support
        },
        {
            title: "Step 2: Free Pick-Up from Anywhere in Dubai",
            desc: "800 Motor Guru collects the vehicle from the customer location without any extra charge across Dubai.",
            color: "from-blue-500 to-cyan-500",
            img:freePickup
        },
        {
            title: "Step 3: Diagnosis and Written Quote",
            desc: "The team inspects the vehicle using diagnostic tools and provides a written quote before starting the repair.",
            color: "from-green-500 to-emerald-500",
            img:diagnose
        },
        {
            title: "Step 4: Repair With Real Time Updates",
            desc: "The technicians repair the vehicle and share service updates with the customer during the process.",
            color: "from-purple-500 to-pink-500",
            img:repair
        },
        {
            title: "Step 5: Same Day Collection or Free Drop Off",
            desc: "800 Motor Guru completes the service and returns the vehicle on the same day or delivers it back to the customer's location.",
            color: "from-indigo-500 to-blue-500",
            img:freePickup
        },

    ];

    return (
          <div className=' bg-[#fff] dark:bg-gray-950 md:py-20 py-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
              <div className='w-[90%] mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-12 flex items-center justify-center flex-col'>
                <h2 className='text-3xl md:text-5xl max-w-5xl text-center  dark:text-white font-bold mb-4 text-gray-800'>
                   How Car Repair Works in Dubai  <span className='text-orange-500 relative inline-block'>
                        From Booking to Pickup
                    </span>
                </h2>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
Car repair in Dubai follows a simple process that starts with booking a service, includes inspection and repair, and ends with vehicle pickup or delivery.

                </p>
            </div>

            {/* Timeline Slider */}
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                className="howCarRepairSwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='group relative h-full mb-12'>
                            {/* Card */}
                            <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform p-6 hover:-translate-y-2 h-full flex flex-col md:flex-row  items-center justify-between gap-6'>
                                
                                <div className=''>
                      
                                    
                                    
                                    {/* Title */}
                                    <h3 className='text-xl dark:text-white font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300'>
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className='text-gray-600 leading-relaxed text-sm'>
                                        {item.desc}
                                    </p>
                     
                                </div>
                                <Image className=' md:w-[150px] w-full h-[150px]  rounded-lg object-cover' src={item.img} alt='image'/>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>




            {/* Add custom styles for animations */}
            <style jsx>{`
                @keyframes progress {
                    0% {
                        width: 0%;
                    }
                    100% {
                        width: 100%;
                    }
                }
                .animate-progress {
                    animation: progress 10s linear infinite;
                }
                .howCarRepairSwiper .swiper-button-next,
                .howCarRepairSwiper .swiper-button-prev {
                    color: #f97316;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .howCarRepairSwiper .swiper-button-next:after,
                .howCarRepairSwiper .swiper-button-prev:after {
                    font-size: 18px;
                    font-weight: bold;
                }
                .howCarRepairSwiper .swiper-pagination-bullet-active {
                    background: #f97316;
                }
                .howCarRepairSwiper .swiper-pagination-bullet {
                    background: #f97316;
                    opacity: 0.3;
                }
            `}</style>
        </div>
          </div>
    )
}

export default HowCarRepair