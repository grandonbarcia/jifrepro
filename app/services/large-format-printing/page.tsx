import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CheckCircle, Clock, Ruler } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Large-Format Printing & Blueprints (Santa Clara & Fremont) ',
  description:
    'Large-format blueprint and plan printing for architects, engineers, and contractors. Fast turnaround, crisp linework, and dependable local service in Santa Clara, Fremont, and the Bay Area.',
  alternates: {
    canonical: '/services/large-format-printing',
  },
  keywords: [
    'large format printing',
    'blueprint printing',
    'plan printing',
    'architectural prints',
    'engineering drawings',
    'construction sets',
    'bid sets',
    'Santa Clara blueprint printing',
    'Fremont blueprint printing',
    'Bay Area plan printing',
  ],
  openGraph: {
    title: 'Large-Format Printing & Blueprints | JIF Reprographics',
    description:
      'Fast, accurate blueprint and plan printing for the AEC industry. Serving Santa Clara, Fremont, and the Bay Area.',
    type: 'website',
    url: '/services/large-format-printing',
  },
};

export default function LargeFormatPrintingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Large-Format Printing & Blueprint Printing',
        serviceType: 'Large-format printing',
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
          'High-precision architectural and engineering plan printing for bid sets, permit sets, and construction sets with fast turnaround and local support.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What do you print for the AEC industry?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We print construction sets, bid sets, permit submittals, addenda, and oversized color plan sheets for architects, engineers, and contractors.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer same-day blueprint printing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Often, yes. Turnaround depends on file readiness, set size, and finishing requirements. Call to confirm the best option for your deadline.',
            },
          },
          {
            '@type': 'Question',
            name: 'What file format should I send?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PDF is preferred for plan sets. If you have a different format, contact us and we will confirm the best submission method.',
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
                Blueprint & plan printing for deadlines
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Large-Format Printing & Blueprints in Santa Clara and Fremont
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Keep your project moving with crisp, readable plan sets and
                consistent output you can trust. We print construction sets, bid
                sets, and oversized color plans for architects, engineers, and
                contractors across the Bay Area.
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
                  <a href="tel:+14089829554">
                    Call Santa Clara: (408) 982-9554
                  </a>
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
                    <Ruler className="h-5 w-5" />
                    <CardTitle>Set Printing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Bid sets, permit sets, and construction sets with consistent
                  linework and clear notes.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <CardTitle>Readable, Accurate Output</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  We focus on legibility so field teams and reviewers can read
                  every dimension, callout, and revision.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Clock className="h-5 w-5" />
                    <CardTitle>Fast Turnaround</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Same-day service is often available depending on file
                  readiness and order size.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                What to send (and how to avoid reprints)
              </h2>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Send a print-ready PDF (preferred) with correct scale and
                    sheet size.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Include a cover sheet and revision dates if the set is for
                    distribution.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Tell us the quantity, paper preference (bond/vellum/mylar),
                    and any color sheets.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Get pricing for your set</Link>
                </Button>
                <Button asChild variant="link" className="px-0">
                  <Link href="/services/blueprint-scanning">
                    Need scans too?
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
