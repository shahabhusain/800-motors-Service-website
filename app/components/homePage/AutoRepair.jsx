'use client';

import React, { useState } from 'react';
import logo from '@/public/home/logo.png';
import Image from 'next/image';

const AutoRepair = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    return (
        <div className='w-full bg-gray-50 py-16 overflow-hidden'>
            <div className='text-center mb-12 flex flex-col items-center justify-center'>
                <h2 className='text-4xl md:text-5xl max-w-3xl font-bold mb-4 text-gray-800'>
                    Repair Your Autos From Best <span className='text-orange-500'>Car Service in Dubai</span>
                </h2>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
                    Hover over any logo to see their award-winning achievements
                </p>
            </div>

            {/* Infinite Scroll Container - ONLY LOGO PNG */}
            <div className='relative'>
                <div className='flex overflow-x-hidden'>
                    <div className='flex animate-infinite-scroll'>
                        {infiniteBrands.map((brand, index) => (
                            <div
                                key={index}
                                className='flex-shrink-0 w-48 mx-4 relative group'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className='bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl'>
                                    {/* Logo Container - ONLY PNG IMAGE, NO TEXT */}
                                    <div className='h-48 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6'>
                                        <div className={`relative w-32 h-32 transition-all duration-300 ${
                                            hoveredIndex === index ? 'scale-110' : 'scale-100'
                                        }`}>
                                            <Image
                                                src={logo}
                                                alt='Brand logo'
                                                fill
                                                className='object-contain'
                                                sizes="(max-width: 128px) 100vw, 128px"
                                            />
                                        </div>
                                    </div>

                                    {/* Dropdown Description - Shows on hover */}
                                    <div 
                                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 overflow-hidden ${
                                            hoveredIndex === index ? 'max-h-24 py-3' : 'max-h-0 py-0'
                                        }`}
                                    >
                                        <div className='px-3 text-center'>
                                            <p className='text-white text-xs leading-relaxed font-medium'>
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
                
                .animate-infinite-scroll {
                    animation: infiniteScroll 25s linear infinite;
                }
                
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default AutoRepair;