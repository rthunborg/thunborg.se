import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "@/components/seo/structured-data";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactModalProvider } from "@/components/contact";
import { LazyOverlays } from "@/components/layout/lazy-overlays";
import { site } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

const sharedIcons: Metadata["icons"] = {
  icon: [
    { url: "/favicon.svg", type: "image/svg+xml" },
  ],
  apple: "/images/rt-mark.svg",
};

const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Rasmus Thunborg | Expert Software Engineer",
  description: site.description,
  keywords: [
    "Rasmus Thunborg",
    "Expert Software Engineer",
    "software architect Gothenburg",
    "backend developer",
    "Agentic AI",
    "technical leadership",
    "cloud architecture",
    "software architecture",
    "CV",
  ],
  icons: sharedIcons,
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rasmus Thunborg: Expert Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: site.url,
  },
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ContactModalProvider>
          <div
            id="scroll-sentinel"
            className="pointer-events-none absolute top-[200px] h-0 w-0"
            aria-hidden="true"
          />
          <main className="flex-1">{children}</main>
          <div
            id="footer-sentinel"
            className="pointer-events-none h-0 w-0"
            aria-hidden="true"
          />
          <SiteFooter />
          <LazyOverlays />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
