import React from 'react'
import volkswagen from '@/public/brands/volkswagen.jpg'
import porsche from '@/public/brands/porsche.jpg'
import mercedes from '@/public/brands/mercedes.jpg'
import bmw from '@/public/brands/bmw.jpg'
import audi from '@/public/brands/audi.jpg'
import Image from 'next/image'
import Link from 'next/link'

const German = () => {
    const brands = [
        { id: 1, name: "Volkswagen", logo: volkswagen, url: "/brands/volkswagen", description: "Volkswagen car services" },
        { id: 2, name: "Porsche", logo: porsche, url: "/brands/porsche", description: "Porsche car services" },
        { id: 3, name: "Mercedes", logo: mercedes, url: "/brands/mercedes", description: "Mercedes car services" },
        { id: 4, name: "BMW", logo: bmw, url: "/brands/bmw", description: "BMW car services" },
        { id: 5, name: "Audi", logo: audi, url: "/brands/audi", description: "Audi car services" },
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
                                    priority={brand.id <= 3}
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default German