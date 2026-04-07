import React from 'react'
import renault from '@/public/brands/renault.jpg'
import peugeot from '@/public/brands/peugeot.jpg'
import citroen from '@/public/brands/citroen.jpg'
import bugatti from '@/public/brands/bugatti.jpg'
import Image from 'next/image'
import Link from 'next/link'

const French = () => {
const brands = [
    { id: 1, name: "Renault", logo: renault, url: "/brands/renault", description: "Renault vehicle repair and maintenance" },
    { id: 2, name: "Peugeot", logo: peugeot, url: "/brands/peugeot", description: "Peugeot car servicing and diagnostics" },
    { id: 3, name: "Citroen", logo: citroen, url: "/brands/citroen", description: "Citroen comfort-focused car care" },
    { id: 4, name: "Bugatti", logo: bugatti, url: "/brands/bugatti", description: "Bugatti hypercar service and precision care" },
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

export default French