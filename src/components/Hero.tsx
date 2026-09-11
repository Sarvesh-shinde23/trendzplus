"use client";

import Image from "next/image";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { PinIcon, CheckIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            🛡️ HONEST FAMILY RETAIL • SINCE 1998
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl">
            COMPLETE FAMILY SHOPPING <br />
            <span className="border-b-4 border-orange-400 pb-1">
              UNDER ONE ROOF
            </span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
            Quality ready-made garments for Men, Women & Kids from India&apos;s
            favorite fashion brands at honest everyday retail prices. Discover
            over 10,000+ curated outfits in our spacious family showrooms.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-slate-600">
            <Badge label="50+ Leading Brands" />
            <Badge label="Daily Wear to Festive Sets" />
            <Badge label="8 Physical Stores in City" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#departments"
              className="rounded-lg bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              🛍 Browse Trending Collections
            </a>

            <a
              href="#store-locator"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:border-navy-900"
            >
              <PinIcon className="h-4 w-4" />
              Find Nearest Store
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/herofamily.png"
              alt="Family shopping at TrendzPlus showroom"
              width={900}
              height={620}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Quality Assured Badge */}
          <div className="absolute -top-4 right-4 rounded-xl bg-white px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-navy-900">
              <CheckIcon className="h-4 w-4 text-green-500" />
              QUALITY ASSURED
            </div>

            <p className="text-[11px] text-slate-500">
              100% Color Fast
            </p>
          </div>

          {/* Showroom Enquiry */}
          <div className="absolute -bottom-5 left-4 right-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-lg">
            <div>
              <p className="text-[11px] font-semibold text-slate-400">
                SHOWROOM EXPERIENCE
              </p>

              <p className="text-sm font-bold text-navy-900">
                Trial Rooms & On-Spot Fitters
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                openModal({
                  source: "Hero — Trial Rooms & On-Spot Fitters",
                  purposeId: "trial",
                })
              }
              className="flex items-center gap-1.5 rounded-full bg-[#128C7E] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#0f7568]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Enquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
      <CheckIcon className="h-3.5 w-3.5 text-green-500" />
      {label}
    </span>
  );
}