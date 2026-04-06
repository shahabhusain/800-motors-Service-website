"use client"
import React, { useState } from 'react'
import { FaCar, FaTools, FaOilCan, FaSnowflake, FaTachometerAlt, FaWrench, FaCogs, FaThermometerHalf, FaFan, FaMicrochip, FaCheckCircle, FaSpinner, FaBatteryFull } from 'react-icons/fa'

const CompleteAutoRepair = () => {
    const [visibleItems, setVisibleItems] = useState(6); // Initially show 6 items
    const [isLoading, setIsLoading] = useState(false);

    const allData = [
        {
            icon: <FaCar className="text-4xl" />,
            title: "Engine Repair & Diagnostics",
            desc: "Expert engine diagnostics and repair services using advanced technology to identify and fix issues quickly.",
        },
        {
            icon: <FaTools className="text-4xl" />,
            title: "Brake System Service",
            desc: "Complete brake inspection, pad replacement, rotor resurfacing, and brake fluid change for your safety.",
        },
        {
            icon: <FaOilCan className="text-4xl" />,
            title: "Oil Change & Maintenance",
            desc: "Regular oil changes with premium quality oil and comprehensive vehicle maintenance checks.",
        },
        {
            icon: <FaBatteryFull className="text-4xl" />,
            title: "Electrical System Repair",
            desc: "Fix all electrical issues including battery problems, alternator issues, and wiring repairs.",
        },
        {
            icon: <FaSnowflake className="text-4xl" />,
            title: "AC Service & Repair",
            desc: "Keep your car cool with professional AC maintenance, gas refilling, and complete repair services.",
        },
        {
            icon: <FaTachometerAlt className="text-4xl" />,
            title: "Transmission Service",
            desc: "Expert transmission repair, fluid change, clutch replacement, and gearbox maintenance.",
        },
        {
            icon: <FaWrench className="text-4xl" />,
            title: "Tire & Wheel Alignment",
            desc: "Professional tire rotation, balancing, wheel alignment, and puncture repair services.",
        },
        {
            icon: <FaCogs className="text-4xl" />,
            title: "Suspension System Repair",
            desc: "Complete suspension repair, shock absorber replacement, and steering system maintenance.",
        },
        {
            icon: <FaThermometerHalf className="text-4xl" />,
            title: "Cooling System Service",
            desc: "Radiator repair, coolant flush, water pump replacement, and overheating solutions.",
        },
        {
            icon: <FaFan className="text-4xl" />,
            title: "Heating System Repair",
            desc: "Complete heating system diagnostics and repair to keep you warm during winter.",
        },
        {
            icon: <FaMicrochip className="text-4xl" />,
            title: "ECU Programming & Tuning",
            desc: "Advanced ECU programming, chip tuning, and performance optimization services.",
        },
        {
            icon: <FaCar className="text-4xl" />,
            title: "Exhaust System Repair",
            desc: "Complete exhaust system repair, muffler replacement, and emission testing.",
        }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);
    
    // Get current visible data
    const visibleData = allData.slice(0, visibleItems);
    const hasMore = visibleItems < allData.length;
    const remainingItems = allData.length - visibleItems;

    // Load more function
    const loadMore = () => {
        setIsLoading(true);
        // Simulate loading delay for better UX
        setTimeout(() => {
            setVisibleItems(prev => Math.min(prev + 3, allData.length));
            setIsLoading(false);
        }, 500);
    };

    // Load less function
    const loadLess = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleItems(6);
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {visibleData.map((item, index) => (
                    <div 
                        key={index} 
                        className='bg-white rounded-2xl shadow-lg overflow-hidden'
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Orange top bar */}
                        <div className='h-1 bg-gradient-to-r from-orange-400 to-orange-600'></div>
                        
                        <div className='p-6'>
                            {/* Icon with circle background */}
                            <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300'>
                                <div className='text-orange-500 group-hover:text-white transition-colors duration-300'>
                                    {item.icon}
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className='text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300'>
                                {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-600 mb-4 leading-relaxed'>
                                {item.desc}
                            </p>
                            
                            
                            {/* Button */}
                            <button className='w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg'>
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
    )
}

export default CompleteAutoRepair