"use client";

import Image from "next/image";

import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { storeLocations, directionsUrl } from "@/lib/locations";

import {
  PinIcon,
  ClockIcon,
  PhoneIcon,
  CompassIcon,
  WhatsAppIcon,
} from "./Icons";

export default function StoreLocator() {
  const { openModal } = useEnquiryModal();

  const featured = storeLocations.filter((loc) => loc.featured);

  return (
    <section id="store-locator" className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Visit Us Today
            </span>

            <h2 className="mt-1 text-3xl font-extrabold text-navy-900">
              Our Trendz Plus Showrooms
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Visit your nearest Trendz Plus showroom and explore fashion
              collections for men, women, kids, and the entire family.
            </p>
          </div>

          <span className="flex items-center gap-1.5 self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            5 Showrooms
          </span>
        </div>

        {/* Store Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((loc) => (
            <div
              key={loc.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Store Image */}
              <div className="relative h-70 w-full bg-slate-100">
                {loc.image ? (
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-100">
                    <span className="text-xs font-medium text-slate-400">
                      Trendz Plus Showroom
                    </span>
                  </div>
                )}

                {loc.badge && (
                  <span className="absolute left-3 top-3 rounded-md bg-navy-900 px-2 py-1 text-[10px] font-bold text-white">
                    {loc.badge}
                  </span>
                )}

                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-green-600 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Open Today
                </span>
              </div>

              {/* Store Information */}
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-900">
                  {loc.name}
                </h3>

                <div className="mt-3 space-y-2 text-xs text-slate-500">
                  {/* Address */}
                  <p className="flex items-start gap-2">
                    <PinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />

                    <span>
                      {loc.address}, {loc.city}
                    </span>
                  </p>

                  {/* Hours */}
                  {loc.hours && (
                    <p className="flex items-center gap-2">
                      <ClockIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                      {loc.hours}
                    </p>
                  )}

                  {/* Phone */}
                  {loc.phone && (
                    <p className="flex items-center gap-2">
                      <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" />

                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                        className="transition hover:text-navy-900 hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </p>
                  )}

                  {/* Feature */}
                  {loc.feature && (
                    <p className="flex items-center gap-2 font-medium text-slate-600">
                      {loc.feature}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-4 space-y-2">
                  {/* Directions */}
                  <a
                    href={directionsUrl(loc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-navy-800"
                  >
                    <CompassIcon className="h-3.5 w-3.5" />
                    Get Directions
                  </a>

                  {/* Call */}
                  {loc.phone && (
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-navy-900 px-4 py-2.5 text-xs font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                      Call {loc.phone}
                    </a>
                  )}

                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={() =>
                      openModal({
                        source: `Store Locator — ${loc.name}`,
                        locationId: loc.id,
                        purposeId: "timings",
                      })
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-semibold text-navy-900 transition hover:bg-slate-200"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    WhatsApp Store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}