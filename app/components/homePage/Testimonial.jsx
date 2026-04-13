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
      name: "Ahmad Halim",
      rating: 5,
      review: "I recently had an issue with my car battery, and I was extremely impressed with the service I received. The technician * Hasanen * was professional, knowledgeable, and very efficient in diagnosing and fixing the problem quickly.",
      date: "One Month Ago",
      avatar: "AH"
    },
    {
      name: "Vareena Kumar",
      rating: 5,
      review: "I recently had an issue with my car, and I was dreading the whole repair process. A friend highly recommended Auto Garage All Star, and I can see why. From the moment I called, they were helpful and accommodating. They listened to my concerns without rushing me and scheduled a time for me to bring the car in that worked perfectly with my schedule.",
      date: "Six Months Ago",
      avatar: "VK"
    },
    {
      name: "Zain Sheikh",
      rating: 5,
      review: "My car’s starter motor stopped working and I honestly didn’t expect this level of service. They towed my car down from the 3rd floor parking, took it on recovery to the workshop, fixed the issue, and delivered it back to me again on recovery.",
      date: "Three Months Ago",
      avatar: "ZS"
    },
    {
      name: "Nurulhuda Nordin",
      rating: 5,
      review: "I’m very impressed with the service provided by Ahsan. It was close to midnight, I was in the mall parking with my 3 children. I had flat tyre with my car and he came promptly, changed the tyre and his service is very professional. Highly recommend. Thank you Ahsan for the great assistance and service!",
      date: "Four Months Ago",
      avatar: "NN"
    },
    {
      name: "Alisa Baulanger",
      rating: 5,
      review: "We had a flat tire at home and someone came very quickly to replace it with the spare wheel. In less than two hours, the car was back home with a brand-new tire. Fast and excellent service, highly recommended! Tourists from Luxembourg 🇱🇺",
      date: "Four Months Ago",
      avatar: "AB"
    }
  ];

  // Working YouTube Shorts/Reels URLs only
  const reviewVideos = [
    {
      url: "https://youtube.com/shorts/0zrFIpVrRYc?si=yscA8NlEYODiYPYw"
    },
    {
      url: "https://youtube.com/shorts/sgkdjISTnp8?si=1sZew8OW3aLZ1H6G"
    },
    {
      url: "https://youtube.com/shorts/EAVoPk5Xjt0?si=aicsOpakntX6lXDQ"
    },

    {
      url: "https://youtube.com/shorts/Nk6NFCvQPrk?si=VzYHJHhdJiPe4U-w"
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
    <div className='bg-[#fff] dark:bg-gray-950 md:pb-20 pb-10 dark:border-b-[#f8f8f82e] dark:border-b-[1px]'>
      <div className='md:w-[90%] w-[95%] flex flex-col gap-y-3 items-center justify-center mx-auto'>
        <h2 className=' text-3xl md:text-5xl font-bold text-center'>Auto Repair and Maintenance Reviews</h2>
    
        
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