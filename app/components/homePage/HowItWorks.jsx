"use client"
import React, { useState } from 'react'

const HowItWorks = () => {
    const [activeLocation, setActiveLocation] = useState(0);
    
    const locations = [
        {
            name: "Dubai",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231236.406041291!2d55.1224406!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
            description: "8MG serves all areas of Dubai including Downtown, Marina, JBR, Business Bay, Dubai Hills, Emirates Hills, Palm Jumeirah, JLT, Al Barsha, Mirdif, and Deira. Our mobile team and free pickup service ensure your car gets expert care no matter where you are in Dubai. With our strategically located service centers, we can reach any location within 30-45 minutes.",
        },
        {
            name: "Ajman",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230659.4012118241!2d55.21409576483171!3d25.403031624812638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5764dd8fbe79%3A0xcda090de6445a819!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554631049!5m2!1sen!2s",
            description: "Ajman car owners can now access 8MG's premium auto repair services without traveling to other emirates. We cover all areas including Al Jurf, Al Nuaimiya, Al Rashidiya, and Emirates City. Our team provides prompt service, genuine parts, and expert repairs while offering free vehicle collection and return across Ajman. Experience dealership-quality service at affordable rates.",
        },
        {
            name: "Abu Dhabi",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.9733051786!2d54.22896072524702!3d24.386473908627888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554704141!5m2!1sen!2s",
            description: "Extending our premium auto repair services to Abu Dhabi and surrounding areas including Yas Island, Saadiyat Island, Khalifa City, Al Reem Island, and Mussafah. Our team regularly services clients in the capital, offering the same quality repairs, free pickup, and drop-off services. We understand the specific needs of Abu Dhabi drivers and provide tailored solutions.",
        },
        {
            name: "Sharjah",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230818.00714316455!2d55.54627715!3d25.3199447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775554362243!5m2!1sen!2s",
            description: "8MG proudly serves Sharjah residents across all major areas including Al Nahda, Al Qasimia, Al Majaz, Al Khan, University City, and Muwaileh. Our team understands the unique traffic patterns and driving conditions in Sharjah, providing efficient, reliable, and affordable auto repair services with the same free pickup and delivery convenience.",
        }
    ];

    return (
          <div className=' dark:bg-gray-950 dark:pb-20'>
              <div className='w-[90%] mx-auto my-20 dark:my-0'>
            {/* Header Section */}
            <div className='text-center flex flex-col gap-3 items-center justify-center mb-12'>
                <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white'>
                    How to Find Best Auto Repair Company <span className='text-orange-500'>Near Me?</span>
                </h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                    8MG provides professional auto repair services across all locations in the UAE. 
                    No matter where you are, we're just a call away with free pickup and delivery.
                </p>
            </div>

            {/* Map and Buttons Section */}
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Map Section - Left Side */}
                <div className='lg:w-2/3 rounded-xl overflow-hidden shadow-lg'>
                    <iframe
                        src={locations[activeLocation].map}
                        width="100%"
                        height="600"
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
                    <div className='bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg'>
                        <h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-white'>
                            Select Your Location
                        </h3>
                        <div className='flex flex-col gap-4'>
                            {locations.map((item, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <button
                                        onClick={() => setActiveLocation(index)}
                                        className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-left ${
                                            activeLocation === index
                                                ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                    
                                    {/* Description Below Each Button - Only shows for active location */}
                                    {activeLocation === index && (
                                        <div className='p-4 bg-orange-50 dark:bg-gray-800 rounded-lg border-l-4 border-orange-500 animate-fadeIn'>
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
`}</style>
        </div>
          </div>
    )
}

export default HowItWorks

