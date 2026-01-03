import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CheckCircle, Scan, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blueprint Scanning & Plan Archiving (Bay Area)',
  description:
    'Large-format blueprint scanning and document archiving for AEC teams. Convert plan sets to clean, shareable PDFs with optional OCR. Serving Santa Clara, Fremont, and the Bay Area.',
  alternates: {
    canonical: '/services/blueprint-scanning',
  },
  keywords: [
    'blueprint scanning',
    'large format scanning',
    'scan to PDF',
    'plan archiving',
    'construction document scanning',
    'OCR scanning',
    'Santa Clara blueprint scanning',
    'Fremont large format scanning',
    'Bay Area scanning services',
  ],
  openGraph: {
    title: 'Blueprint Scanning & Archiving | JIF Reprographics',
    description:
      'Digitize large-format drawings into clean PDFs for easy sharing and storage. Serving Santa Clara, Fremont, and the Bay Area.',
    type: 'website',
    url: '/services/blueprint-scanning',
  },
};

export default function BlueprintScanningPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Blueprint Scanning & Archiving',
        serviceType: 'Large-format scanning',
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
          'Convert physical plans and oversized drawings into high-quality digital files for archiving, sharing, and project handoff.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can you scan oversized drawings and deliver PDFs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We scan large-format drawings and deliver clean, shareable digital files. PDF is common, and TIFF options are available when needed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer OCR?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'OCR is available for many document types so you can search and reference text more easily in your archived files.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is scanning helpful for project closeout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Digitizing plan sets helps teams share drawings quickly, reduce storage, and simplify closeout and future renovations.',
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
                Turn paper plans into searchable files
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Blueprint Scanning & Plan Archiving in the Bay Area
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Digitize legacy plans, as-builts, and oversized drawings into
                clean PDFs your team can store, share, and reference with
                confidence. Ideal for offices, job trailers, and project
                closeouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Request a Scanning Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100"
                >
                  <a href="tel:+15104450382">Call Fremont: (510) 445-0382</a>
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
                    <Scan className="h-5 w-5" />
                    <CardTitle>Large-Format Scanning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Oversized drawings, plan sets, and older blueprints converted
                  into clear digital files.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <CardTitle>Shareable PDFs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Keep everyone aligned with easy-to-email files for reviewers,
                  subs, and field teams.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <ShieldCheck className="h-5 w-5" />
                    <CardTitle>Archive-Ready Workflow</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Organize and preserve documents so you can retrieve them
                  quickly for future work.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                A simple scanning process that fits your schedule
              </h2>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Drop off in Santa Clara or Fremont, or request pickup.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    We scan oversized sheets and build clean digital outputs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Optional OCR so you can search text in many documents.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Start a scanning request</Link>
                </Button>
                <Button asChild variant="link" className="px-0">
                  <Link href="/services/pickup-delivery">
                    Need pickup & delivery?
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
