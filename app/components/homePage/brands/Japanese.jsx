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
        { id: 1, name: "Honda", logo: honda, url: "/brands/honda" },
        { id: 2, name: "Infiniti", logo: infiniti, url: "/brands/infiniti" },
        { id: 3, name: "Lexus", logo: lexus, url: "/brands/lexus" },
        { id: 4, name: "Mazda", logo: mazda, url: "/brands/mazda" },
        { id: 5, name: "Mitsubishi", logo: mitsubishi, url: "/brands/mitsubishi" },
        { id: 6, name: "Nissan", logo: nissan, url: "/brands/nissan" },
        { id: 7, name: "Suzuki", logo: suzuki, url: "/brands/suzuki" },
        { id: 8, name: "Toyota", logo: toyota, url: "/brands/toyota" },
    ]
    
    return (
        <div className="flex items-center justify-center w-[85%] mx-auto gap-4 flex-wrap">
            {brands.map((brand) => (
                <Link 
                    key={brand.id} 
                    href={brand.url} 
                    className='bg-white dark:bg-gray-800 shadow p-4 rounded-xl hover:shadow-lg transition-shadow duration-300'
                >
                    <div className="flex flex-col items-center">
                        <Image 
                            className='md:w-[120px] w-[60px] h-auto rounded-2xl object-contain' 
                            src={brand.logo} 
                            alt={brand.name}
                            width={120}
                            height={120}
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Japanese