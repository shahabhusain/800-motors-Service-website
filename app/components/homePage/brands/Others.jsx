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
        { id: 1, name: "Skoda", logo: skoda, url: "/brands/skoda" },
        { id: 2, name: "Maserati", logo: maserati, url: "/brands/maserati" },
        { id: 3, name: "Lamborghini", logo: lamborghini, url: "/brands/lamborghini" },
        { id: 4, name: "Kia", logo: kia, url: "/brands/kia" },
        { id: 5, name: "Hyundai", logo: hyundai, url: "/brands/hyundai" },
        { id: 6, name: "Geely", logo: geely, url: "/brands/geely" },
        { id: 7, name: "Fiat", logo: fiat, url: "/brands/fiat" },
        { id: 8, name: "MG", logo: mg, url: "/brands/mg" },
        { id: 9, name: "Porsche", logo: porsche, url: "/brands/porsche" },
        { id: 10, name: "Ferrari", logo: ferrari, url: "/brands/ferrari" },
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

export default Others