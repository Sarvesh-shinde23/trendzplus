"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { ProductCategory, products } from "@/lib/product";
import { WhatsAppIcon } from "./Icons";


type TabId = "all" | ProductCategory;



const tabs: { id: TabId; label: string }[] = [
  { id: "all", label: "All Picks" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "kids", label: "Kids & Juniors" },
  { id: "ethnics", label: "Ethnic Wear" },
  { id: "accessories", label: "Accessories" },
];

const badgeStyles: Record<string, string> = {
  dark: "bg-navy-900 text-white",
  green: "bg-green-600 text-white",
  orange: "bg-orange-500 text-white",
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const { openModal } = useEnquiryModal();

  const visibleProducts = useMemo(
    () =>
      activeTab === "all"
        ? products
        : products.filter((p) => p.category === activeTab),
    [activeTab]
  );

  return (
    <section id="showroom-picks" className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              What's In Store This Week
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-navy-900">
              Popular Showroom Picks
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Check current physical showroom stock and reserve sizes via WhatsApp before visiting.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  activeTab === tab.id
                    ? "bg-navy-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => {
            // const priceLabel = `₹${product.price.toLocaleString("en-IN")}${
            //   product.mrp ? ` (MRP ₹${product.mrp.toLocaleString("en-IN")})` : ""
            // }`;
            const sizeLabel = `${product.sizeFieldLabel}: ${product.sizes.join(", ")}`;

            return (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-65 w-full">
                  <Image
                    src={product.image}
                    alt={`${product.brand} ${product.name}`}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={[
                      "absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold",
                      badgeStyles[product.badgeTone],
                    ].join(" ")}
                  >
                    {product.badge}
                  </span>
                  <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-semibold text-navy-900">
                    {product.brand}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-navy-900">{product.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{product.features}</p>

                  <div className="mt-3 flex items-center gap-2">
                    {/* <span className="text-lg font-extrabold text-navy-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.mrp && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{product.mrp.toLocaleString("en-IN")}
                      </span>
                    )}
                    {product.discountLabel && (
                      <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700">
                        {product.discountLabel}
                      </span>
                    )} */}
                  </div>

                  <div className="mt-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      {product.sizeFieldLabel}:
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openModal({
                        source: `Popular Showroom Picks — ${product.brand} ${product.name}`,
                        department: product.department,
                        purposeId: "availability",
                        product: {
                          label: `${product.brand} — ${product.name}`,
                          // priceLabel,
                          sizeLabel,
                        },
                      })
                    }
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2.5 text-xs font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-white"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Check Store Stock
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}