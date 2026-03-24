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
        { id: 1, name: "Tesla", logo: tesla, url: "/brands/tesla" },
        { id: 2, name: "Lincoln", logo: lincoln, url: "/brands/lincoln" },
        { id: 3, name: "Jeep", logo: jeep, url: "/brands/jeep" },
        { id: 4, name: "Hummer", logo: hummer, url: "/brands/hummer" },
        { id: 5, name: "GMC", logo: gmc, url: "/brands/gmc" },
        { id: 6, name: "Ford", logo: ford, url: "/brands/ford" },
        { id: 7, name: "Dodge", logo: dodge, url: "/brands/dodge" },
        { id: 8, name: "Chevrolet", logo: chevrolet, url: "/brands/chevrolet" },
        { id: 9, name: "Cadillac", logo: cadillac, url: "/brands/cadillac" },
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
                                    priority={brand.id <= 4}
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default American