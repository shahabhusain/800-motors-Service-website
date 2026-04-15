"use client"
import { useLocale } from 'next-intl';
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaCar, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const Location = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const engContent = {
    title: "How to contact 800 Motor Guru for car servicing packages in Dubai?",
    description: "800 Motor Guru provides multiple contact options for booking car servicing packages in Dubai. Customers can call, WhatsApp, email, or use online booking to schedule service.",
    contactInfo: "Contact Information",
    phone: "Phone:",
    phoneNumber: "800 648 78",
    whatsapp: "WhatsApp:",
    whatsappNumber: "+971 800 64878",
    email: "Email:",
    emailAddress: "info@800motorguru.com",
    service: "Service:",
    serviceText: "Across Dubai with free pick-up and drop-off",
    callNow: "Call Now",
    whatsappNow: "WhatsApp Now",
    emailNow: "Email Now",
    getDirections: "Get Directions",
    ourLocation: "Our Location"
  };

  const arabicContent = {
    title: "كيفية الاتصال بـ 800 Motor Guru للحصول على باقات خدمة السيارات في دبي؟",
    description: "يوفر 800 Motor Guru خيارات اتصال متعددة لحجز باقات خدمة السيارات في دبي. يمكن للعملاء الاتصال أو التواصل عبر واتساب أو البريد الإلكتروني أو استخدام الحجز عبر الإنترنت لتحديد موعد الخدمة.",
    contactInfo: "معلومات الاتصال",
    phone: "الهاتف:",
    phoneNumber: "800 648 78",
    whatsapp: "واتساب:",
    whatsappNumber: "+971 800 64878",
    email: "البريد الإلكتروني:",
    emailAddress: "info@800motorguru.com",
    service: "الخدمة:",
    serviceText: "في جميع أنحاء دبي مع خدمة الاستلام والتوصيل المجانية",
    callNow: "اتصل الآن",
    whatsappNow: "واتساب الآن",
    emailNow: "أرسل بريدًا",
    getDirections: "احصل على الاتجاهات",
    ourLocation: "موقعنا"
  };

  const content = locale === "en" ? engContent : arabicContent;

  return (
    <div className='dark:bg-gray-950 bg-gray-50 py-20 border-b border-gray-200 dark:border-gray-800'>
      <div 
        className="min-h-screen"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FaPhone className="text-white" />
                  {content.contactInfo}
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl  transition-all duration-300">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full transition-colors duration-300">
                    <FaPhone className="text-orange-600 dark:text-orange-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{content.phone}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{content.phoneNumber}</p>
                    <button 
                      onClick={() => window.location.href = 'tel:80064878'}
                      className="mt-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium transition-colors"
                    >
                      {content.callNow} →
                    </button>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl  transition-all duration-300">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full transition-colors duration-300">
                    <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{content.whatsapp}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{content.whatsappNumber}</p>
                    <button 
                      onClick={() => window.open('https://wa.me/97180064878', '_blank')}
                      className="mt-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors"
                    >
                      {content.whatsappNow} →
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl   transition-all duration-300">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full transition-colors duration-300">
                    <FaEnvelope className="text-red-600 dark:text-red-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{content.email}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{content.emailAddress}</p>
                    <button 
                      onClick={() => window.location.href = 'mailto:info@800motorguru.com'}
                      className="mt-2 text-red-600 dark:text-red-400 hover:text-red-700  text-sm font-medium transition-colors"
                    >
                      {content.emailNow} →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white" />
                  {content.ourLocation}
                </h2>
              </div>
              
              <div className="p-4">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789012!2d55.2288776!3d25.1312301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61996b952e8f%3A0xa6520e0352480424!2s800MotorGuru%20Auto%20Repair%20Services!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="800MotorGuru Location"
                    className="w-full h-96 dark:opacity-90"
                  ></iframe>
                </div>
                
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=800MotorGuru+Auto+Repair+Services+Dubai', '_blank')}
                  className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-700 hover:from-orange-700 hover:to-orange-800 dark:hover:from-orange-600 dark:hover:to-orange-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <FaDirections />
                  {content.getDirections}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;