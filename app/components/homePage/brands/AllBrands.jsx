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
import rollsroyce from '@/public/brands/rolls-royce.jpg'
import mini from '@/public/brands/mini.jpg'
import mg from '@/public/brands/mg.jpg'
import mclaren from '@/public/brands/mclaren.jpg'
import landrover from '@/public/brands/land-rover.jpg'
import jaguar from '@/public/brands/jaguar.jpg'
import bentley from '@/public/brands/bentley.jpg'
import renault from '@/public/brands/renault.jpg'
import peugeot from '@/public/brands/peugeot.jpg'
import citroen from '@/public/brands/citroen.jpg'
import bugatti from '@/public/brands/bugatti.jpg'
import volkswagen from '@/public/brands/volkswagen.jpg'
import porsche from '@/public/brands/porsche.jpg'
import mercedes from '@/public/brands/mercedes.jpg'
import bmw from '@/public/brands/bmw.jpg'
import audi from '@/public/brands/audi.jpg'
import honda from '@/public/brands/honda.jpg'
import infiniti from '@/public/brands/infiniti.jpg'
import lexus from '@/public/brands/lexus.jpg'
import mazda from '@/public/brands/mazda.jpg'
import mitsubishi from '@/public/brands/mitsubishi.jpg'
import nissan from '@/public/brands/nissan.jpg'
import suzuki from '@/public/brands/suzuki.jpg'
import toyota from '@/public/brands/toyota.jpg'
import skoda from '@/public/brands/skoda.jpg'
import maserati from '@/public/brands/maserati.jpg'
import lamborghini from '@/public/brands/lamborghini.jpg'
import kia from '@/public/brands/kia.jpg'
import hyundai from '@/public/brands/hyundai.jpg'
import geely from '@/public/brands/geely.jpg'
import fiat from '@/public/brands/fiat.jpg'
import ferrari from '@/public/brands/ferrari.jpg'
import Image from 'next/image'
import Link from 'next/link'
const AllBrands = () => {
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
          { id: 1, name: "Rolls-Royce", logo: rollsroyce, url: "/brands/rolls-royce", description: "Ultra-luxury Rolls-Royce servicing & care" },
    { id: 2, name: "Mini", logo: mini, url: "/brands/mini", description: "Mini car maintenance and repair services" },
    { id: 3, name: "MG", logo: mg, url: "/brands/mg", description: "MG vehicle servicing and diagnostics" },
    { id: 4, name: "McLaren", logo: mclaren, url: "/brands/mclaren", description: "High-performance McLaren service experts" },
    { id: 5, name: "Land Rover", logo: landrover, url: "/brands/land-rover", description: "Land Rover SUV and off-road servicing" },
    { id: 6, name: "Jaguar", logo: jaguar, url: "/brands/jaguar", description: "Jaguar luxury vehicle repair and care" },
    { id: 7, name: "Bentley", logo: bentley, url: "/brands/bentley", description: "Bentley premium maintenance and detailing" },
     { id: 1, name: "Renault", logo: renault, url: "/brands/renault", description: "Renault vehicle repair and maintenance" },
    { id: 2, name: "Peugeot", logo: peugeot, url: "/brands/peugeot", description: "Peugeot car servicing and diagnostics" },
    { id: 3, name: "Citroen", logo: citroen, url: "/brands/citroen", description: "Citroen comfort-focused car care" },
    { id: 4, name: "Bugatti", logo: bugatti, url: "/brands/bugatti", description: "Bugatti hypercar service and precision care" },
     { id: 1, name: "Volkswagen", logo: volkswagen, url: "/brands/volkswagen", description: "Volkswagen reliable maintenance and repair services" },
        { id: 2, name: "Porsche", logo: porsche, url: "/brands/porsche", description: "Porsche high-performance and luxury servicing" },
        { id: 3, name: "Mercedes", logo: mercedes, url: "/brands/mercedes", description: "Mercedes-Benz premium vehicle care and diagnostics" },
        { id: 4, name: "BMW", logo: bmw, url: "/brands/bmw", description: "BMW performance-focused maintenance and repair" },
        { id: 5, name: "Audi", logo: audi, url: "/brands/audi", description: "Audi advanced technology and luxury servicing" },
            { id: 1, name: "Honda", logo: honda, url: "/brands/honda", description: "Reliable Honda car repair and servicing" },
            { id: 2, name: "Infiniti", logo: infiniti, url: "/brands/infiniti", description: "Infiniti luxury vehicle maintenance" },
            { id: 3, name: "Lexus", logo: lexus, url: "/brands/lexus", description: "Premium Lexus car care and repair" },
            { id: 4, name: "Mazda", logo: mazda, url: "/brands/mazda", description: "Mazda performance and maintenance services" },
            { id: 5, name: "Mitsubishi", logo: mitsubishi, url: "/brands/mitsubishi", description: "Mitsubishi vehicle servicing solutions" },
            { id: 6, name: "Nissan", logo: nissan, url: "/brands/nissan", description: "Nissan car repair and diagnostics" },
            { id: 7, name: "Suzuki", logo: suzuki, url: "/brands/suzuki", description: "Suzuki compact car servicing" },
            { id: 8, name: "Toyota", logo: toyota, url: "/brands/toyota", description: "Toyota reliable maintenance and repair" },
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
    <div className=' h-[400px] overflow-y-auto custom-scroll'>
         <div className="w-full px-4 sm:px-6 md:px-8">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                {brands.map((brand,index) => (
                    <Link key={index} href={brand.url} className="group">
                        <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full">
                            
                            {/* Logo Container */}
                            <div className="flex flex-col items-center justify-center p-4 sm:p-5 min-h-[140px] sm:min-h-[160px]">
                                {/* Brand Name - Responsive text */}
                                <h2 className='font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-gray-800 dark:text-white text-center'>
                                    {brand.name}
                                </h2>
                                
                                {/* Logo Image */}
                                <div className="relative w-full flex justify-center items-center">
                                    <Image 
                                        className="object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
                                        src={brand.logo} 
                                        alt={brand.name}
                                        width={120}
                                        height={120}
                                        priority={brand.id <= 4} // Load first 4 images with priority
                                    />
                                </div>
                            </div>

                            {/* Hover Description - Mobile optimized */}
                            <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-white text-xs sm:text-sm font-medium">
                                    {brand.description}
                                </p>
                            </div>

                            {/* Touch feedback for mobile */}
                            <div className="absolute inset-0 bg-orange-500/0 active:bg-orange-500/10 transition-colors duration-150 sm:hidden"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllBrands
