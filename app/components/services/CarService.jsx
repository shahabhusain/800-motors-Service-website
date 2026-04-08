import React from 'react'
import Image from 'next/image'
import auto from '@/public/home/auto.jpeg'
import { FaCar, FaWrench, FaShieldAlt, FaClock } from 'react-icons/fa'

const CarService = () => {
    const data = [
        {
            img: auto,
            button: "Avail Offer",
            title: "Premium Auto Care",
            desc: "Professional maintenance and repair services using latest diagnostic tools and equipment.",
            price: "AED 299",
            originalPrice: "AED 499",
            features: ["Free Inspection", "1 Year Warranty", "Free Pickup"]
        },
        {
            img: auto,
            button: "Avail Offer",
            title: "Express Service",
            desc: "Quick and efficient service package perfect for busy schedules. Get back on road faster.",
            price: "AED 199",
            originalPrice: "AED 399",
            features: ["2 Hours Service", "Quality Check", "Free Wash"]
        },
        {
            img: auto,
            button: "Avail Offer",
            title: "Ultimate Protection",
            desc: "Complete car care package with premium products and expert technicians.",
            price: "AED 499",
            originalPrice: "AED 899",
            features: ["Full Diagnostics", "6 Months Warranty", "24/7 Support"]
        },
    ]

    return (
        <div className="bg-[#f8f8f8] dark:bg-gray-950 py-12 md:py-16 lg:py-20 dark:border-b-[#f8f8f82e] dark:border-b-[1px]">
            <div className="w-[90%] md:w-[85%] mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12 lg:mb-16">

                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                        Car Service Offer in Dubai
                    </h1>
                    <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta obcaecati suscipit, 
                        voluptatibus, alias nesciunt facere saepe, quia quidem ab qui exercitationem dolore 
                        ea dolores? Laboriosam delectus natus corrupti animi cupiditate!
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {data.map((item, index) => (
                        <div 
                            key={index}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100 dark:border-orange-900/30"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                                        {item.title}
                                    </h2>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                    {item.desc}
                                </p>


                                {/* Button */}
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 group">
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CarService