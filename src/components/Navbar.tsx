"use client";

import Image from "next/image";
import Link from "next/link";

import { useEnquiryModal } from "@/context/EnquiryModalContext";

import { PinIcon, WhatsAppIcon } from "./Icons";

export default function Navbar() {
  const { openModal } = useEnquiryModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-5 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Trendz Plus"
          className="flex h-[72px] w-[165px] shrink-0 items-center"
        >
          <Image
            src="/trendzplus.png"
            alt="Trendz Plus"
            width={190}
            height={123}
            priority
            className="h-[68px] w-auto object-contain object-left"
          />
        </Link>

        {/* Navigation */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Link
            href="/#departments"
            className="rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F]"
          >
            Departments
          </Link>

          <Link
            href="/#store-locator"
            className="rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F]"
          >
            Store Locator
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            className="rounded-xl px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F]"
          >
            About Us
          </Link>

          {/* Stores */}
          <button
            type="button"
            onClick={() =>
              openModal({
                source: "Navbar — Stores",
                purposeId: "timings",
              })
            }
            className="ml-2 flex items-center gap-2 rounded-full bg-[#19145F]/[0.07] px-4 py-2.5 text-[13px] font-bold text-[#19145F] transition-all duration-200 hover:bg-[#19145F]/[0.12]"
          >
            <PinIcon className="h-4 w-4" />
            Stores
          </button>

          {/* Divider */}
          <span className="mx-3 h-7 w-px bg-slate-200" />

          {/* WhatsApp */}
          <button
            type="button"
            onClick={() =>
              openModal({
                source: "Navbar — WhatsApp Us",
              })
            }
            className="flex items-center gap-2 rounded-full bg-[#128C7E] px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f7568] hover:shadow-md active:translate-y-0"
          >
            <WhatsAppIcon className="h-[17px] w-[17px]" />
            <span>WhatsApp Us</span>
          </button>
        </nav>

        {/* Mobile WhatsApp */}
        <button
          type="button"
          onClick={() =>
            openModal({
              source: "Navbar — WhatsApp Us",
            })
          }
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-sm transition hover:bg-[#0f7568] lg:hidden"
          aria-label="WhatsApp Us"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
    </header>
  );
}