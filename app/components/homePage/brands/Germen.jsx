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
    { id: 1, name: "Volkswagen", logo: volkswagen, url: "/brands/volkswagen", description: "Volkswagen reliable maintenance and repair services" },
    { id: 2, name: "Porsche", logo: porsche, url: "/brands/porsche", description: "Porsche high-performance and luxury servicing" },
    { id: 3, name: "Mercedes", logo: mercedes, url: "/brands/mercedes", description: "Mercedes-Benz premium vehicle care and diagnostics" },
    { id: 4, name: "BMW", logo: bmw, url: "/brands/bmw", description: "BMW performance-focused maintenance and repair" },
    { id: 5, name: "Audi", logo: audi, url: "/brands/audi", description: "Audi advanced technology and luxury servicing" },
]
    
    return (
        <div className=" grid grid-cols-5 w-[85%] mx-auto gap-6 ">
            {brands.map((brand) => (
                <Link key={brand.id} href={brand.url} className="group">
                    
                    <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-[160px] md:w-[200px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                        
                        {/* Logo */}
                        <div className="flex flex-col items-center gap-y-2 justify-center h-[120px]">
                            <h2 className=' font-semibold mt-3'>{brand.name}</h2>
                            <Image 
                                className="object-contain w-[100px]"
                                src={brand.logo} 
                                alt={brand.name}
                                width={120}
                                height={120}
                            />
                        </div>

                        {/* Hover Description */}
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-3 opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-sm">
                                {brand.description}
                            </p>
                        </div>

                    </div>

                </Link>
            ))}
        </div>
    )
}

export default German