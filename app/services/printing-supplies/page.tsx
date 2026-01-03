import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CheckCircle, Package, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Printing Supplies for AEC Teams (Santa Clara & Fremont)',
  description:
    'Printing supplies and essentials to keep your plotting and document workflow moving. Ask about availability at our Santa Clara and Fremont locations.',
  alternates: {
    canonical: '/services/printing-supplies',
  },
  keywords: [
    'printing supplies',
    'reprographics supplies',
    'plan printing supplies',
    'Santa Clara printing supplies',
    'Fremont printing supplies',
    'Bay Area printing supplies',
  ],
  openGraph: {
    title: 'Printing Supplies | JIF Reprographics',
    description:
      'Printing supplies and essentials available through our Santa Clara and Fremont locations.',
    type: 'website',
    url: '/services/printing-supplies',
  },
};

export default function PrintingSuppliesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Printing Supplies',
        serviceType: 'Printing supplies',
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
          'Supplies and essentials to support plan printing and document workflows for AEC teams and local businesses.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you carry supplies for printing workflows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Ask our team about current availability at our Santa Clara or Fremont location. We can help you pick what fits your workflow.',
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
                Keep your workflow stocked
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Printing Supplies in Santa Clara and Fremont
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                When deadlines hit, running out of essentials isn’t an option.
                Ask us about supplies and availability so your team can keep
                plotting, printing, and delivering without delays.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Ask About Supplies</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100"
                >
                  <a href="tel:+14089829554">Call: (408) 982-9554</a>
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
                    <Package className="h-5 w-5" />
                    <CardTitle>Stocked Essentials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Quick access to common items your team needs to keep work
                  moving.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Wrench className="h-5 w-5" />
                    <CardTitle>Practical Guidance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Tell us what you’re doing and we’ll point you toward the right
                  options.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <CardTitle>Convenient Pickup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Stop by Santa Clara or Fremont and get what you need without
                  slowing down your schedule.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Pair supplies with fast service
              </h2>
              <p className="text-zinc-600">
                Many teams bundle supplies pickup with printing and delivery so
                everything is handled in one stop.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/services/large-format-printing">
                    Plan printing
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100"
                >
                  <Link href="/services/pickup-delivery">Delivery options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
