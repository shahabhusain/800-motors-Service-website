import React from 'react'
import tesla from '@/public/brands/tesla.jpg'
import lincoln from '@/public/brands/lincoln.jpg'
import jeep from '@/public/brands/jeep.jpg'
import hummer from '@/public/brands/hummer.jpg'
import gmc from '@/public/brands/gmc.jpg'
import ford from '@/public/brands/ford.jpg'
import dodge from '@/public/brands/dodge.jpg'
import chevrolet from '@/public/brands/chevrolet.jpg'
import cadillac from '@/public/brands/cadillac.jpg'
import Image from 'next/image'
import Link from 'next/link'

const American = () => {
   const brands = [
    { id: 1, name: "Tesla", logo: tesla, url: "/brands/tesla", description: "Electric vehicle services and maintenance" },
    { id: 2, name: "Lincoln", logo: lincoln, url: "/brands/lincoln", description: "Luxury Lincoln car repair and servicing" },
    { id: 3, name: "Jeep", logo: jeep, url: "/brands/jeep", description: "Jeep SUV off-road and maintenance services" },
    { id: 4, name: "Hummer", logo: hummer, url: "/brands/hummer", description: "Hummer heavy-duty vehicle services" },
    { id: 5, name: "GMC", logo: gmc, url: "/brands/gmc", description: "GMC truck and SUV servicing solutions" },
    { id: 6, name: "Ford", logo: ford, url: "/brands/ford", description: "Ford vehicle repair and maintenance" },
    { id: 7, name: "Dodge", logo: dodge, url: "/brands/dodge", description: "Dodge performance car services" },
    { id: 8, name: "Chevrolet", logo: chevrolet, url: "/brands/chevrolet", description: "Chevrolet car care and servicing" },
    { id: 9, name: "Cadillac", logo: cadillac, url: "/brands/cadillac", description: "Cadillac luxury vehicle services" },
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

export default American