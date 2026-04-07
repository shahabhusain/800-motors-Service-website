import React from 'react'
import honda from '@/public/brands/honda.jpg'
import infiniti from '@/public/brands/infiniti.jpg'
import lexus from '@/public/brands/lexus.jpg'
import mazda from '@/public/brands/mazda.jpg'
import mitsubishi from '@/public/brands/mitsubishi.jpg'
import nissan from '@/public/brands/nissan.jpg'
import suzuki from '@/public/brands/suzuki.jpg'
import toyota from '@/public/brands/toyota.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Japanese = () => {
const brands = [
    { id: 1, name: "Honda", logo: honda, url: "/brands/honda", description: "Reliable Honda car repair and servicing" },
    { id: 2, name: "Infiniti", logo: infiniti, url: "/brands/infiniti", description: "Infiniti luxury vehicle maintenance" },
    { id: 3, name: "Lexus", logo: lexus, url: "/brands/lexus", description: "Premium Lexus car care and repair" },
    { id: 4, name: "Mazda", logo: mazda, url: "/brands/mazda", description: "Mazda performance and maintenance services" },
    { id: 5, name: "Mitsubishi", logo: mitsubishi, url: "/brands/mitsubishi", description: "Mitsubishi vehicle servicing solutions" },
    { id: 6, name: "Nissan", logo: nissan, url: "/brands/nissan", description: "Nissan car repair and diagnostics" },
    { id: 7, name: "Suzuki", logo: suzuki, url: "/brands/suzuki", description: "Suzuki compact car servicing" },
    { id: 8, name: "Toyota", logo: toyota, url: "/brands/toyota", description: "Toyota reliable maintenance and repair" },
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

export default Japanese