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
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'overlays-content',
  colorScheme: 'light',
  themeColor: '#eeeeee',
};

export const metadata: Metadata = {
  title: {
    default: 'Riva Rafting - Rafting Adventures in Croatia',
    template: '%s | Riva Rafting',
  },
  openGraph: {
    type: 'website',
    title: 'Riva Rafting',
    // url: 'https://www.example.com',
    description: 'Experience thrilling rafting adventures in Croatia with Riva Rafting.',
    // site_name: 'Riva Rafting',
    siteName: 'Riva Rafting',
    // images: [
    //   {
    //     url: 'https://www.example.com/images/og-image.jpg',
    //     alt: 'Riva Rafting - Rafting Adventures in Croatia',
    //   },
    // ],
  },
  description:
    'Experience thrilling rafting adventures in Croatia with Riva Rafting. Discover the beauty of Croatian rivers and nature while enjoying adrenaline-pumping rafting experiences.',
  creator: 'Riva Rafting',
  keywords: 'rafting, Croatia, adventure, adrenaline, rivers, nature, water sports, outdoor activities',
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
