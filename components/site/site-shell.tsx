import Link from 'next/link';
import { Printer } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function SiteShell({
  children,
  quoteHref = '/#contact',
}: {
  children: React.ReactNode;
  quoteHref?: string;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
            aria-label="JIF Reprographics Home"
          >
            <Printer className="h-6 w-6 text-blue-600" />
            <span>JIF Reprographics</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 border-r pr-6 mr-2">
              <a
                href="tel:+14089829554"
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-blue-600"
              >
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase text-zinc-400 leading-none">
                    Santa Clara
                  </span>
                  <span>(408) 982-9554</span>
                </div>
              </a>
              <a
                href="tel:+15104450382"
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-blue-600"
              >
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase text-zinc-400 leading-none">
                    Fremont
                  </span>
                  <span>(510) 445-0382</span>
                </div>
              </a>
            </div>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href={quoteHref}>Request Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <Printer className="h-6 w-6 text-blue-500" />
                <span>JIF Reprographics</span>
              </div>
              <p className="max-w-xs">
                Your trusted local partner for high-quality reprographics and
                printing services in Santa Clara and the Bay Area.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services/large-format-printing"
                    className="hover:text-white"
                  >
                    Large Format
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/blueprint-scanning"
                    className="hover:text-white"
                  >
                    Scanning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pickup-delivery"
                    className="hover:text-white"
                  >
                    Pickup & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/printing-supplies"
                    className="hover:text-white"
                  >
                    Supplies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#why-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-zinc-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {new Date().getFullYear()} JIF Reprographics. All rights
              reserved.
            </p>
            <p>Designed for Local Business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
