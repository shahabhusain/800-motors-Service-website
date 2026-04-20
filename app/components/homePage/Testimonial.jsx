"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { FaStar, FaStarHalfAlt, FaGoogle, FaYoutube, FaQuoteLeft, FaThumbsUp, FaShareAlt, FaRegHeart } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonial = ({ span = "Auto Repair and Maintenance Reviews" }) => {
  const [activeTab, setActiveTab] = useState('google');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [likedReviews, setLikedReviews] = useState({});
  const [expandedReview, setExpandedReview] = useState(null);
  const videoRefs = useRef({});

  const googleReviews = [
    {
      name: "Ahmad Halim",
      rating: 5,
      review: "I recently had an issue with my car battery, and I was extremely impressed with the service I received. The technician * Hasanen * was professional, knowledgeable, and very efficient in diagnosing and fixing the problem quickly.",
      date: "One Month Ago",
      avatar: "AH",
      location: "Dubai, UAE",
      car: "Mercedes-Benz E-Class",
      service: "Battery Replacement"
    },
    {
      name: "Vareena Kumar",
      rating: 5,
      review: "I recently had an issue with my car, and I was dreading the whole repair process. A friend highly recommended Auto Garage All Star, and I can see why. From the moment I called, they were helpful and accommodating. They listened to my concerns without rushing me and scheduled a time for me to bring the car in that worked perfectly with my schedule.",
      date: "Six Months Ago",
      avatar: "VK",
      location: "Sharjah, UAE",
      car: "Toyota Camry",
      service: "General Maintenance"
    },
    {
      name: "Zain Sheikh",
      rating: 5,
      review: "My car's starter motor stopped working and I honestly didn't expect this level of service. They towed my car down from the 3rd floor parking, took it on recovery to the workshop, fixed the issue, and delivered it back to me again on recovery.",
      date: "Three Months Ago",
      avatar: "ZS",
      location: "Dubai, UAE",
      car: "BMW 5 Series",
      service: "Starter Motor Repair"
    },
    {
      name: "Nurulhuda Nordin",
      rating: 5,
      review: "I'm very impressed with the service provided by Ahsan. It was close to midnight, I was in the mall parking with my 3 children. I had flat tyre with my car and he came promptly, changed the tyre and his service is very professional. Highly recommend. Thank you Ahsan for the great assistance and service!",
      date: "Four Months Ago",
      avatar: "NN",
      location: "Abu Dhabi, UAE",
      car: "Honda Civic",
      service: "Emergency Tyre Change"
    },
    {
      name: "Alisa Baulanger",
      rating: 5,
      review: "We had a flat tire at home and someone came very quickly to replace it with the spare wheel. In less than two hours, the car was back home with a brand-new tire. Fast and excellent service, highly recommended! Tourists from Luxembourg 🇱🇺",
      date: "Four Months Ago",
      avatar: "AB",
      location: "Dubai, UAE",
      car: "Rental Car",
      service: "Emergency Tyre Change"
    }
  ];

  const reviewVideos = [
    { url: "https://youtube.com/shorts/0zrFIpVrRYc?si=yscA8NlEYODiYPYw", title: "Customer Experience" },
    { url: "https://youtube.com/shorts/sgkdjISTnp8?si=1sZew8OW3aLZ1H6G", title: "Service Review" },
    { url: "https://youtube.com/shorts/EAVoPk5Xjt0?si=aicsOpakntX6lXDQ", title: "Customer Testimonial" },
    { url: "https://youtube.com/shorts/Nk6NFCvQPrk?si=VzYHJHhdJiPe4U-w", title: "Quality Service" },
  ];

  const getVideoId = (url) => {
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const stopAllVideos = () => {
    Object.keys(videoRefs.current).forEach((key) => {
      if (videoRefs.current[key]) {
        videoRefs.current[key].contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };

  const playVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  const handleVideoClick = (index) => {
    if (playingVideo === index) {
      if (videoRefs.current[index]) {
        videoRefs.current[index].contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
      setPlayingVideo(null);
    } else {
      stopAllVideos();
      playVideo(index);
      setPlayingVideo(index);
    }
  };

  const handleLike = (index) => {
    setLikedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleReviewExpand = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={18} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" size={18} />);
    }
    return stars;
  };

  useEffect(() => {
    return () => {
      stopAllVideos();
    };
  }, []);

  return (
    <div className='  dark:bg-gray-950 dark:border-b-[#f8f8f82e] dark:border-b-[1px] mt-12 dark:mt-0 md:pb-20 dark:py-20 pb-10'>
      <div className='md:w-[90%] w-[95%] flex flex-col gap-y-3 items-center justify-center mx-auto'>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mt-2'>
            {span}
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-4 rounded-full'></div>
        </motion.div>

        {/* Tab Buttons */}
        <div className='flex justify-center gap-4 mt-4 mb-12'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab('google');
              stopAllVideos();
              setPlayingVideo(null);
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'google' 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-orange-900/30' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500'
            }`}
          >
            <FcGoogle className="md:block hidden" size={24} />
            <span>Google Reviews</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab('youtube');
              stopAllVideos();
              setPlayingVideo(null);
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'youtube' 
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200 dark:shadow-red-900/30' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500'
            }`}
          >
            <FaYoutube className="md:block hidden" size={24} />
            <span>Video Reviews</span>
          </motion.button>
        </div>

        {/* Content Section */}
        <AnimatePresence mode='wait'>
          {activeTab === 'google' ? (
            <motion.div
              key="google"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='w-full'
            >
              <Swiper
                spaceBetween={20}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 15 },
                  640: { slidesPerView: 1.5, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 25 },
                  1280: { slidesPerView: 3.5, spaceBetween: 30 },
                }}
                className="mySwiper w-full mt-6 pb-12"
              >
                {googleReviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 relative overflow-hidden group'
                    >
                      {/* Quote Icon Background */}
                      <div className='absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300'>
                        <FaQuoteLeft size={80} className='text-orange-500' />
                      </div>

                      {/* Rating Stars */}
                      <div className='flex items-center gap-1 mb-4'>
                        {renderStars(review.rating)}
                        <span className='text-gray-500 dark:text-gray-400 text-sm ml-2'>{review.rating}.0</span>
                      </div>

                      {/* Review Text */}
                      <div className='mb-4'>
                        <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                          {expandedReview === index || review.review.length <= 150 
                            ? review.review 
                            : `${review.review.substring(0, 150)}...`}
                          {review.review.length > 150 && (
                            <button 
                              onClick={() => toggleReviewExpand(index)}
                              className='text-orange-500 hover:text-orange-600 ml-1 font-semibold text-sm'
                            >
                              {expandedReview === index ? 'Show less' : 'Read more'}
                            </button>
                          )}
                        </p>
                      </div>

                      {/* Service Tags */}
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {review.service && (
                          <span className='text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full'>
                            {review.service}
                          </span>
                        )}
                        {review.car && (
                          <span className='text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full'>
                            {review.car}
                          </span>
                        )}
                      </div>

                      {/* User Info */}
                      <div className='flex items-center gap-3 mb-3'>
                        <div className='relative'>
                          <div className='h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                            {review.avatar}
                          </div>
                          <div className='absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5'>
                            <RiVerifiedBadgeFill className='text-white text-[10px]' />
                          </div>
                        </div>
                        <div>
                          <h3 className='font-bold text-gray-800 dark:text-white flex items-center gap-1'>
                            {review.name}
                            <RiVerifiedBadgeFill className='text-orange-500 text-sm' />
                          </h3>
                          <p className='text-xs text-gray-500 dark:text-gray-400'>{review.location || 'Customer'}</p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className='flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800'>
                        <div className='flex items-center gap-2'>
                          <FcGoogle size={24} />
                          <div>
                            <p className='text-[10px] text-gray-500 dark:text-gray-400'>Posted on</p>
                            <p className='text-xs font-semibold text-orange-600 dark:text-orange-400'>Google</p>
                          </div>
                        </div>
                  
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none'></div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* View All Reviews Button */}
              <div className='text-center mt-8'>
                <motion.a 
                  href="https://www.google.com/search?sca_esv=1de7a08752d678d6&rlz=1C5GCEM_enPK1174PK1174&sxsrf=ANbL-n7eZ0VaELL8qIO64vIWRJtWIPU7YQ:1776670506219&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOStZqP8-ij6L6lkAq3v9LCITYMluAVZ-jyYZ8zuXj3QMJkaxYHzL1WJd2gvRDfrfy3h1mTFTqLt48Bh7UXAsyrcp8OTlq-m4VQ8VTCuhRGpGBCYgCNwa8LbeL_q6hj4slGXGGdY%3D&q=800MotorGuru+Auto+Repair+Services+Reviews&sa=X&ved=2ahUKEwjgxZ-z9fuTAxXEQkEAHccJHKMQ0bkNegQIKRAH&biw=1440&bih=778&dpr=2" 
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all'
                >
                  <FaGoogle />
                  View All Google Reviews
                  <FaThumbsUp />
                </motion.a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="youtube"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='w-full'
            >
              <Swiper
                spaceBetween={20}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 15 },
                  640: { slidesPerView: 1.5, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 25 },
                  1280: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="mySwiper w-full mt-6 pb-12"
              >
                {reviewVideos.map((video, index) => {
                  const videoId = getVideoId(video.url);
                  return (
                    <SwiperSlide key={index}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className='rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                        onClick={() => handleVideoClick(index)}
                      >
                        {videoId ? (
                          <div className='relative'>
                            <iframe
                              ref={el => videoRefs.current[index] = el}
                              className='w-full aspect-[9/16]'
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                            {playingVideo !== index && (
                              <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
                                <div className='w-16 h-16 rounded-full bg-red-600 flex items-center justify-center animate-pulse'>
                                  <FaYoutube size={30} className='text-white' />
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className='w-full aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
                            <p className='text-white text-center px-4'>Video unavailable</p>
                          </div>
                        )}
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Testimonial