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
  title: "FreightPassport — Every handoff, cryptographically sealed",
  description:
    "Cryptographically-sealed chain of custody for freight. Sealed pickup numbers, receiver-signed PODs, and cross-load signature fingerprinting detect fraud in seconds instead of weeks.",
  keywords: [
    "freight fraud",
    "chain of custody",
    "cryptographic POD",
    "double brokering",
    "signature verification",
    "Ed25519",
    "broker security",
  ],
  authors: [{ name: "Logixtecs Solutions LLC" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "FreightPassport — Every handoff, cryptographically sealed",
    description:
      "The POD that can't be forged. Cryptographically-verifiable chain of custody for freight brokers.",
    type: "website",
    siteName: "FreightPassport",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreightPassport — Every handoff, cryptographically sealed",
    description:
      "Cryptographic chain of custody for freight. Fraud detected in seconds instead of weeks.",
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
