'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SiteShell } from '@/components/site/site-shell';
import {
  Scan,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Building2,
  HardHat,
  Ruler,
  Clock,
  Award,
  Truck,
  Users,
} from 'lucide-react';

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const location = formData.get('location') as string;
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const service = formData.get('service');
    const details = formData.get('message');

    const targetEmail = location.includes('Fremont')
      ? 'prints@jifrepro.com'
      : 'order@jifrepro.com';

    const subject = `Quote Request: ${service} - ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nLocation: ${location}\nService: ${service}\n\nDetails:\n${details}`;

    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PrintShop',
        name: 'JIF Reprographics',
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Santa Clara County' },
          { '@type': 'AdministrativeArea', name: 'Alameda County' },
          { '@type': 'Place', name: 'San Francisco Bay Area' },
        ],
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '315 Brokaw Rd',
            addressLocality: 'Santa Clara',
            addressRegion: 'CA',
            postalCode: '95050',
            addressCountry: 'US',
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '44700 Industrial Dr # C',
            addressLocality: 'Fremont',
            addressRegion: 'CA',
            postalCode: '94538',
            addressCountry: 'US',
          },
        ],
        telephone: ['+1-408-982-9554', '+1-510-445-0382'],
        email: ['order@jifrepro.com', 'prints@jifrepro.com'],
        priceRange: '$$',
        knowsAbout: [
          'Large-format printing',
          'Blueprint printing',
          'Architectural plans',
          'Engineering drawings',
          'Scanning',
          'Copying',
          'Digital printing',
          'Job site signage',
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you offer same-day blueprint printing in Santa Clara and Fremont?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We prioritize fast turnaround for architects, engineers, and contractors across Santa Clara, Fremont, and the Bay Area. Turnaround depends on file readiness, set size, and finishing requirements.',
            },
          },
          {
            '@type': 'Question',
            name: 'What file formats do you accept for plan printing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PDF is preferred for architectural and engineering plan sets. If you have other formats, contact us and we will confirm the best way to submit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you scan large-format drawings and convert them to PDF?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide large-format scanning and can deliver high-quality digital files for archiving and sharing, including PDF and TIFF options when needed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you print job site signage and marketing materials?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We offer digital printing for spec books, flyers, and job site signage with professional, detail-accurate output.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which Bay Area locations do you serve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We serve customers throughout the Bay Area with two convenient locations: Santa Clara and Fremont.',
            },
          },
        ],
      },
    ],
  };

  return (
    <SiteShell quoteHref="#contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-zinc-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
              <Badge
                variant="outline"
                className="px-4 py-1 text-sm border-blue-200 bg-blue-50 text-blue-700 rounded-full"
              >
                Serving Santa Clara & The Bay Area Since 1995
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                Professional Printing Solutions For{' '}
                <span className="text-blue-600">
                  Architects, Engineers & Builders
                </span>{' '}
                in the Bay Area
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
                Fast, reliable large-format printings serving the entire Bay
                Area. We deliver high-precision blueprints and marketing
                materials with local, family-owned care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-base"
                  asChild
                >
                  <Link href="#contact">Request a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-300 hover:bg-zinc-100 h-12 px-8 text-base"
                  asChild
                >
                  <a href="tel:+14089829554">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
              </div>
              <div className="pt-8 flex items-center gap-8 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>High Precision</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Local Pickup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Services Built for Deadlines
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Comprehensive printing and scanning solutions tailored for the
                construction and design industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Ruler className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Large-Format Printing & Blueprints</CardTitle>
                  <CardDescription>
                    Blueprints, plans, and schematics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-4">
                    High-resolution architectural and engineering prints on
                    bond, vellum, or mylar. The trusted choice for Santa Clara
                    construction projects.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />{' '}
                      Construction Sets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> Bid Sets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />{' '}
                      Oversized Color Plans
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href="/services/large-format-printing">
                      Learn more about large-format printing
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Scan className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Blueprint Scanning & Archiving</CardTitle>
                  <CardDescription>
                    Digitize your physical documents.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-4">
                    Convert old blueprints and documents into PDF Files for easy
                    storage and sharing. We can email the PDF to anyone you
                    need: team members, clients, and reviewers.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> Large
                      Format Scanning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> OCR Text
                      Recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> Cloud
                      Uploads
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href="/services/blueprint-scanning">
                      Learn more about blueprint scanning
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Pickup & Delivery</CardTitle>
                  <CardDescription>
                    Local & nationwide delivery services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-4">
                    Get plan sets and print orders delivered across the Bay Area
                    or shipped nationwide. We package orders securely and
                    coordinate delivery to help keep your project moving.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> Bay Area
                      Delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Nationwide Shipping
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" /> Pickup &
                      Delivery Coordination
                    </li>
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href="/services/pickup-delivery">
                      Learn more about pickup & delivery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/services/digital-printing">
                  Digital Printing & Signage
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/services/printing-supplies">
                  Printing Supplies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section id="industries" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Trusted by Professionals
                </h2>
                <p className="text-zinc-600 text-lg">
                  We understand the specific needs of the AEC (Architecture,
                  Engineering, and Construction) industry. Our workflow is
                  designed to meet your deadlines and standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-zinc-200">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    <span className="font-medium">Architects</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-zinc-200">
                    <HardHat className="h-6 w-6 text-blue-600" />
                    <span className="font-medium">Contractors</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-zinc-200">
                    <Ruler className="h-6 w-6 text-blue-600" />
                    <span className="font-medium">Engineers</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-zinc-200">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span className="font-medium">Local Businesses</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative h-100 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/blueprint_store.png"
                  alt="JIF Reprographics Storefront"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Choose JIF Reprographics?
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                We combine state-of-the-art technology with the personal touch
                of a family-owned business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
                <p className="text-zinc-600 text-sm">
                  We know deadlines matter. Most orders completed same-day.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">High Precision</h3>
                <p className="text-zinc-600 text-sm">
                  Advanced equipment ensures every line and detail is crisp.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Family Owned</h3>
                <p className="text-zinc-600 text-sm">
                  Personal service from a team that cares about your project.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Santa Clara’s Local Expert
                </h3>
                <p className="text-zinc-600 text-sm">
                  Proudly serving Santa Clara, San Jose, and the Bay Area for
                  decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Testimonials */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              Trusted by Local Professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700">
                <div className="flex gap-1 mb-4 text-yellow-400 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">
                  “JIF is our go-to for all bid sets. They never miss a deadline
                  and the quality is always perfect.”
                </p>
                <div className="font-semibold">Sarah M.</div>
                <div className="text-sm text-zinc-500">Senior Architect</div>
              </div>
              <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700">
                <div className="flex gap-1 mb-4 text-yellow-400 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">
                  “The scanning service saved us tons of space. Fast, friendly,
                  and professional.”
                </p>
                <div className="font-semibold">David R.</div>
                <div className="text-sm text-zinc-500">General Contractor</div>
              </div>
              <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700">
                <div className="flex gap-1 mb-4 text-yellow-400 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">
                  “Best reprographics shop in Santa Clara. I appreciate the
                  personal attention to detail.”
                </p>
                <div className="font-semibold">Mike T.</div>
                <div className="text-sm text-zinc-500">Civil Engineer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Visit Our Locations
              </h2>
              <p className="text-zinc-600 max-w-2xl mx-auto">
                Conveniently located in Santa Clara and Fremont to serve the
                entire Bay Area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Santa Clara Location */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200 flex flex-col">
                <div className="h-64 bg-zinc-200 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=315+Brokaw+Rd,+Santa+Clara,+CA+95050&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0"
                    title="Map of Santa Clara Location"
                  ></iframe>
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-end mb-8">
                    <h3 className="font-black text-4xl md:text-5xl tracking-tighter uppercase italic drop-shadow-sm">
                      Santa Clara
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">315 Brokaw Rd</p>
                          <p className="text-zinc-600">Santa Clara, CA 95050</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-zinc-600">Mon - Fri: 8am - 7pm</p>
                          <p className="text-zinc-600">Sat: 8am - 2pm</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+14089829554"
                            className="text-zinc-600 hover:text-blue-600"
                          >
                            (408) 982-9554
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:order@jifrepro.com"
                            className="text-zinc-600 hover:text-blue-600"
                          >
                            order@jifrepro.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fremont Location */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-zinc-200 flex flex-col">
                <div className="h-64 bg-zinc-200 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=44700+Industrial+Dr+%23+C,+Fremont,+CA+94538&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0"
                    title="Map of Fremont Location"
                  ></iframe>
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-end mb-8">
                    <h3 className="font-black text-4xl md:text-5xl tracking-tighter uppercase italic drop-shadow-sm">
                      Fremont
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">44700 Industrial Dr # C</p>
                          <p className="text-zinc-600">Fremont, CA 94538</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Hours</p>
                          <p className="text-zinc-600">Mon - Fri: 8am - 7pm</p>
                          <p className="text-zinc-600">Sat - Sun: Closed</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+15104450382"
                            className="text-zinc-600 hover:text-blue-600"
                          >
                            (510) 445-0382
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:prints@jifrepro.com"
                            className="text-zinc-600 hover:text-blue-600"
                          >
                            prints@jifrepro.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to start your project?
                </h2>
                <p className="text-blue-100 text-lg">
                  Get a free quote for your printing needs. We respond quickly
                  to all inquiries.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div>
                        <div className="text-sm text-blue-200">Santa Clara</div>
                        <div className="font-semibold text-lg">
                          (408) 982-9554
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200">Fremont</div>
                        <div className="font-semibold text-lg">
                          (510) 445-0382
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div>
                        <div className="text-sm text-blue-200">Santa Clara</div>
                        <div className="font-semibold text-base">
                          order@jifrepro.com
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200">Fremont</div>
                        <div className="font-semibold text-base">
                          prints@jifrepro.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div>
                        <div className="text-sm text-blue-200">Santa Clara</div>
                        <div className="font-semibold text-sm">
                          315 Brokaw Rd, Santa Clara, CA 95050
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-200">Fremont</div>
                        <div className="font-semibold text-sm">
                          44700 Industrial Dr # C, Fremont, CA 94538
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white text-zinc-900 p-8 rounded-2xl shadow-xl">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        required
                        className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        required
                        className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Preferred Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>Santa Clara (Main Office)</option>
                      <option>Fremont</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option>Large Format Printing</option>
                      <option>Scanning & Archiving</option>
                      <option>Deliveries</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="flex min-h-25 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
