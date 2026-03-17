import Image from 'next/image';
import React from 'react';
import why from '@/public/services.jpg'
import {
  FaClock,
  FaShieldAlt,
  FaTools,
  FaStar,
  FaUserTie,
  FaMoneyBillWave,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: FaClock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock roadside assistance and emergency repairs whenever you need us.",
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: "Certified Mechanics",
      description: "ASE-certified technicians with years of experience in automotive repair.",
    },
    {
      id: 3,
      icon: FaTools,
      title: "Advanced Equipment",
      description: "State-of-the-art diagnostic tools and modern repair equipment.",
    },
    {
      id: 4,
      icon: FaStar,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our services and repairs.",
    },
    {
      id: 5,
      icon: FaUserTie,
      title: "Expert Team",
      description: "Highly trained professionals dedicated to exceptional service.",
    },
    {
      id: 6,
      icon: FaMoneyBillWave,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees or surprises.",
    }
  ];

  return (
    <div className="w-[85%] max-w-7xl mx-auto py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Why{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Choose Us
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Experience the difference with our premium automotive services and customer-first approach
        </p>
      </div>

         <div className=' flex items-center gap-12 justify-between'>
             <div className="grid w-1/2 grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.id} 
              className="bg-white rounded-2xl border border-gray-300 p-6"
            >
              {/* Icon Container - Orange background only */}
              <div className="w-16 h-16 rounded-xl bg-orange-500 p-3 mb-4">
                <Icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      <Image className=' w-1/2 h-[700px] object-cover rounded-2xl' src={why}  alt='image'/>
         </div>
  
    </div>
  );
};

export default WhyChooseUs;