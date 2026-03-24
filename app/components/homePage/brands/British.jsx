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
        { id: 1, name: "Rolls-Royce", logo: rollsroyce, url: "/brands/rolls-royce" },
        { id: 2, name: "Mini", logo: mini, url: "/brands/mini" },
        { id: 3, name: "MG", logo: mg, url: "/brands/mg" },
        { id: 4, name: "McLaren", logo: mclaren, url: "/brands/mclaren" },
        { id: 5, name: "Land Rover", logo: landrover, url: "/brands/land-rover" },
        { id: 6, name: "Jaguar", logo: jaguar, url: "/brands/jaguar" },
        { id: 7, name: "Bentley", logo: bentley, url: "/brands/bentley" },
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

export default British