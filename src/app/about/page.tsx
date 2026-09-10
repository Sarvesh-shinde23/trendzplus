import type { Metadata } from "next";
import Link from "next/link";


import {
  BadgeCheckIcon,
  BoxIcon,
  PinIcon,
  TagIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { featuredBrands, otherBrands, type Brand } from "@/lib/brand";
import { storeLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "About Trendz Plus | Authorized Garment Stockist",
  description:
    "Learn about Trendz Plus, an authorized garment stockist offering genuine branded clothing, trusted apparel brands, and quality garments through our stores.",
  keywords: [
    "Trendz Plus",
    "authorized garment stockist",
    "garment stockist",
    "branded clothing",
    "genuine branded garments",
    "apparel brands",
    "clothing stores",
    "garment brands",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Trendz Plus | Authorized Garment Stockist",
    description:
      "Discover Trendz Plus — your trusted destination for genuine branded garments and apparel from authorized brands.",
    url: "/about",
    siteName: "Trendz Plus",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is Trendz Plus?",
    answer:
      "Trendz Plus is a garment retail and stockist business offering genuine branded apparel across multiple clothing categories. We work with established garment brands and provide customers with access to authentic products through our stores.",
  },
  {
    question: "Are the products at Trendz Plus genuine?",
    answer:
      "Trendz Plus focuses on genuine branded garments sourced through authorized brand and distribution channels. Products are supplied with their applicable manufacturer tags, labels, barcodes, and packaging.",
  },
  {
    question: "Which garment brands are available at Trendz Plus?",
    answer:
      "Trendz Plus offers a selection of established garment and apparel brands. Availability can vary by store, department, size, and season. Visit our Brands page to explore the brands in our catalog.",
  },
  {
    question: "What types of clothing are available?",
    answer:
      "Our assortment covers multiple garment categories and everyday apparel requirements. Product availability varies by store and brand.",
  },
  {
    question: "Where can I find Trendz Plus stores?",
    answer:
      "Trendz Plus operates physical stores serving customers looking for genuine branded garments and apparel. Visit our Store Locator to find store locations and details.",
  },
];

const values = [
  {
    icon: BadgeCheckIcon,
    title: "Genuine Products",
    description:
      "We focus on authentic branded garments and transparent product information so customers can shop with confidence.",
  },
  {
    icon: TagIcon,
    title: "Trusted Brands",
    description:
      "Our catalog brings together recognized garment brands across different apparel categories and customer needs.",
  },
  {
    icon: BoxIcon,
    title: "Wide Selection",
    description:
      "From everyday essentials to seasonal apparel, our stores offer a practical selection across multiple garment departments.",
  },
  {
    icon: PinIcon,
    title: "Physical Stores",
    description:
      "Customers can visit our stores, explore products in person, check availability, and get assistance from our team.",
  },
];

export default function AboutPage() {
  const allBrands: Brand[] = [
    ...featuredBrands,
    ...otherBrands.map((name): Brand => ({ name, tagline: "" })),
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trendz Plus",
    url: "https://trendzplus.com",
    description:
      "Trendz Plus is an authorized garment stockist offering genuine branded clothing and apparel through its stores.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#19145F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
              <BadgeCheckIcon className="h-4 w-4" />
              Trusted Garment Stockist
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Trendz Plus
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Your trusted destination for genuine branded garments,
              established apparel brands, and quality clothing for everyday
              needs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/brands"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#19145F] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Our Brands
              </Link>

              <Link
                href="/#store-locator"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Making branded garments easier to shop with confidence.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Trendz Plus is a garment stockist and retail destination
                focused on bringing genuine branded clothing closer to
                customers. Our assortment is built around established garment
                brands and practical apparel requirements.
              </p>

              <p>
                We believe buying branded clothing should be straightforward.
                Customers should know what brand they are buying, understand
                the product they are considering, and have the confidence that
                they are purchasing genuine merchandise.
              </p>

              <p>
                Through our stores and brand-focused catalog, Trendz Plus aims
                to make that experience simple — from discovering a garment to
                checking availability and finding the right store.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              Our Focus
            </p>

            <div className="mt-6 space-y-5">
              {[
                "Authentic branded garments",
                "Reliable apparel brands",
                "Convenient store access",
                "Clear product information",
                "Customer-focused shopping",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#19145F]/10">
                    <BadgeCheckIcon className="h-4 w-4 text-[#19145F]" />
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY TRENDZ PLUS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
              Why Trendz Plus
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A simpler way to shop branded clothing.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our approach is built around authenticity, brand variety,
              accessibility, and a dependable in-store experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#19145F]/10 text-[#19145F]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTHENTICITY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] bg-[#19145F] px-7 py-12 sm:px-12 lg:px-16 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                  <BadgeCheckIcon className="h-5 w-5 text-white" />
                </span>

                <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/60">
                  Authenticity First
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Genuine brands. Transparent shopping.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                Trendz Plus is committed to offering genuine branded garments
                through trusted brand and distribution channels. Our products
                carry applicable manufacturer labels, tags, barcodes, and
                packaging.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Brand Labels",
                "Manufacturer Tags",
                "Product Barcodes",
                "Authentic Merchandise",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-5"
                >
                  <BadgeCheckIcon className="h-5 w-5 text-white/70" />

                  <p className="mt-4 text-sm font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRANDS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
                Our Brands
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted garment brands under one roof.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Explore our selection of garment and apparel brands available
                through Trendz Plus.
              </p>
            </div>

            <Link
              href="/brands"
              className="shrink-0 text-sm font-bold text-[#19145F] hover:underline"
            >
              View all brands →
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {allBrands.slice(0, 20).map((brand) => (
              <Link
                key={brand.name}
                href="/brands"
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#19145F]/20 hover:bg-[#19145F]/5 hover:text-[#19145F]"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STORES
      ========================================================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
                Our Stores
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Visit a Trendz Plus store.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Prefer to see garments in person? Visit one of our stores to
                explore our available brands, check products and sizes, and
                speak with our team.
              </p>

              <Link
                href="/#store-locator"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#19145F] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PinIcon className="h-4 w-4" />
                Find a Trendz Plus Store
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {storeLocations.slice(0, 4).map((store) => (
                <div
                  key={store.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#19145F]/10 text-[#19145F]">
                    <PinIcon className="h-4 w-4" />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-900">
                    {store.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {store.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNAL LINKS / TOPICAL RELEVANCE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
            Explore Trendz Plus
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Find what you are looking for.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link
            href="/brands"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#19145F]/20 hover:shadow-lg"
          >
            <BadgeCheckIcon className="h-6 w-6 text-[#19145F]" />

            <h3 className="mt-5 font-bold text-slate-900">
              Garment Brands
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Browse the brands available through Trendz Plus.
            </p>

            <span className="mt-5 block text-sm font-bold text-[#19145F]">
              Explore brands →
            </span>
          </Link>

          <Link
            href="/#departments"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#19145F]/20 hover:shadow-lg"
          >
            <BoxIcon className="h-6 w-6 text-[#19145F]" />

            <h3 className="mt-5 font-bold text-slate-900">
              Clothing Departments
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Discover our different garment and apparel categories.
            </p>

            <span className="mt-5 block text-sm font-bold text-[#19145F]">
              Browse departments →
            </span>
          </Link>

          <Link
            href="/#store-locator"
            className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#19145F]/20 hover:shadow-lg"
          >
            <PinIcon className="h-6 w-6 text-[#19145F]" />

            <h3 className="mt-5 font-bold text-slate-900">
              Store Locator
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Find your nearest Trendz Plus store and plan your visit.
            </p>

            <span className="mt-5 block text-sm font-bold text-[#19145F]">
              Find a store →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#19145F]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              About Trendz Plus
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none pr-8 text-base font-bold text-slate-900 marker:hidden">
                  {faq.question}
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#19145F]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for genuine branded garments?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            Explore our brands, browse our departments, or visit a Trendz Plus
            store to find the right apparel for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/brands"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#19145F] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Brands
            </Link>

            <Link
              href="/#store-locator"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
            >
              <PinIcon className="h-4 w-4" />
              Find a Store
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#128C7E] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0f7568]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}