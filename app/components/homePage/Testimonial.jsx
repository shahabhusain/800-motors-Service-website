"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaGoogle, FaYoutube, FaTimes, FaPlay } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import auto from '@/public/home/auto.jpeg'
import Image from 'next/image';

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState('google'); // 'google' or 'youtube'
  const [selectedVideo, setSelectedVideo] = useState(null); // For video popup

  const trusted = {
    trustedArrayTitle: "Great service! Highly recommended for everyone looking for quality work.",
    trustedArrayName: "John Doe",
    trustedArrayDate: "March 15, 2024",
    postedON: "Posted on"
  };

  // Sample Google Reviews Data
  const googleReviews = [
    {
      name: "John Doe",
      rating: 5,
      review: "Great service! Highly recommended for everyone looking for quality work.",
      date: "March 15, 2024",
      avatar: "JD"
    },
    {
      name: "Sarah Ahmed",
      rating: 5,
      review: "Professional team and excellent customer service. My car runs like new!",
      date: "March 10, 2024",
      avatar: "SA"
    },
    {
      name: "Mike Wilson",
      rating: 4,
      review: "Quick turnaround time and fair pricing. Very satisfied with the service.",
      date: "March 5, 2024",
      avatar: "MW"
    },
    {
      name: "Emily Chen",
      rating: 5,
      review: "Best auto repair shop in Dubai! They fixed my AC issue in no time.",
      date: "February 28, 2024",
      avatar: "EC"
    },
    {
      name: "David Kumar",
      rating: 5,
      review: "Transparent pricing and honest mechanics. Will definitely come back.",
      date: "February 20, 2024",
      avatar: "DK"
    },
    {
      name: "Lisa George",
      rating: 4,
      review: "Very professional and knowledgeable staff. Great experience overall.",
      date: "February 15, 2024",
      avatar: "LG"
    }
  ];

  // Sample YouTube Video Reviews Data - Simplified version
  const youtubeReviews = [
    {
      videoId: "dQw4w9WgXcQ",
      title: "Best Car Service in Dubai",
      description: "Amazing service quality and professional staff. Highly recommended for everyone looking for quality work.",
      thumbnail: auto
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Auto Repair Center",
      description: "The team here is incorangeibly knowledgeable and fixed my car issues quickly. Best experience ever!",
      thumbnail: auto
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: " Auto Repair Service Dubai",
      description: "Fair pricing, transparent communication, and excellent work quality. Will definitely come back.",
      thumbnail: auto
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Best Car Workshop in Town!",
      description: "From engine repair to AC service, they do it all perfectly. Very satisfied customer!",
      thumbnail: auto
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Excellent Service Experience",
      description: "Quick turnaround time and great customer support. Highly recommended auto shop in Dubai.",
      thumbnail: auto
    },
    {
      videoId: "dQw4w9WgXcQ",
      title: "Why This Is My Go-To Auto Shop",
      description: "Trustworthy mechanics and quality parts used. My car has never run better!",
      thumbnail: auto
    }
  ];

  // Function to open video popup
  const openVideoPopup = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close video popup
  const closeVideoPopup = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
        <div className=' bg-[#f8f8f8] py-20'>
           <div className='md:w-[90%] w-[95%] flex flex-col items-center justify-center mx-auto '>
      <h1 className='uppercase md:text-[36px]  text-[26px] font-semibold text-center'>Testimonials</h1>
        <p className='max-w-4xl text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aperiam impedit a vel ipsum maiores tempora temporibus! Reiciendis accusantium, ullam natus aperiam sapiente eligendi voluptatum, nulla libero sed quidem saepe!</p>
      {/* Two Buttons for Google and YouTube Reviews */}
      <div className='flex justify-center gap-4 mt-8 mb-12'>
        <button
          onClick={() => setActiveTab('google')}
          className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'google' 
              ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg' 
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500'
          }`}
        >
          <FaGoogle size={24} />
          <span>Google Reviews</span>
        </button>

        <button
          onClick={() => setActiveTab('youtube')}
          className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'youtube' 
              ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg' 
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500'
          }`}
        >
          <FaYoutube size={24} />
          <span>YouTube Video Reviews</span>
        </button>
      </div>

      {/* Show different content based on active tab */}
      {activeTab === 'google' ? (
        // Google Reviews Slider
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 24,
            },
          }}
          className="mySwiper w-full mt-6"
        >
          {googleReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='bg-[#F1F3FF] dark:bg-gray-900 md:mb-12 mb-16 p-6 rounded-2xl flex flex-col items-center gap-y-4 hover:shadow-xl transition-shadow duration-300'>
                <div className='text-yellow-500 flex items-center gap-1'>
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} size={20} />
                  ))}
                </div>
                <p className='text-[#00000099] dark:text-white text-[14px] text-center font-normal'>
                  {review.review}
                </p>
                <div className='flex flex-col gap-y-0.5 items-center'>
                  <button className='h-12 w-12 rounded-full text-[18px] font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center'>
                    {review.avatar}
                  </button>
                  <h1 className='text-[14px] font-[600] text-[#000000CC] dark:text-white flex items-center gap-1'>
                    {review.name} 
                    <span className='text-[#FF7800]'>
                      <RiVerifiedBadgeFill />
                    </span>
                  </h1>
                  <p className='text-[10px] font-normal text-[#00000066] dark:text-white'>
                    {review.date}
                  </p>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <span><FcGoogle size={30} /></span> 
                  <h1 className='text-[12px] font-medium text-[#000000CC] dark:text-white flex flex-col gap-y-0.5'>
                    {trusted.postedON} 
                    <span className='text-[#FF7800]'>Google</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // YouTube Video Reviews Slider - Simplified version
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper w-full mt-6"
        >
          {youtubeReviews.map((video, index) => (
            <SwiperSlide key={index}>
              <div 
                className='bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group'
                onClick={() => openVideoPopup(video)}
              >
                {/* Video Thumbnail with Play Icon on Hover */}
                <div className='relative overflow-hidden'>
                  <Image
                    src={video.thumbnail} 
                    alt={video.title}
                    className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  
                  {/* Play Icon Overlay - Shows on Hover */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center '>
                      <FaPlay size={35} className='text-white ml-1' />
                    </div>
                  </div>
                </div>
                
                {/* Content - Only Title and Description */}
                <div className='p-5'>
                  <h3 className='font-bold text-lg mb-3 line-clamp-2 dark:text-white group-hover:text-orange-600 transition-colors duration-300'>
                    {video.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3'>
                    {video.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* YouTube Video Popup Modal */}
      {selectedVideo && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 animate-fadeIn'>
          <div className='relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl'>
            {/* Close Button */}
            <button
              onClick={closeVideoPopup}
              className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-300 hover:rotate-90'
            >
              <FaTimes size={24} />
            </button>
            
            {/* Video Title */}
            <div className='p-4 bg-gradient-to-r from-orange-600 to-orange-700'>
              <h3 className='text-white font-semibold text-lg'>{selectedVideo.title}</h3>
            </div>
            
            {/* YouTube Video Embed */}
            <div className='relative' style={{ paddingBottom: '56.25%' }}>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Description */}
            <div className='p-4 bg-gray-50 dark:bg-gray-800'>
              <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}



      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
        </div>
  )
}

export default Testimonial