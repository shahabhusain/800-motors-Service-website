'use client';

import React, { useState, useEffect } from 'react';
import logo from '@/public/home/logo.png';
import Image from 'next/image';

const AutoRepair = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile device for touch interactions
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // All brands use the same logo PNG
    const brands = [
        { 
            award: "5-Star ESMA Rating & ISO 9001:2008 Certified - Largest multi-brand service network in UAE" 
        },
        { 
            award: "Best Customer Service Award 2023 - Western-owned with 10+ years excellence" 
        },
        { 
            award: "36+ Years of Excellence - RTA approved with ISO standards certification" 
        },
        { 
            award: "Best Luxury & Sports Car Workshop Dubai 2024 - 55+ expert technicians" 
        },
        { 
            award: "30+ Years of Service Excellence - Premier auto maintenance since 1993" 
        },
        { 
            award: "Best Premium Auto Service Provider 2024 - Certified luxury car specialists" 
        },
        { 
            award: "Best Luxury Automotive Service 2024 - Global presence in Dubai, London & Riyadh" 
        },
        { 
            award: "Best Corporate Identity Award 2023 - Innovative auto care solutions" 
        }
    ];

    // Duplicate for infinite scroll (3 times for seamless loop)
    const infiniteBrands = [...brands, ...brands, ...brands];

    // Handle touch for mobile devices
    const handleTouchStart = (index) => {
        if (isMobile) {
            setHoveredIndex(hoveredIndex === index ? null : index);
        }
    };

    return (
        <div className='w-full bg-gray-50  dark:bg-gray-950 py-8 sm:py-12 md:py-16 overflow-hidden'>
            <div className='text-center mb-8 sm:mb-10 md:mb-12 flex flex-col items-center justify-center px-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-white font-bold mb-3 sm:mb-4 text-gray-800'>
                    Repair Your Autos From Best <span className='text-orange-500'>Car Service in Dubai</span>
                </h2>
                <p className='text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2'>
                    {isMobile ? 'Tap any logo to see their award-winning achievements' : 'Hover over any logo to see their award-winning achievements'}
                </p>
            </div>

            {/* Infinite Scroll Container - Mobile Responsive */}
            <div className='relative '>
                <div className='flex overflow-x-hidden'>
                    <div 
                        className={`flex ${isMobile ? 'animate-infinite-scroll-mobile' : 'animate-infinite-scroll'}`}
                        style={{ animationDuration: isMobile ? '35s' : '25s' }}
                    >
                        {infiniteBrands.map((brand, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 mx-2 sm:mx-3 md:mx-4 relative group'
                                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                onClick={() => isMobile && handleTouchStart(index)}
                            >
                                <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl'>
                                    {/* Logo Container - Responsive sizing */}
                                    <div className='h-32 sm:h-40 md:h-44 lg:h-48 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-5 md:p-6'>
                                        <div className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 transition-all duration-300 ${
                                            hoveredIndex === index ? 'scale-110' : 'scale-100'
                                        }`}>
                                            <Image
                                                src={logo}
                                                alt='Brand logo'
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                                            />
                                        </div>
                                    </div>

                                    {/* Dropdown Description - Responsive positioning */}
                                    <div 
                                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 overflow-hidden ${
                                            hoveredIndex === index ? 'max-h-24 sm:max-h-28 md:max-h-32 py-2 sm:py-3' : 'max-h-0 py-0'
                                        }`}
                                    >
                                        <div className='px-2 sm:px-3 text-center'>
                                            <p className='text-white text-xs sm:text-sm leading-relaxed font-medium'>
                                                🏆 {brand.award}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <style jsx>{`
                @keyframes infiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes infiniteScrollMobile {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-infinite-scroll {
                    animation: infiniteScroll 25s linear infinite;
                }
                
                .animate-infinite-scroll-mobile {
                    animation: infiniteScrollMobile 35s linear infinite;
                }
                
                .animate-infinite-scroll:hover,
                .animate-infinite-scroll-mobile:hover {
                    animation-play-state: paused;
                }
                
                /* Touch-friendly improvements for mobile */
                @media (max-width: 768px) {
                    .group {
                        cursor: pointer;
                        -webkit-tap-highlight-color: transparent;
                    }
                }
            `}</style>
        </div>
    );
};

export default AutoRepair;