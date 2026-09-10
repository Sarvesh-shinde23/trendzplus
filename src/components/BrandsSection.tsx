import Link from "next/link";
import { featuredBrands } from "@/lib/brand";
import { BadgeCheckIcon } from "./Icons";

export default function BrandsSection() {
  return (
    <section id="brands" className="w-full bg-indigo-50/60 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900 shadow-sm">
          Authorized Direct Stockist
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900">
          Top Fashion Brands Under One Roof
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
          Shop India's most trusted ready-made garment labels with verified MRP discounts
          and 100% genuine merchandise guarantee.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {featuredBrands.map((brand) => (
            <div
              key={brand.name}
              className="rounded-xl bg-white px-4 py-6 text-center shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm font-bold text-navy-900">{brand.name}</p>
              <p className="mt-1 text-xs text-slate-400">{brand.tagline}</p>
            </div>
          ))}
        </div>

        <Link
          href="/brands"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-900/90"
        >
          View All Brands
          <span aria-hidden="true">&rarr;</span>
        </Link>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
          <BadgeCheckIcon className="h-4 w-4 text-navy-900" />
          Every product carries official manufacturer barcode &amp; hologram tags. 100%
          Genuine Apparel Guaranteed.
        </p>
      </div>
    </section>
  );
}