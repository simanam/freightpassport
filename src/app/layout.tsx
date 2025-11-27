import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Freight Passport | The Identity Layer for American Freight",
  description: "One passport. One truth. Every load verified. Stop double brokering, prevent fraud, and eliminate document chaos with the freight industry's first unified identity system.",
  keywords: ["freight", "trucking", "logistics", "identity", "verification", "double brokering", "fraud prevention", "AI"],
  authors: [{ name: "Logixtecs Solutions LLC" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Freight Passport | The Identity Layer for American Freight",
    description: "One passport. One truth. Every load verified. Stop double brokering, prevent fraud, and eliminate document chaos.",
    type: "website",
    siteName: "Freight Passport",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freight Passport | The Identity Layer for American Freight",
    description: "One passport. One truth. Every load verified.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="startup" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
