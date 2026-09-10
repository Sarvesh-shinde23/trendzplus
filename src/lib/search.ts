import {
  featuredBrands,
  otherBrands,
  type Brand,
} from "./brand";

import {
  departmentOptions,
  type DepartmentOption,
} from "./enquiry";

import {
  storeLocations,
  type StoreLocation,
} from "./locations";

import {
  Product,
  products,
} from "./product";

export type SearchResult =
  | { kind: "product"; product: Product }
  | { kind: "department"; department: DepartmentOption }
  | { kind: "brand"; brand: Brand }
  | { kind: "store"; store: StoreLocation };

const MAX_PER_CATEGORY = 3;

function matches(haystack: string, query: string): boolean {
  return haystack.toLowerCase().includes(query.toLowerCase());
}

export function searchSite(rawQuery: string): SearchResult[] {
  const query = rawQuery.trim();

  if (query.length < 2) return [];

   // Combine all brands into one searchable list, normalizing plain
  // name strings from otherBrands into Brand shape
  const brands: Brand[] = [
    ...featuredBrands,
    ...otherBrands.map((name): Brand => ({ name, tagline: "" })),
  ];

  const productResults: SearchResult[] = products
    .filter(
      (p) =>
        matches(p.name, query) ||
        matches(p.brand, query) ||
        matches(p.features, query)
    )
    .slice(0, MAX_PER_CATEGORY)
    .map((product) => ({
      kind: "product",
      product,
    }));

  const departmentResults: SearchResult[] = departmentOptions
    .filter(
      (d) =>
        d.id !== "general" &&
        matches(d.label, query)
    )
    .slice(0, MAX_PER_CATEGORY)
    .map((department) => ({
      kind: "department",
      department,
    }));

  const brandResults: SearchResult[] = brands
    .filter(
      (b) =>
        matches(b.name, query) ||
        matches(b.tagline, query)
    )
    .slice(0, MAX_PER_CATEGORY)
    .map((brand) => ({
      kind: "brand",
      brand,
    }));

  const storeResults: SearchResult[] = storeLocations
    .filter(
      (s) =>
        matches(s.name, query) ||
        matches(s.city, query) ||
        matches(s.address, query)
    )
    .slice(0, MAX_PER_CATEGORY)
    .map((store) => ({
      kind: "store",
      store,
    }));

  return [
    ...productResults,
    ...departmentResults,
    ...brandResults,
    ...storeResults,
  ];
}