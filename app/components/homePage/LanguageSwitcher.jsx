import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    // Replace the current locale in the pathname with the new locale
    const currentPathname = pathname || '/';
    const segments = currentPathname.split('/');
    
    // If the first segment is a locale, replace it
    if (segments[1] && routing.locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      // If no locale in path, add it
      segments.splice(1, 0, newLocale);
    }
    
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    switchLocale(newLocale);
  };

  return (
    <div className="flex items-center gap-2">
      {/* <button
        onClick={toggleLanguage}
        className="px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-sm 
                 text-gray-900 dark:text-white/90 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors
                 flex items-center gap-2"
        aria-label="Switch language"
      >
        <span>{locale === 'en' ? '🇺🇸' : '🇦🇪'}</span>
        <span>{locale === 'en' ? 'EN' : 'AR'}</span>
      </button> */}
      
     
      <div className="hidden md:flex gap-1">
        <button
          onClick={() => switchLocale('en')}
          className={`px-2 py-1 text-sm font-medium rounded-sm transition-colors ${
            locale === 'en' 
              ? 'bg-orange-600 text-white' 
              : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
          }`}
        >
          EN
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => switchLocale('ar')}
          className={`px-2 py-1 text-sm font-medium rounded-sm transition-colors ${
            locale === 'ar' 
              ? 'bg-orange-600 text-white' 
              : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
          }`}
        >
          AR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;