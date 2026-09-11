"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { PinIcon, WhatsAppIcon } from "./Icons";

const familyShowroomMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Trendz Plus - The Family Showroom, Tamkuhi Road, Main Road, Post-Seorahi, District Kushinagar, Uttar Pradesh - 274406"
  );

export default function Navbar() {
  const { openModal } = useEnquiryModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    closeMobileMenu();

    openModal({
      source: "Navbar — WhatsApp Us",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center px-4 sm:px-6 lg:h-[82px] lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Trendz Plus"
          onClick={closeMobileMenu}
          className="flex h-full w-[135px] shrink-0 items-center sm:w-[150px] lg:w-[165px]"
        >
          <Image
            src="/trendzplus.png"
            alt="Trendz Plus"
            width={190}
            height={123}
            priority
            className="h-[58px] w-auto object-contain object-left sm:h-[62px] lg:h-[68px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Link
            href="/#departments"
            className="rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F] xl:px-4"
          >
            Departments
          </Link>

          <Link
            href="/#store-locator"
            className="rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F] xl:px-4"
          >
            Store Locator
          </Link>

          <Link
            href="/about"
            className="rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:text-[#19145F] xl:px-4"
          >
            About Us
          </Link>

          {/* Stores */}
          <a
            href={familyShowroomMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to Trendz Plus Family Showroom"
            className="ml-1 flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-2.5 text-[13px] font-bold text-slate-700 transition-all duration-200 hover:bg-slate-200 hover:text-[#19145F] xl:px-4"
          >
            <PinIcon className="h-4 w-4" />
            <span>Stores</span>
          </a>

          {/* Divider */}
          <span className="mx-2 h-7 w-px bg-slate-200 xl:mx-3" />

          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f7568] hover:shadow-md active:translate-y-0 xl:px-5"
          >
            <WhatsAppIcon className="h-[17px] w-[17px]" />
            <span>WhatsApp Us</span>
          </button>
        </nav>

        {/* Tablet / Mobile Actions */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-sm transition hover:bg-[#0f7568] active:scale-95 sm:h-11 sm:w-11"
            aria-label="WhatsApp Us"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 active:scale-95 sm:h-11 sm:w-11"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              <Link
                href="/#departments"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#19145F]"
              >
                Departments
              </Link>

              <Link
                href="/#store-locator"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#19145F]"
              >
                Store Locator
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#19145F]"
              >
                About Us
              </Link>

              {/* Stores */}
              <a
                href={familyShowroomMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#19145F]"
              >
                <PinIcon className="h-5 w-5" />
                Stores
              </a>

              {/* Mobile CTA */}
              <div className="mt-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#128C7E] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0f7568] active:scale-[0.99]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Us
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

