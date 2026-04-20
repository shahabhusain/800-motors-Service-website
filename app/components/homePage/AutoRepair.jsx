'use client';

import React from 'react';
import award from '@/public/home/award.jpeg';
import herobg from '@/public/herobg.jpg';
import Image from 'next/image';

const AutoRepair = () => {
    const data = [
        {
            title: "Best Onsite Car Care",
            desc: "800 Motor Guru provides on-site car repair services across Dubai.",
            hoverDesc: "800 Motor Guru received this recognition for quick 24/7 roadside support, including car battery replacement, fuel delivery, and jump start services. The team reaches customers' locations and completes essential repairs without delay.",
            awardImg: award
        },
        {
            title: "Mobility Excellence",
            desc: "800 Motor Guru supports smooth and reliable car and vehicle movement in Dubai.",
            hoverDesc: "800 Motor Guru earned this recognition by reducing vehicle breakdown time through quick response and efficient repair services. The company helps drivers continue their journey with minimal disruption.",
            awardImg: award
        },
        {
            title: "Customer Choice",
            desc: "Customers across Dubai trust 800 Motor Guru.",
            hoverDesc: "800 Motor Guru achieved this recognition through 2,000+ positive Google reviews and consistent service quality. Customers select the company due to clear pricing, reliable repair, and professional behavior.",
            awardImg: award
        },
    ];

    return (
        <div className='relative w-full min-h-[500px] overflow-hidden'>
            {/* Background Image */}
            <div className='absolute inset-0 w-full h-full'>
                <Image 
                    className='w-full h-full object-cover' 
                    src={herobg} 
                    alt='auto repair background'
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectPosition: "center" }}
                />
            </div>
            
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/70 w-full h-full'></div>
            
            {/* Content */}
            <div className='relative z-10 w-full py-16 md:py-20'>
                <div className='w-[92%] md:w-[90%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-between'>
                    
                    {/* Left Content */}
                    <div className='flex flex-col gap-y-5 lg:w-1/2 md:text-center text-start lg:text-left'>
                        <h2 className='text-white font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight'>
                            Repair Your Autos from Best 
                            <span className='text-orange-500 block mt-2'>
                                Service Center in Dubai Car
                            </span>
                        </h2>

                        <p className='text-gray-200 md:h-auto h-[60px] md:overflow-x-hidden overflow-x-scroll text-sm md:text-base leading-relaxed'>
                            800 Motor Guru is a top-rated car service company in Dubai with over 2,000 customer reviews and a five-star rating on Google. The company provides reliable auto repair services with certified technicians trained in engine diagnostics, electrical systems, and AC repair. It uses diagnostic tools such as computerized scanners, engine analyzers, and wheel alignment machines. 800 Motor Guru maintains clear pricing and defined service steps, which help customers understand the repair process before work starts.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-1/2'>
                        {data.map((item, index) => (
                            <div key={index} className='relative group w-full transition-all duration-300 hover:-translate-y-1'>
                                <div className='relative overflow-hidden rounded-2xl'>
                                    <Image
                                        className='w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105'
                                        src={item.awardImg}
                                        alt={item.title}
                                        width={300}
                                        height={240}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

                                    {/* Default Content */}
                                    <div className='absolute bottom-0 left-0 right-0 p-4 z-10 transition-all duration-300 group-hover:opacity-0'>
                                        <h3 className='text-white text-sm font-bold mb-1'>{item.title}</h3>
                                        <p className='text-gray-200 text-xs leading-relaxed'>{item.desc}</p>
                                    </div>

                                    {/* Hover Content */}
                                    <div className='absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
                                        <p className='text-gray-100 text-xs md:text-sm text-center leading-relaxed'>
                                            {item.hoverDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoRepair;