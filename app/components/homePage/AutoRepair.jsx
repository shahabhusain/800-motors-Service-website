'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import auto from '@/public/home/auto.jpeg';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AutoRepair = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const data = [
        {
            title: "Engine Diagnostics",
            desc: "Comprehensive engine analysis and repair services using advanced diagnostic tools.",
            img: auto
        },
        {
            title: "Brake System Repair",
            desc: "Complete brake inspection, pad replacement, and rotor resurfacing services.",
            img: auto
        },
        {
            title: "Transmission Service",
            desc: "Expert transmission repair, fluid change, and clutch replacement.",
            img: auto
        },
        {
            title: "AC Service & Repair",
            desc: "Keep your car cool with our professional AC maintenance and repair services.",
            img: auto
        },
       
    ];

    return (
       <div className=''>
             <div className='w-[85%] mx-auto flex flex-col items-center justify-center py-12'>
            <h2 className='text-4xl text-center font-semibold max-w-2xl uppercase mb-12'>
                Repair your auto from best car service center in Dubai.
            </h2>
            
            <div className='w-full'>
                <Swiper
                    modules={[ Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='mySwiper'
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div 
                                className='relative bg-white rounded-lg mb-12 shadow-lg overflow-hidden cursor-pointer'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ height: '400px' }}
                            >
                                {/* Image Layer - always visible */}
                                <div className='relative w-full h-full '>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className='object-cover transition-transform duration-500 hover:scale-110'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                
                                {/* Overlay Content - shows on hover */}
                                <div 
                                    className={`absolute inset-0 bg-[#000000af] bg-opacity-85 flex flex-col justify-center items-center p-6 transition-all duration-300 ${
                                        hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                                >
                                    <h3 className='text-2xl font-semibold mb-4 text-white text-center'>
                                        {item.title}
                                    </h3>
                                    <p className='text-gray-200 leading-relaxed text-center mb-6'>
                                        {item.desc}
                                    </p>
                                    <button className='bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105'>
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
       </div>
    );
};

export default AutoRepair;