"use client"
import React, { useState } from 'react'

const HowItWorks = () => {
    const [activeLocation, setActiveLocation] = useState(0);
    
    const locations = [
        {
            name: "Auto Repair Services in Dubai",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231236.406041291!2d55.1224406!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
            description: "800 Motor Guru provides complete auto repair services across Dubai with fast roadside and workshop support. The company also extends its service coverage to nearby areas like Downtown, Marina, JBR, Business Bay, Dubai Hills, Emirates Hills, Palm Jumeirah, JLT, Al Barsha, Mirdif, and Deira. The company handles battery replacement, fuel delivery, jump start, engine repair, AC service, tyre work, diagnostics, and denting and painting. 800 Motor Guru reaches customer locations in all areas of Dubai and provides quick repair solutions with trained technicians.",
        },
        {
            name: "Auto Repair Services in Ajman",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230659.4012118241!2d55.21409576483171!3d25.403031624812638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5764dd8fbe79%3A0xcda090de6445a819!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554631049!5m2!1sen!2s",
            description: "800 Motor Guru provides car repair services in Ajman with fast response and professional support. The company covers all areas in Ajman, including Al Jurf, Al Nuaimiya, Al Rashidiya, and Emirates City. The company offers battery replacement, jump start, fuel delivery, engine repair, tyre service, and general maintenance for all car brands. The team ensures quick assistance and proper repair solutions for customers in Ajman.",
        },
        {
            name: "Auto Repair Services in Abu Dhabi",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.9733051786!2d54.22896072524702!3d24.386473908627888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554704141!5m2!1sen!2s",
            description: "800 Motor Guru provides auto repair and maintenance services in Abu Dhabi with reliable support for all vehicle types. The company also includes its auto repair service to Yas Island, Saadiyat Island, Khalifa City, Al Reem Island, and Mussafah. The services include engine diagnostics, battery service, tire change, AC repair, oil change, and roadside assistance. The team provides on-site support and workshop repair depending on customer needs in Abu Dhabi.",
        },
        {
            name: "Auto Repair Services in Sharjah",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230818.00714316455!2d55.54627715!3d25.3199447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554362243!5m2!1sen!2s",
            description: "800 Motor Guru provides complete auto repair services in Sharjah with fast roadside and workshop support. 8MG proudly serves Sharjah residents across major areas, including Al Nahda, Al Qasimia, Al Majaz, Al Khan, University City, and Muwaileh. The team understands local traffic conditions and provides quick, reliable, and affordable repair solutions. 800 Motor Guru offers battery replacement, fuel delivery, jump start, engine repair, AC service, tyre work, and general maintenance with free pick-up and drop-off convenience.",
        }
    ];

    return (
        <div className='bg-[#fff] dark:bg-gray-950 dark:border-b-[#f8f8f82e] dark:border-b-[1px] py-16 md:py-24'>
            <div className='max-w-7xl mx-auto px-4 md:px-6'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
                        How to Find Best Auto Repair Company <span className='bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>Near Me?</span>
                    </h2>
                    <p className='text-gray-600 h-[60px] overflow-x-auto custom-scroll dark:text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed'>
                        Customers in Dubai look for quick response, clear pricing, and reliable service when searching for an auto repair company nearby. 800 Motor Guru provides services across all areas of Dubai with fast booking, on-site support, and workshop repair options. The team reaches the customer location, inspects the vehicle, and offers the right solution without delay. This makes 800 Motor Guru a convenient and dependable choice for customers in any part of Dubai.
                    </p>
                </div>

                {/* Map and Buttons Section */}
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-10'>
                    {/* Map Section - Left Side */}
                    <div className='lg:w-2/3 overflow-hidden  transition-all duration-300 hover:shadow-3xl'>
                        <iframe
                            src={locations[activeLocation].map}
                            width="100%"
                            height="550"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${locations[activeLocation].name} Map`}
                            className="w-full"
                        ></iframe>
                    </div>

                    {/* Buttons Section - Right Side */}
                    <div className='lg:w-1/3'>
                        <div className='bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl ring-1 ring-gray-100 dark:ring-gray-800 sticky top-24'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full'></div>
                                <h3 className='text-2xl font-bold text-gray-800 dark:text-white'>
                                    Select Your Location
                                </h3>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {locations.map((item, index) => (
                                    <div key={index} className='flex flex-col gap-2'>
                                        <button
                                            onClick={() => setActiveLocation(index)}
                                            className={`group w-full px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 text-left ${
                                                activeLocation === index
                                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
                                                    : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 border border-gray-200 dark:border-gray-700'
                                            }`}
                                        >
                                            <div className='flex items-center justify-between'>
                                                <span>{item.name}</span>
                                                {activeLocation === index && (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                        
                                        {/* Description Below Each Button - Only shows for active location */}
                                        {activeLocation === index && (
                                            <div className='p-5 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-l-4 border-orange-500 animate-fadeIn'>
                                                <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.3s ease-in-out;
                    }
                    .shadow-3xl {
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    }
                `}</style>
            </div>
        </div>
    )
}

export default HowItWorks