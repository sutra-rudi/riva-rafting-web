import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import '@splidejs/react-splide/css';
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
import { GlobalContextProvider } from './contexts/store';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';

const AppHeader = dynamic(() => import('./components/AppHeader'));
const AppFooter = dynamic(() => import('./components/AppFooter'));
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  interactiveWidget: 'overlays-content',
  colorScheme: 'light',
  themeColor: '#eeeeee',
};

export const metadata: Metadata = {
  title: {
    default: 'Riva Rafting',
    template: '%s | Riva Rafting',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <Toaster />
        <Suspense fallback={<Loading />}>
          <GlobalContextProvider>
            <AppHeader />
            <Providers>{children}</Providers>
            <AppFooter />
          </GlobalContextProvider>
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.RIVA_RAFTING_GOOGLE_ANALYTICS_CODE!} />
    </html>
  );
}
