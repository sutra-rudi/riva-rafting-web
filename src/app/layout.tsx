import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import '@splidejs/react-splide/css';
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
import { GlobalContextProvider } from './contexts/store';
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
    default: 'Riva Rafting - Rafting Adventures in Croatia',
    template: '%s | Riva Rafting',
  },
  generator: `Next.js`,
  metadataBase: new URL(`https://riva-rafting-web-under-construction.vercel.app`),
  openGraph: {
    type: 'website',
    title: 'Riva Rafting',
    description: 'Experience thrilling rafting adventures in Croatia with Riva Rafting.',
    siteName: 'Riva Rafting',
    url: new URL(`https://riva-rafting-web-under-construction.vercel.app`),
    locale: 'hr',
    images: [
      // {
      // url: new URL(``),
      // alt: 'Rafting adventures in Croatia',
      // width: 1200,
      // height: 630,
      // type: 'image/jpeg',
      // },
    ],
    videos: [
      // {
      //   url: new URL(``),
      //   width: 1920,
      //   height: 1080,
      //   type: 'video/mp4',
      //   secureUrl: new URL(``),
      // },
    ],
  },
  description:
    'Experience thrilling rafting adventures in Croatia with Riva Rafting. Discover the beauty of Croatian rivers and nature while enjoying adrenaline-pumping rafting experiences.',
  creator: 'Riva Rafting',
  publisher: 'Vercel',
  keywords: 'rafting, Croatia, adventure, adrenaline, rivers, nature, water sports, outdoor activities',
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  twitter: {
    description:
      'Experience thrilling rafting adventures in Croatia with Riva Rafting. Discover the beauty of Croatian rivers and nature while enjoying adrenaline-pumping rafting experiences.',
    creator: 'Riva Rafting',
    images: [
      // {
      //   url: new URL(``),
      //   alt: 'Rafting adventures in Croatia',
      //   width: 1200,
      //   height: 630,
      //   type: 'image/jpeg',
      // },
    ],
  },
  category: 'Rafting',
  authors: [
    { name: 'Riva Rafting', url: new URL(`https://riva-rafting-web-under-construction.vercel.app`) },
    { name: 'Studio Sutra', url: new URL(`https://www.sutra.hr/`) },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <GlobalContextProvider>
          <Providers>{children}</Providers>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
