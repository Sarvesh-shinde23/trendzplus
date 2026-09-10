import type { Metadata } from "next";
import "./globals.css";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Quality ready-made garments for Men, Women & Kids from India's favorite fashion brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <EnquiryModalProvider>
          {children}
          <EnquiryModal />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}