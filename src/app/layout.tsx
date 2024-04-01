import type { Metadata, Viewport } from 'next';
import { Inter, Ubuntu } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

// const inter = Inter({ subsets: ['latin'] });
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

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
    default: 'Riva Rafting',
    template: '%s | Riva Rafting',
  },
  openGraph: {
    type: 'website',

    title: 'Riva Rafting',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
