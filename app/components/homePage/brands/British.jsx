import React from 'react'
import rollsroyce from '@/public/brands/rolls-royce.jpg'
import mini from '@/public/brands/mini.jpg'
import mg from '@/public/brands/mg.jpg'
import mclaren from '@/public/brands/mclaren.jpg'
import landrover from '@/public/brands/land-rover.jpg'
import jaguar from '@/public/brands/jaguar.jpg'
import bentley from '@/public/brands/bentley.jpg'
import Image from 'next/image'
import Link from 'next/link'

const British = () => {
const brands = [
    { id: 1, name: "Rolls-Royce", logo: rollsroyce, url: "/brands/rolls-royce", description: "Ultra-luxury Rolls-Royce servicing & care" },
    { id: 2, name: "Mini", logo: mini, url: "/brands/mini", description: "Mini car maintenance and repair services" },
    { id: 3, name: "MG", logo: mg, url: "/brands/mg", description: "MG vehicle servicing and diagnostics" },
    { id: 4, name: "McLaren", logo: mclaren, url: "/brands/mclaren", description: "High-performance McLaren service experts" },
    { id: 5, name: "Land Rover", logo: landrover, url: "/brands/land-rover", description: "Land Rover SUV and off-road servicing" },
    { id: 6, name: "Jaguar", logo: jaguar, url: "/brands/jaguar", description: "Jaguar luxury vehicle repair and care" },
    { id: 7, name: "Bentley", logo: bentley, url: "/brands/bentley", description: "Bentley premium maintenance and detailing" },
]
    
    return (
        <div className="w-full px-4 sm:px-6 md:px-8">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                {brands.map((brand) => (
                    <Link key={brand.id} href={brand.url} className="group">
                        <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full">
                            
                            {/* Logo Container */}
                            <div className="flex flex-col items-center justify-center p-4 sm:p-5 min-h-[140px] sm:min-h-[160px]">
                                {/* Brand Name - Responsive text */}
                                <h2 className='font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-gray-800 dark:text-white text-center'>
                                    {brand.name}
                                </h2>
                                
                                {/* Logo Image */}
                                <div className="relative w-full flex justify-center items-center">
                                    <Image 
                                        className="object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
                                        src={brand.logo} 
                                        alt={brand.name}
                                        width={120}
                                        height={120}
                                        priority={brand.id <= 4} // Load first 4 images with priority
                                    />
                                </div>
                            </div>

                            {/* Hover Description - Mobile optimized */}
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-white text-xs sm:text-sm font-medium">
                                    {brand.description}
                                </p>
                            </div>

                            {/* Touch feedback for mobile */}
                            <div className="absolute inset-0 bg-orange-500/0 active:bg-orange-500/10 transition-colors duration-150 sm:hidden"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default British