import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted at build time via next/font — no CDN call from the browser.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "https://freightpassport.ai";

const PRIMARY_TITLE =
  "Freight Passport — Every broker email, every load document, organized automatically";

const PRIMARY_DESCRIPTION =
  "Connect your inbox. Your loads organize themselves. Find any POD, rate con, or dispute detail in seconds. Built for freight brokers and carrier dispatchers. Read-only inbox access, one-click disconnect.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PRIMARY_TITLE,
    template: "%s · Freight Passport",
  },
  description: PRIMARY_DESCRIPTION,
  applicationName: "Freight Passport",
  authors: [{ name: "Logixtecs Solutions LLC", url: SITE_URL }],
  creator: "Aman Brar",
  publisher: "Logixtecs Solutions LLC",
  keywords: [
    "freight broker software",
    "freight dispatcher software",
    "load organization",
    "POD management",
    "rate confirmation",
    "freight inbox",
    "Outlook freight",
    "Gmail freight",
    "freight document automation",
    "freight chain of custody",
    "freight audit trail",
    "magic upload link freight",
    "BOL extraction",
    "load kanban",
    "carrier dispatcher tool",
  ],
  category: "Freight & Logistics Software",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Freight Passport",
    title: PRIMARY_TITLE,
    description: PRIMARY_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 752,
        alt: "Freight Passport — loads organized automatically from your inbox",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freight Passport — your loads, organized automatically",
    description:
      "Connect Outlook or Gmail. Rate cons, BOLs, PODs, and invoices get pulled out and attached to the right load. Read-only inbox access.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Freight Passport",
      legalName: "Logixtecs Solutions LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        "Freight Passport turns the rate cons, BOLs, PODs, and invoices flowing through a broker or dispatcher's inbox into a canonical, structured record for every load.",
      foundingDate: "2026",
      founder: {
        "@type": "Person",
        name: "Aman Brar",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "aman@logixtecs.com",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Freight Passport",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Freight Passport",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web · Outlook · Gmail",
      description: PRIMARY_DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Design partner pricing — free through V1.",
      },
      featureList: [
        "Outlook and Gmail inbox ingestion (read-only)",
        "Automatic rate con, BOL, POD, and invoice extraction",
        "Broker kanban and dispatcher driver board views",
        "Append-only per-load timeline and audit trail",
        "Natural-language Ask bar over your own loads",
        "Magic upload links for driver, carrier, and shipper documents",
        "In-app alerts for missing PODs and overdue payments",
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          // JSON-LD is safe as-is; next strips injection risk because we control the object.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
