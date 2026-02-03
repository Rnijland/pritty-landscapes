import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

// Inter font as specified in design brief
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Pritty Landscapes | Award-Winning Landscape Design & Shoreline Protection',
    template: '%s | Pritty Landscapes',
  },
  description:
    "Ontario's only award-winning shoreline contractor. Luxury landscape design and build services for Georgian Bay, Muskoka, and the GTA. Naturally refined, inspired by water.",
  keywords: [
    'landscape design',
    'shoreline protection',
    'Georgian Bay',
    'Muskoka',
    'luxury landscaping',
    'award-winning',
    'Ontario',
    'waterfront design',
    'Pritty Landscapes',
  ],
  authors: [{ name: 'Pritty Landscapes Inc.' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Pritty Landscapes',
    title: 'Pritty Landscapes | Award-Winning Landscape Design & Shoreline Protection',
    description:
      "Ontario's only award-winning shoreline contractor. Luxury landscape design and build services.",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Preload hero video for faster loading */}
        <link rel="preload" href="/videos/homepage-hero.mp4" as="video" type="video/mp4" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans bg-background text-foreground overscroll-none antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
