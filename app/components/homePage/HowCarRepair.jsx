"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaCalendarAlt, FaCar, FaClipboardList, FaTools, FaMoneyBillWave, FaKey, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const HowCarRepair = () => {
    const data = [
        {
            step: "01",
            title: "Book Your Appointment",
            desc: "Schedule your car repair service online or by phone. Choose your preferred date, time, and service type.",
            color: "from-orange-500 to-red-500",
        },
        {
            step: "02",
            title: "Free Pickup & Drop-off",
            desc: "Our professional driver will pick up your car from your home or office in Dubai at the scheduled time.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            step: "03",
            title: "Comprehensive Inspection",
            desc: "Certified mechanics perform a thorough 50+ point inspection to identify all issues and provide detailed report.",
            color: "from-green-500 to-emerald-500",
        },
        {
            step: "04",
            title: "Expert Repair Service",
            desc: "Our skilled technicians use state-of-the-art equipment to perform high-quality repairs with genuine parts.",
            color: "from-purple-500 to-pink-500",
        },
        {
            step: "05",
            title: "Quality Check & Test",
            desc: "Every repair undergoes rigorous quality testing and road test to ensure everything works perfectly.",
            color: "from-indigo-500 to-blue-500",
        },
        {
            step: "06",
            title: "Easy Payment Options",
            desc: "Pay securely online, by card, or cash on delivery. Transparent pricing with no hidden charges.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            step: "07",
            title: "Free Delivery",
            desc: "Your car will be delivered back to your doorstep, clean and fully repaired with all documents.",
            color: "from-red-500 to-pink-500",
        },
        {
            step: "08",
            title: "24/7 Support",
            desc: "Round-the-clock customer support for any questions or assistance even after service completion.",
            color: "from-teal-500 to-cyan-500",
        }
    ];

    return (
          <div className=' bg-[#f8f8f8] py-20'>
              <div className='w-[90%] mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
                    How Car Repair Works in <span className='text-orange-500 relative inline-block'>
                        Dubai
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full'></span>
                    </span>
                </h2>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                    From Booking to Pickup - A Seamless, Transparent, and Hassle-Free Process
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
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                className="howCarRepairSwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='group relative h-full mb-12'>
                            {/* Card */}
                            <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full'>
                                
                                <div className='p-6'>
                                    {/* Step Number */}
                                    <div className='flex justify-between items-start mb-4'>
                                        <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-20`}>
                                            {item.step}
                                        </div>
                                    </div>
                                    
                                    
                                    {/* Title */}
                                    <h3 className='text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300'>
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className='text-gray-600 leading-relaxed text-sm'>
                                        {item.desc}
                                    </p>
                     
                                </div>
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