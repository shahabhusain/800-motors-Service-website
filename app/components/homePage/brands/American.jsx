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

export default American