"use client";

import { useMemo, useState } from "react";
import type { Brand } from "@/lib/brand";

interface Props {
  featuredBrands: Brand[];
  otherBrands: string[];
}

export default function BrandsExplorer({ featuredBrands, otherBrands }: Props) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredFeatured = useMemo(() => {
    if (!normalizedQuery) return featuredBrands;
    return featuredBrands.filter((brand) =>
      brand.name.toLowerCase().includes(normalizedQuery)
    );
  }, [featuredBrands, normalizedQuery]);

  const filteredOther = useMemo(() => {
    if (!normalizedQuery) return otherBrands;
    return otherBrands.filter((name) =>
      name.toLowerCase().includes(normalizedQuery)
    );
  }, [otherBrands, normalizedQuery]);

  const totalResults = filteredFeatured.length + filteredOther.length;
  const hasQuery = normalizedQuery.length > 0;

  return (
    <>
      <div className="mx-auto mt-10 max-w-md">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brands..."
            aria-label="Search brands"
            className="w-full rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-navy-900 shadow-sm outline-none transition focus:border-navy-900/40 focus:ring-2 focus:ring-navy-900/10"
          />
          {hasQuery && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-900"
            >
              &times;
            </button>
          )}
        </div>
        {hasQuery && (
          <p className="mt-2 text-center text-xs text-slate-500">
            {totalResults} {totalResults === 1 ? "brand" : "brands"} found
          </p>
        )}
      </div>

      {hasQuery && totalResults === 0 ? (
        <p className="mt-14 text-center text-sm text-slate-500">
          No brands match &quot;{query}&quot;. Try a different search.
        </p>
      ) : (
        <>
          {filteredFeatured.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-bold text-navy-900">Top Brands</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {filteredFeatured.map((brand) => (
                  <div
                    key={brand.name}
                    className="rounded-xl bg-white px-4 py-6 text-center shadow-sm transition hover:shadow-md"
                  >
                    <p className="text-sm font-bold text-navy-900">{brand.name}</p>
                    <p className="mt-1 text-xs text-slate-400">{brand.tagline}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {filteredOther.length > 0 && (
            <section className="mt-14">
              <h2 className="text-lg font-bold text-navy-900">Other Brands</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {filteredOther.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}