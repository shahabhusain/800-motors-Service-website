'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaBatteryFull, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import heroImg from "@/public/home/support.webp";

const Filter = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      title: "Car Repair, Maintenance and Servicing Offers in Dubai",
      getOffer: "Get This Offer",
      callNow: "Call Now",
      limitedTime: "Limited Time Offer"
    },
    ar: {
      title: "عروض البطارية في دبي",
      getOffer: "احصل على هذا العرض",
      callNow: "اتصل الآن",
      limitedTime: "عرض محدود الوقت"
    }
  };

  const t = content[locale];

  const batteryOffers = [
    {
      id: 1,
      title: "Premium Battery Service",
      discount: "25% OFF",
      description: "Complete battery testing and replacement with warranty",
      price: "299 AED",
      originalPrice: "399 AED",
      offers: ["Battery Testing", "Free Installation", "1 Year Warranty", "24/7 Support"]
    },
    {
      id: 2,
      title: "Ultra Power Battery Deal",
      discount: "30% OFF",
      description: "High performance battery for all car models",
      price: "349 AED",
      originalPrice: "499 AED",
      offers: ["Premium Battery", "Free Checkup", "2 Year Warranty", "Roadside Assistance"]
    },
    {
      id: 3,
      title: "Winter Battery Special",
      discount: "35% OFF",
      description: "Cold weather optimized battery with emergency service",
      price: "279 AED",
      originalPrice: "429 AED",
      offers: ["Winter Battery", "Free Installation", "3 Year Warranty", "Emergency Support"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % batteryOffers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + batteryOffers.length) % batteryOffers.length);
  };

  const currentOffer = batteryOffers[currentIndex];

  return (
    <div className="w-full md:pb-20 py-10 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="px-6 py-10 md:py-10 bg-white dark:bg-gray-950 transition-colors duration-300">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t.title}
          </h1>
          <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300">
            {t.limitedTime}
          </div>
        </div>

        {/* Slider Card */}
        <div className="relative md:w-[89%] mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-xl dark:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
            <div className="flex flex-col-reverse md:flex-row-reverse">
              {/* Image Section */}
              <div className="md:w-[40%] w-full relative h-[300px] md:h-[400px]">
                <Image
                  src={heroImg}
                  alt="Battery Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                  {currentOffer.discount}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-[60%] w-full p-6 md:p-8 flex flex-col gap-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {currentOffer.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                    {currentOffer.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-3 transition-colors duration-300">
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {currentOffer.offers.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.location.href = 'tel:80064878'}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600 hover:from-orange-700 hover:to-orange-800 dark:hover:from-orange-600 dark:hover:to-orange-700 transition-all duration-300 px-6 py-3 rounded-lg font-medium text-white shadow-md hover:shadow-lg"
                  >
                    <FaPhoneAlt />
                    {t.callNow}
                  </button>
                  <a
                    href="https://wa.me/97180064878"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-500 dark:to-green-600 hover:from-green-600 hover:to-green-700 dark:hover:from-green-600 dark:hover:to-green-700 transition-all duration-300 px-6 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute md:left-4 -left-1 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute md:right-4 -right-1 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {batteryOffers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-orange-500 dark:bg-orange-400 w-6' 
                    : 'bg-gray-400 dark:bg-gray-600 w-2 hover:bg-gray-500 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filter;