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

export default British