"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaGoogle, FaYoutube } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState('google');
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

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

  // Working YouTube Shorts/Reels URLs only
  const reviewVideos = [
    {
      url: "https://youtube.com/shorts/W86FsEsACnE?si=gfh54y7L1VBveHoo"
    },
    {
      url: "https://youtube.com/shorts/NObnPcmkxqU?si=d7WzUOZqi5JwhAfj"
    },
    {
      url: "https://youtube.com/shorts/-j41rR5NoQI?si=w_ns4OCGQsp-pp7g"
    },
    {
      url: "https://youtube.com/shorts/jqLAqWkdbGw?si=14rUzmSoI6vQX0ge"
    },
    {
      url: "https://youtube.com/shorts/W86FsEsACnE?si=gfh54y7L1VBveHoo"
    },
  ];

  // Extract video ID from URL
  const getVideoId = (url) => {
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  // Function to stop all videos
  const stopAllVideos = () => {
    Object.keys(videoRefs.current).forEach((key) => {
      if (videoRefs.current[key]) {
        videoRefs.current[key].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };

  // Function to play a specific video
  const playVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  // Handle video click
  const handleVideoClick = (index) => {
    if (playingVideo === index) {
      if (videoRefs.current[index]) {
        videoRefs.current[index].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
      setPlayingVideo(null);
    } else {
      stopAllVideos();
      playVideo(index);
      setPlayingVideo(index);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllVideos();
    };
  }, []);

  return (
    <div className='bg-[#fff] dark:bg-gray-950 py-20'>
      <div className='md:w-[90%] w-[95%] flex flex-col gap-y-3 items-center justify-center mx-auto'>
        <h1 className=' text-4xl md:text-5xl font-bold text-center'>Auto Repair and Maintenance Reviews</h1>
        <p className='max-w-4xl text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam aperiam impedit a vel ipsum maiores tempora temporibus! Reiciendis accusantium, ullam natus aperiam sapiente eligendi voluptatum, nulla libero sed quidem saepe!</p>
        
        <div className='flex justify-center gap-4 mt-8 mb-12'>
          <button
            onClick={() => {
              setActiveTab('google');
              stopAllVideos();
              setPlayingVideo(null);
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'google' 
                ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg' 
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500'
            }`}
          >
            <span>Google Reviews</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('youtube');
              stopAllVideos();
              setPlayingVideo(null);
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'youtube' 
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' 
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-red-500'
            }`}
          >
            <span>Video Reviews</span>
          </button>
        </div>

        {activeTab === 'google' ? (
          <Swiper
            spaceBetween={20}

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
                slidesPerView: 4,
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
                      Posted on 
                      <span className='text-[#FF7800]'>Google</span>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper w-full mt-6"
          >
            {reviewVideos.map((video, index) => {
              const videoId = getVideoId(video.url);
              return (
                <SwiperSlide key={index}>
                  <div 
                    className='rounded-2xl mb-12 overflow-hidden shadow-lg cursor-pointer bg-black'
                    onClick={() => handleVideoClick(index)}
                  >
                    {videoId ? (
                      <iframe
                        ref={el => videoRefs.current[index] = el}
                        className='w-full aspect-[9/16]'
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                        title={`Customer Review ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className='w-full aspect-[9/16] bg-gray-900 flex items-center justify-center'>
                        <p className='text-white text-center'>Video unavailable</p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default Testimonial