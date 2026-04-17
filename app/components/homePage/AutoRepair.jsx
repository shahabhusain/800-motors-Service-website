'use client';

import React from 'react';
import award from '@/public/home/award.jpeg';
import Image from 'next/image';
import herobg from '@/public/herobg.jpg'
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
        <div className=' relative'>
              <Image className=' h-[350px]' src={herobg} alt='bg-image' />
              <div className='absolute bottom-0 w-full'>
            <div className='w-full bg-[#000000b3] backdrop-blur-xl py-12 md:py-16'>
                <div className='w-[92%] md:w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center justify-between'>
                    {/* Left Content */}
                    <div className='flex flex-col gap-y-4 md:w-1/2 text-center md:text-left'>
                        <h2 className='text-white font-bold text-[26px] sm:text-[30px] md:text-[35px] lg:text-[40px] leading-snug'>
                            Repair Your Autos from Best Car
                            <span className='text-orange-500'> Service Center in Dubai</span>
                        </h2>

                        <p className='text-white/90 text-[13px] sm:text-[14px] md:text-[15px] md:h-[70px] h-[50px] overflow-y-auto custom-scroll leading-relaxed'>
                            800 Motor Guru is a top-rated car service company in Dubai with over 2,000 customer reviews and a five-star rating on Google. The company provides reliable auto repair services with certified technicians trained in engine diagnostics, electrical systems, and AC repair. It uses diagnostic tools such as computerized scanners, engine analyzers, and wheel alignment machines. 800 Motor Guru maintains clear pricing and defined service steps, which help customers understand the repair process before work starts.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col md:flex-row md:justify-end gap-5 md:w-1/2'>
                        {data.map((item, index) => (
                            <div key={index} className='relative group w-full sm:w-[180px] md:w-[200px] transition-all duration-300 hover:-translate-y-1'>
                                <Image
                                    className='w-full h-[220px] md:h-[250px] object-cover rounded-2xl'
                                    src={item.awardImg}
                                    alt='award'
                                />

                                {/* Overlay Gradient */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl'></div>

                                {/* Default Text */}
                                <div className='absolute bottom-3 left-3 right-3 z-10 text-white group-hover:opacity-0 transition-opacity duration-300'>
                                    <h2 className='text-[14px] font-bold mb-1'>{item.title}</h2>
                                    <p className='text-[11px] text-white/80'>{item.desc}</p>
                                </div>

                                {/* Hover Content */}
                                <div className='absolute inset-0 flex items-center justify-center text-white rounded-2xl bg-black/60 backdrop-blur-md p-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <p className='text-[12px] md:text-[13px] text-center font-medium leading-relaxed'>
                                        {item.hoverDesc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AutoRepair;