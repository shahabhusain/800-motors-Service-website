import React from 'react'
import renault from '@/public/brands/renault.jpg'
import peugeot from '@/public/brands/peugeot.jpg'
import citroen from '@/public/brands/citroen.jpg'
import bugatti from '@/public/brands/bugatti.jpg'
import Image from 'next/image'
import Link from 'next/link'

const French = () => {
    const brands = [
        { id: 1, name: "Renault", logo: renault, url: "/brands/renault" },
        { id: 2, name: "Peugeot", logo: peugeot, url: "/brands/peugeot" },
        { id: 3, name: "Citroen", logo: citroen, url: "/brands/citroen" },
        { id: 4, name: "Bugatti", logo: bugatti, url: "/brands/bugatti" },
    ]
    
    return (
        <div className="flex items-center justify-center w-[85%] mx-auto gap-4 flex-wrap">
            {brands.map((brand) => (
                <Link 
                    key={brand.id} 
                    href={brand.url}
                    className="group"
                >
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
                        <div className="flex flex-col items-center">
                            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                                <Image 
                                    className='w-full h-full rounded-2xl object-contain' 
                                    src={brand.logo} 
                                    alt={brand.name}
                                    width={120}
                                    height={120}
                                    priority={brand.id <= 2}
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default French