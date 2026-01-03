import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CheckCircle, Printer, Presentation } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Printing & Job Site Signage (Bay Area)',
  description:
    'Digital printing for spec books, flyers, presentations, and job site signage. Professional output for local businesses and AEC teams in Santa Clara, Fremont, and the Bay Area.',
  alternates: {
    canonical: '/services/digital-printing',
  },
  keywords: [
    'digital printing',
    'job site signage',
    'spec book printing',
    'flyer printing',
    'presentation printing',
    'Bay Area digital printing',
    'Santa Clara digital printing',
    'Fremont digital printing',
  ],
  openGraph: {
    title: 'Digital Printing & Signage | JIF Reprographics',
    description:
      'Digital printing for spec books, flyers, and job site signage in Santa Clara, Fremont, and the Bay Area.',
    type: 'website',
    url: '/services/digital-printing',
  },
};

export default function DigitalPrintingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Digital Printing & Job Site Signage',
        serviceType: 'Digital printing',
        provider: {
          '@type': 'PrintShop',
          name: 'JIF Reprographics',
          telephone: ['+1-408-982-9554', '+1-510-445-0382'],
          areaServed: 'San Francisco Bay Area',
        },
        areaServed: [
          { '@type': 'Place', name: 'Santa Clara, CA' },
          { '@type': 'Place', name: 'Fremont, CA' },
          { '@type': 'Place', name: 'San Francisco Bay Area' },
        ],
        description:
          'Digital printing for spec books, flyers, presentations, and job site signage with professional, detail-accurate output.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you print spec books and presentations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We print professional documents like spec books and presentations so your team can submit, review, and present with confidence.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you help with job site signage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide job site signage and print materials to help communicate clearly on site and represent your company professionally.',
            },
          },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="flex flex-col">
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <Badge
                variant="outline"
                className="px-4 py-1 text-sm border-blue-200 bg-blue-50 text-blue-700 rounded-full"
              >
                Professional print for office and field
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Digital Printing & Job Site Signage
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                From spec books to job site signage, we help teams look polished
                and stay organized. Get dependable output that’s easy to hand
                out, review, and take into the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Request a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100"
                >
                  <a href="tel:+15104450382">Call: (510) 445-0382</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Printer className="h-5 w-5" />
                    <CardTitle>Spec Books & Submittals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Clean, organized printing for document-heavy projects where
                  readability matters.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Presentation className="h-5 w-5" />
                    <CardTitle>Marketing & Presentations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Flyers and presentations that help you win work and
                  communicate clearly.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <CardTitle>Job Site Signage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Print materials that help keep job sites informed and your
                  brand represented professionally.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Tell us what you’re printing
              </h2>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>Quantity, size, and whether color is required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Target deadline and whether you need pickup/delivery.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>Send a PDF if available for the fastest quoting.</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Get a fast quote</Link>
                </Button>
                <Button asChild variant="link" className="px-0">
                  <Link href="/services/large-format-printing">
                    Need plan sets too?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
