"use client";
import React, { useState } from 'react';
import { FaCar, FaTools, FaOilCan, FaSnowflake, FaTachometerAlt, FaWrench, FaCogs, FaThermometerHalf, FaFan, FaMicrochip, FaSpinner, FaBatteryFull } from 'react-icons/fa';

const CompleteAutoRepair = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    const allData = [
        {
            icon: <FaCar className="text-3xl" />,
            title: "Engine Repair & Diagnostics",
            desc: "Expert engine diagnostics and repair services using advanced technology to identify and fix issues quickly.",
        },
        {
            icon: <FaTools className="text-3xl" />,
            title: "Brake System Service",
            desc: "Complete brake inspection, pad replacement, rotor resurfacing, and brake fluid change for your safety.",
        },
        {
            icon: <FaOilCan className="text-3xl" />,
            title: "Oil Change & Maintenance",
            desc: "Regular oil changes with premium quality oil and comprehensive vehicle maintenance checks.",
        },
        {
            icon: <FaBatteryFull className="text-3xl" />,
            title: "Electrical System Repair",
            desc: "Fix all electrical issues including battery problems, alternator issues, and wiring repairs.",
        },
        {
            icon: <FaSnowflake className="text-3xl" />,
            title: "AC Service & Repair",
            desc: "Keep your car cool with professional AC maintenance, gas refilling, and complete repair services.",
        },
        {
            icon: <FaTachometerAlt className="text-3xl" />,
            title: "Transmission Service",
            desc: "Expert transmission repair, fluid change, clutch replacement, and gearbox maintenance.",
        },
        {
            icon: <FaWrench className="text-3xl" />,
            title: "Tire & Wheel Alignment",
            desc: "Professional tire rotation, balancing, wheel alignment, and puncture repair services.",
        },
        {
            icon: <FaCogs className="text-3xl" />,
            title: "Suspension System Repair",
            desc: "Complete suspension repair, shock absorber replacement, and steering system maintenance.",
        },
        {
            icon: <FaThermometerHalf className="text-3xl" />,
            title: "Cooling System Service",
            desc: "Radiator repair, coolant flush, water pump replacement, and overheating solutions.",
        },
        {
            icon: <FaFan className="text-3xl" />,
            title: "Heating System Repair",
            desc: "Complete heating system diagnostics and repair to keep you warm during winter.",
        },
        {
            icon: <FaMicrochip className="text-3xl" />,
            title: "ECU Programming & Tuning",
            desc: "Advanced ECU programming, chip tuning, and performance optimization services.",
        },
        {
            icon: <FaCar className="text-3xl" />,
            title: "Exhaust System Repair",
            desc: "Complete exhaust system repair, muffler replacement, and emission testing.",
        }
    ];

    // Get current visible data
    const visibleData = allData.slice(0, visibleItems);
    const hasMore = visibleItems < allData.length;

    // Load more function
    const loadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(prev => Math.min(prev + 4, allData.length));
            setIsLoading(false);
        }, 500);
    };

    // Load less function
    const loadLess = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(4);
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className='w-[90%] mx-auto my-20'>
            {/* Header Section */}
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
                    Complete Auto Repair Solution in <span className='text-orange-500 relative inline-block'>
                        Dubai
                        <span className='absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full'></span>
                    </span>
                </h2>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                    Professional auto repair services with certified mechanics and state-of-the-art equipment
                </p>
            </div>
            
            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {visibleData.map((item, index) => (
                    <div 
                        key={index} 
                        className='bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative overflow-visible pt-10'
                    >
                        {/* Icon Circle - Now fully visible */}
                        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 z-10'>
                            <div className='w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow-md'>
                                <div className='text-orange-500'>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                        
                        <div className='p-6 pt-8 text-center'>
                            {/* Title */}
                            <h3 className='text-xl font-bold mb-3 text-gray-800'>
                                {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-600 mb-5 leading-relaxed'>
                                {item.desc}
                            </p>
                            
                            {/* Button */}
                            <button className='w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:shadow-lg group'>
                                View More 
                                <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Load More / Load Less Buttons */}
            <div className='mt-12 text-center'>
                {hasMore ? (
                    <button
                        onClick={loadMore}
                        disabled={isLoading}
                        className='bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin" />
                                Loading...
                            </>
                        ) : (
                            <>
                                Load More
                                <span className='text-xl'>↓</span>
                            </>
                        )}
                    </button>
                ) : (
                    <div className='flex gap-4 justify-center'>
                        <button
                            onClick={loadLess}
                            disabled={isLoading}
                            className='bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2'
                        >
                            Show Less ↑
                        </button>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2'
                        >
                            Back to Top ↑
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompleteAutoRepair;