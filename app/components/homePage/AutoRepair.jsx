'use client';

import React from 'react';
import award from '@/public/home/award.jpeg';
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
        <div className='relative mb-16 md:mb-20'>

            {/* Background */}
            <Image
                src={award}
                className='w-full h-[1050px] sm:h-[600px] md:h-[330px] object-cover'
                alt='award-bg'
            />

            {/* Overlay */}
            <div className='absolute top-0 w-full h-full bg-[#00000040] backdrop-blur-xl py-10 md:py-16'>

                <div className='w-[92%] md:w-[90%] mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center justify-between'>

                    {/* Left Content */}
                    <div className='flex flex-col gap-y-4 md:w-1/2 text-center md:text-left'>

                        <h2 className='text-white font-bold text-[26px] sm:text-[30px] md:text-[35px] lg:text-[40px] leading-snug'>
                            Repair Your Autos from Best Car
                            <span className='text-orange-500'> Service Center in Dubai</span>
                        </h2>

                        <p className='text-white text-[13px] sm:text-[14px] md:text-[15px] md:h-[70px] h-[50px] overflow-y-auto custom-scroll'>
                            800 Motor Guru is a top-rated car service company in Dubai with over 2,000 customer reviews and a five-star rating on Google. The company provides reliable auto repair services with certified technicians trained in engine diagnostics, electrical systems, and AC repair. It uses diagnostic tools such as computerized scanners, engine analyzers, and wheel alignment machines. 800 Motor Guru maintains clear pricing and defined service steps, which help customers understand the repair process before work starts.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className='flex flex-col md:flex-row md:justify-end gap-4 md:w-1/2'>

                        {data.map((item, index) => (
                            <div key={index} className='relative group w-full sm:w-[180px] md:w-[200px]'>

                                <Image
                                    className='w-full h-[220px] md:h-[250px] object-cover rounded-2xl'
                                    src={item.awardImg}
                                    alt='award'
                                />

                                {/* Default Text */}
                                <div className='absolute bottom-3 left-3 right-3 z-10 text-white group-hover:hidden'>
                                    <h2 className='text-[14px] font-bold'>{item.title}</h2>
                                    <p className='text-[11px]'>{item.desc}</p>
                                </div>

                                {/* Dark Layer */}
                                <div className='absolute top-0 w-full h-full bg-[#00000070] rounded-2xl'></div>

                                {/* Hover Text */}
                                <div className='absolute top-0 w-full h-full flex items-center justify-center text-white rounded-2xl group-hover:backdrop-blur-lg p-3'>
                                    <p className='text-[12px] md:text-[14px] text-center font-medium hidden group-hover:block'>
                                        {item.hoverDesc}
                                    </p>
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