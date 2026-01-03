import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default:
      'JIF Reprographics | Blueprint & Large Format Printing Santa Clara',
    template: '%s | JIF Reprographics',
  },
  description:
    'Family-owned reprographics and large-format printing in Santa Clara, CA and Fremont, CA. Fast turnaround, high-precision blueprints, scanning, and digital printing for architects, engineers, contractors, and local businesses across the Bay Area.',
  applicationName: 'JIF Reprographics',
  category: 'Reprographics & Printing',
  keywords: [
    'JIF Reprographics',
    'reprographics',
    'blueprints',
    'blueprint printing',
    'large format printing',
    'architectural printing',
    'engineering prints',
    'plan printing',
    'construction plan printing',
    'scan to PDF',
    'large format scanning',
    'document scanning',
    'digital printing',
    'Santa Clara printing',
    'Fremont printing',
    'Bay Area printing',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'JIF Reprographics | Blueprint & Large Format Printing Santa Clara',
    description:
      'Fast, high-precision reprographics: blueprints, large-format printing, scanning, and digital printing. Serving Santa Clara, Fremont, and the Bay Area.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JIF Reprographics',
  },
  twitter: {
    card: 'summary',
    title: 'JIF Reprographics | Blueprint & Large Format Printing Santa Clara',
    description:
      'Family-owned reprographics serving Santa Clara & Fremont. Fast turnaround blueprints, scanning, and digital printing across the Bay Area.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
