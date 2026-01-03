import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteShell } from '@/components/site/site-shell';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CheckCircle, MapPin, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pickup & Delivery for Plan Sets (Bay Area + Nationwide)',
  description:
    'Pickup and delivery for blueprint sets and print orders across the Bay Area, with secure packaging and nationwide shipping options. Two locations: Santa Clara and Fremont.',
  alternates: {
    canonical: '/services/pickup-delivery',
  },
  keywords: [
    'blueprint delivery',
    'plan set delivery',
    'Bay Area delivery printing',
    'pickup and delivery reprographics',
    'nationwide shipping plan sets',
    'Santa Clara printing delivery',
    'Fremont printing delivery',
  ],
  openGraph: {
    title: 'Pickup & Delivery | JIF Reprographics',
    description:
      'Coordinate delivery for plan sets and print orders across the Bay Area or ship nationwide.',
    type: 'website',
    url: '/services/pickup-delivery',
  },
};

export default function PickupDeliveryPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Pickup & Delivery for Plan Sets and Print Orders',
        serviceType: 'Delivery service',
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
          { '@type': 'Country', name: 'United States' },
        ],
        description:
          'Pickup and delivery for plan sets and print orders, including Bay Area delivery and nationwide shipping with secure packaging.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you deliver plan sets across the Bay Area?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We coordinate delivery across the Bay Area to help keep projects moving.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you ship nationwide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We can package orders securely and ship nationwide when needed.',
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
                Delivery coordination for busy teams
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                Pickup & Delivery for Plan Sets and Print Orders
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Save time when deadlines hit. We coordinate Bay Area delivery
                for plan sets and print orders and can ship nationwide when
                needed. Expect secure packaging, clear communication, and
                reliable handoff.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Request Delivery</Link>
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
                    <Truck className="h-5 w-5" />
                    <CardTitle>Bay Area Delivery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Coordinate drop-offs to offices, job sites, and project
                  locations across the Bay Area.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <MapPin className="h-5 w-5" />
                    <CardTitle>Two Convenient Locations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Santa Clara and Fremont locations make pickup and drop-off
                  simple.
                </CardContent>
              </Card>
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <CardTitle>Secure Packaging</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-600">
                  Orders are packaged to help protect prints during transport
                  and minimize damage or reprints.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                What we need to coordinate your delivery
              </h2>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Delivery address and contact name/phone for receiving.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Preferred delivery window and any job site instructions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>
                    Set details (quantity, sizes) so we package appropriately.
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/#contact">Schedule delivery</Link>
                </Button>
                <Button asChild variant="link" className="px-0">
                  <Link href="/services/large-format-printing">
                    Printing plan sets?
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
