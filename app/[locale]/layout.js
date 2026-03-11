import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from '../components/providers';
import './globals.css';
import Header from '../components/homePage/Header';
import Footer from '../components/homePage/Footer';

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Use notFound() instead of redirect for 404 pages
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Set direction based on locale
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={direction === 'rtl' ? 'rtl' : 'ltr'}>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <Header />
            {children}
            <Footer />
            </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}