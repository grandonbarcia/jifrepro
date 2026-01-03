# JIF Reprographics - Professional Printing Solutions

A high-performance, SEO-optimized website for **JIF Reprographics**, a family-owned business providing professional printing and scanning solutions for Architects, Engineers, and Builders in the San Francisco Bay Area since 1995.

## 🚀 Features

- **Service-Specific Pages**: Dedicated, SEO-optimized routes for all core services:
  - [Large-Format Printing & Blueprints](/services/large-format-printing)
  - [Blueprint Scanning & Archiving](/services/blueprint-scanning)
  - [Pickup & Delivery](/services/pickup-delivery)
  - [Digital Printing & Signage](/services/digital-printing)
  - [Printing Supplies](/services/printing-supplies)
- **Advanced SEO**:
  - Dynamic Metadata for every page.
  - JSON-LD Structured Data (Schema.org) for Local Business, Services, and FAQ indexing.
  - Automated `sitemap.xml` and `robots.txt` generation.
- **Location-Based Routing**: A "Request a Quote" form that intelligently routes inquiries to either the **Santa Clara** or **Fremont** office based on user selection.
- **Modern UI/UX**: Built with React, Tailwind CSS, and Lucide icons for a fast, responsive, and professional aesthetic.
- **Performance**: Optimized images and static generation via Next.js 15 App Router.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for Vercel or any Node.js environment.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
  - `services/`: Individual service pages with unique SEO content.
- `components/`: Reusable UI components.
  - `site/`: Shared layout components like `SiteShell` (Header/Footer).
  - `ui/`: Base UI primitives (Buttons, Cards, Badges).
- `public/`: Static assets including the storefront image and icons.
- `lib/`: Utility functions.

## 🏁 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd jifrepro
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📍 Locations

- **Santa Clara (Main Office)**: 315 Brokaw Rd, Santa Clara, CA 95050
- **Fremont**: 44700 Industrial Dr # C, Fremont, CA 94538

---

_Built with precision for the AEC industry._
