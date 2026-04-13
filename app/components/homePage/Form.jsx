import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react';
import { FaServicestack, FaUser } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";
const Form = () => {
  const t = useTranslations('landingPage.form');
  const locale = useLocale(); // You'll need to import useLocale from 'next-intl'
  
  return (
    <div className={`mt-3 ${locale === "ar" ? " ml-52" : ""}`}>
      {/* RIGHT FORM (Desktop) */}
      <div className=" mt-12 md:mt-0 w-full mx-auto p">
         
        <div className="bg-[#f8f8f815] backdrop-blur-lg rounded-2xl  px-6 pb-8 pt-4 transition-colors">
         <h2 className='text-[24px] text-white font-semibold uppercase'>Get a quote</h2>
          <form className="space-y-5 mt-4">
               <div className='w-full px-4 py-2 flex  items-center gap-x-3 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                <FaUser className=' text-[15px] text-gray-500' />
                <input
              type="text"
              placeholder={t('placeholders.fullName')}
              className=" w-full focus:outline-none border-none"
            />
               </div>

               <div className=' flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                   <Mail size={18} className=' text-gray-500' />
                      <input
              type="email"
              placeholder={t('placeholders.email')}
              className=" w-full focus:outline-none border-none"
            />
               </div>

       
              <div className=' flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                <Phone size={18} className=' text-gray-500' />
                    <input
              type="tel"
              placeholder={t('placeholders.phone')}
              className=" w-full focus:outline-none border-none"
            />
              </div>
         

               <div className='flex items-center justify-between gap-x-3'>
                   <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                            <MdLocationPin className=' text-[15px] text-gray-500' />
  <input
              type="location"
              placeholder="Location"
              className="w-full focus:outline-none border-none"
            />
                   </div>
                      <div className='flex items-center gap-x-3 w-full px-4 py-2 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition'>
                            <FaServicestack className=' text-[15px] text-gray-500' />
                             <select className='w-full focus:outline-none border-none'>
                              <option  className=' bg-black text-white' value="Select Services" disabled selected>Select Services</option>
                              <option value="Tyre Replacement" className=' bg-black text-white'>Tyre Replacement</option>
                              <option value="Battery Replacement" className=' bg-black text-white'>Battery Replacement</option>
                               <option value="Engine Service" className=' bg-black text-white'>Engine Service</option>

                             </select>
                   </div>
               </div>
            

            {/* Message */}
            <div>
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full px-4 py-2 bg-[#00000029]  text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none transition"
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