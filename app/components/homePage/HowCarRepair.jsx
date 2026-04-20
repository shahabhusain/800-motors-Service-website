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

const HowCarRepair = ({data=[  {
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
        },], span1="How Car Repair Works in Dubai", span2="From Booking to Pickup", desc="Car repair in Dubai follows a simple process that starts with booking a service, includes inspection and repair, and ends with vehicle pickup or delivery."}) => {

    return (
        <div className='bg-[#fff] to-white dark:bg-gray-950 dark:border-b-[#f8f8f82e] dark:border-b-[1px] py-16 md:py-24'>
            <div className='max-w-7xl mx-auto px-4 md:px-6'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
                        {span1}  
                        <span className='bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'> {span2}</span>
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
                        {desc}
                    </p>
                </div>

                {/* Timeline Slider */}
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    spaceBetween={30}
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
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="howCarRepairSwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='group h-full mb-12'>
                                {/* Card */}
                                <div className='bg-white dark:bg-gray-900/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 h-full backdrop-blur-sm border border-gray-100 dark:border-gray-800'>
                                    <div className='p-6 md:p-8 flex flex-col items-center text-center gap-5'>
                                        {/* Step Number Badge */}
                                        <div className='w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30'>
                                            {index + 1}
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300'>
                                            {item.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                                            {item.desc}
                                        </p>
                                        
                                        {/* Image */}
                                        <div className='relative w-full h-48 md:h-52 rounded-xl overflow-hidden mt-2 shadow-md'>
                                            <Image 
                                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                                                src={item.img} 
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom styles */}
                <style jsx global>{`
                    .howCarRepairSwiper {
                        padding-bottom: 3rem !important;
                    }
                    .howCarRepairSwiper .swiper-pagination {
                        bottom: 0 !important;
                    }
                    .howCarRepairSwiper .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #f97316;
                        opacity: 0.3;
                        transition: all 0.3s ease;
                    }
                    .howCarRepairSwiper .swiper-pagination-bullet-active {
                        width: 28px;
                        border-radius: 6px;
                        background: #f97316;
                        opacity: 1;
                    }
                    .howCarRepairSwiper .swiper-button-next,
                    .howCarRepairSwiper .swiper-button-prev {
                        color: #f97316;
                        background: white;
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        transition: all 0.3s ease;
                    }
                    .howCarRepairSwiper .swiper-button-next:hover,
                    .howCarRepairSwiper .swiper-button-prev:hover {
                        background: #f97316;
                        color: white;
                        transform: scale(1.08);
                    }
                    .howCarRepairSwiper .swiper-button-next:after,
                    .howCarRepairSwiper .swiper-button-prev:after {
                        font-size: 18px;
                        font-weight: bold;
                    }
                    @media (max-width: 768px) {
                        .howCarRepairSwiper .swiper-button-next,
                        .howCarRepairSwiper .swiper-button-prev {
                            display: none;
                        }
                    }
                `}</style>
            </div>
        </div>
    )
}

export default HowCarRepair