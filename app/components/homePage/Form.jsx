import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";
const Form = () => {
  const t = useTranslations('landingPage.form');
  const locale = useLocale(); // You'll need to import useLocale from 'next-intl'
  
  return (
    <div className={`mt-3 ${locale === "ar" ? " ml-52" : ""}`}>
      {/* RIGHT FORM (Desktop) */}
      <div className=" mt-12 md:mt-0 w-full mx-auto p">
         
        <div className="bg-[#F8F8F8] dark:bg-gray-900 backdrop-blur-lg rounded-2xl  px-6 pb-8 pt-4 transition-colors">
         <h1 className='text-[24px] font-semibold'>Get a quote</h1>
          <form className="space-y-5 mt-4">
               <div className='w-full px-4 py-2 flex items-center gap-x-3 bg-white dark:bg-gray-800  text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                <FaUser className=' text-[15px] text-gray-500' />
                <input
              type="text"
              placeholder={t('placeholders.fullName')}
              className=" w-full focus:outline-none border-none"
            />
               </div>

               <div className=' flex items-center gap-x-3 w-full px-4 py-2 bg-white dark:bg-gray-800  text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                   <Mail size={18} className=' text-gray-500' />
                      <input
              type="email"
              placeholder={t('placeholders.email')}
              className=" w-full focus:outline-none border-none"
            />
               </div>

       
              <div className=' flex items-center gap-x-3 w-full px-4 py-2 bg-white dark:bg-gray-800  text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                <Phone size={18} className=' text-gray-500' />
                    <input
              type="tel"
              placeholder={t('placeholders.phone')}
              className=" w-full focus:outline-none border-none"
            />
              </div>
         

               <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-white dark:bg-gray-800  text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                <MdLocationPin className=' text-[15px] text-gray-500' />
  <input
              type="location"
              placeholder="Location"
              className="w-full focus:outline-none border-none"
            />
               </div>
            

            {/* Services
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t('labels.selectServices')}
              </label>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 rounded-md text-sm font-medium cursor-pointer hover:bg-orange-200 dark:hover:bg-orange-800 transition">
                  {t('services.battery')}
                </span>
                <span className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  {t('services.tyre')}
                </span>
                <span className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  {t('services.mechanics')}
                </span>
                <span className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-md text-sm font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  {t('services.other')}
                </span>
              </div>
            </div> */}

            {/* Message */}
            <div>
              {/* <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {t('labels.message')}
              </label> */}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800  text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-lg"
            >
              {t('submitButton')} 
              {locale === 'ar' ? 
                <ArrowLeft className="w-5 h-5" /> : 
                <ArrowRight className="w-5 h-5" />
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;