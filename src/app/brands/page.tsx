import type { Metadata } from "next";
import Link from "next/link";
import { featuredBrands, otherBrands } from "@/lib/brand";
import { BadgeCheckIcon } from "@/components/Icons";
import BrandsExplorer from "@/components/BrandsExplorer";

export const metadata: Metadata = {
  title: "All Brands | Authorized Direct Stockist",
  description:
    "Browse our full catalog of authorized garment brands — top labels and everyday essentials, all 100% genuine with manufacturer barcode & hologram tags.",
};

export default function AllBrandsPage() {
  return (
    <main className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/#brands"
          className="text-sm font-medium text-slate-500 hover:text-navy-900"
        >
          &larr; Back to home
        </Link>

        <div className="mt-4 text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900 shadow-sm">
            Authorized Direct Stockist
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            All Brands We Carry
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            {featuredBrands.length + otherBrands.length}+ trusted labels, all with verified
            MRP discounts and 100% genuine merchandise guarantee.
          </p>
        </div>

        <BrandsExplorer featuredBrands={featuredBrands} otherBrands={otherBrands} />

        <p className="mt-14 flex items-center justify-center gap-2 text-xs text-slate-500">
          <BadgeCheckIcon className="h-4 w-4 text-navy-900" />
          Every product carries official manufacturer barcode &amp; hologram tags. 100%
          Genuine Apparel Guaranteed.
        </p>
      </div>
    </main>
  );
}