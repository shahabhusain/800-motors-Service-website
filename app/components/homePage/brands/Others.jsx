import React from 'react'
import skoda from '@/public/brands/skoda.jpg'
import maserati from '@/public/brands/maserati.jpg'
import lamborghini from '@/public/brands/lamborghini.jpg'
import kia from '@/public/brands/kia.jpg'
import hyundai from '@/public/brands/hyundai.jpg'
import geely from '@/public/brands/geely.jpg'
import fiat from '@/public/brands/fiat.jpg'
import ferrari from '@/public/brands/ferrari.jpg'
import mg from '@/public/brands/mg.jpg'
import porsche from '@/public/brands/porsche.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Others = () => {
const brands = [
    { id: 1, name: "Skoda", logo: skoda, url: "/brands/skoda", description: "Skoda reliable car maintenance and repair" },
    { id: 2, name: "Maserati", logo: maserati, url: "/brands/maserati", description: "Maserati luxury performance servicing" },
    { id: 3, name: "Lamborghini", logo: lamborghini, url: "/brands/lamborghini", description: "Lamborghini supercar service experts" },
    { id: 4, name: "Kia", logo: kia, url: "/brands/kia", description: "Kia vehicle servicing and diagnostics" },
    { id: 5, name: "Hyundai", logo: hyundai, url: "/brands/hyundai", description: "Hyundai car repair and maintenance" },
    { id: 6, name: "Geely", logo: geely, url: "/brands/geely", description: "Geely vehicle care and servicing solutions" },
    { id: 7, name: "Fiat", logo: fiat, url: "/brands/fiat", description: "Fiat compact car repair and servicing" },
    { id: 8, name: "MG", logo: mg, url: "/brands/mg", description: "MG vehicle servicing and diagnostics" },
    { id: 9, name: "Porsche", logo: porsche, url: "/brands/porsche", description: "Porsche performance and luxury servicing" },
    { id: 10, name: "Ferrari", logo: ferrari, url: "/brands/ferrari", description: "Ferrari elite supercar maintenance and care" },
]
    
    return (
           <div className=" grid grid-cols-5 w-[85%] mx-auto gap-6">
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

export default Others