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

export const metadata: Metadata = {
  title: "FreightPassport — Every broker email, every load document, organized automatically",
  description:
    "Connect your inbox. Your loads organize themselves. Find any POD, rate con, or dispute detail in seconds. Built for freight brokers and carrier dispatchers. Read-only, one-click disconnect.",
  keywords: [
    "freight broker software",
    "load organization",
    "POD management",
    "rate confirmation",
    "freight dispatcher",
    "carrier software",
    "freight email",
    "Outlook freight",
    "Gmail freight",
  ],
  authors: [{ name: "Logixtecs Solutions LLC" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "FreightPassport — Every broker email, every load document, organized automatically",
    description:
      "Connect your inbox. Your loads organize themselves. Find any POD, rate con, or dispute detail in seconds.",
    type: "website",
    siteName: "FreightPassport",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreightPassport — Your loads, organized automatically",
    description:
      "Connect Outlook or Gmail. Rate cons, BOLs, PODs, and invoices get pulled out and attached to the right load. Read-only access.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
