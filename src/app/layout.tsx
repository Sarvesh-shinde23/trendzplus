import type { Metadata } from "next";

import "./globals.css";

import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  description:
    "Shop quality ready-made garments for Men, Women & Kids from India's favorite fashion brands. Discover stylish clothing at great prices.",

  keywords: [
    "ready made garments",
    "readymade garments",
    "men's clothing",
    "women's clothing",
    "kids clothing",
    "fashion brands India",
    "clothing store India",
    "garments shop",
    "branded clothes",
    "fashion clothing",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Quality ready-made garments for Men, Women & Kids from India's favorite fashion brands.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Quality ready-made garments for Men, Women & Kids from India's favorite fashion brands.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-900 antialiased">
        <EnquiryModalProvider>
          {children}
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}