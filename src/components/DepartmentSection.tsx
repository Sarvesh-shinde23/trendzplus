"use client";

import Image from "next/image";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import type { DepartmentId } from "@/lib/enquiry";
import { ArrowRightIcon } from "./Icons";


interface Department {
  id: DepartmentId;
  badge: string;
  badgeTone: "navy" | "orange";
  image: string;
  count: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

const departments: Department[] = [
  {
    id: "mens",
    badge: "STARTING ₹599",
    badgeTone: "navy",
    image: "/depts-mens.png",
    count: "1,200+ Designs",
    title: "Men's Apparel",
    description:
      "Formal Shirts, Chinos, Rugged Denims, Polo T-shirts, Casual Linen, and Festive Silk Kurta Sets.",
    cta: "Explore Men's Wear",
    href: "/departments/mens",
  },
  {
    id: "womens",
    badge: "STARTING ₹499",
    badgeTone: "navy",
    image: "/depts-womens.png",
    count: "2,400+ Designs",
    title: "Women's Collection",
    description:
      "Designer Kurtis, Cotton Suits, Printed Dupattas, Western Tops, Casual Jumpsuits, and Daily Leggings.",
    cta: "Explore Women's Wear",
    href: "/departments/womens",
  },
  {
    id: "kids",
    badge: "STARTING ₹349",
    badgeTone: "navy",
    image: "/depts-kids.png",
    count: "Boys & Girls (0–16 Yrs)",
    title: "Kids & Teens Zone",
    description:
      "Party Gowns, Boys Waistcoat Sets, Cotton Track Pants, Birthday Wear, and Active Play Apparel.",
    cta: "Explore Kids Wear",
    href: "/departments/kids",
  },
  {
    id: "festive",
    badge: "SPECIAL FESTIVE DISCOUNTS",
    badgeTone: "orange",
    image: "/depts-festive.png",
    count: "Family Combos",
    title: "Festive & Occasion",
    description:
      "Bandhgala Suits, Designer Indo-Western, Semi-bridal Lehengas, and Color-coordinated Family Combos.",
    cta: "Explore Festive Wear",
    href: "/departments/festive",
  },
];
export default function DepartmentSection() {
  const { openModal } = useEnquiryModal();

  return (
    <section id="departments" className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              👤 Complete Departmental Range
            </span>
            <h2 className="mt-1 text-3xl font-extrabold text-navy-900">
              Explore by Department
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Practical, comfortable, and celebratory clothing tailored for Indian families.
            </p>
          </div>
          <p className="text-xs font-medium text-slate-400">
            All sizes from Newborn to 5XL Available
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-60 w-full">
                <Image src={dept.image} alt={dept.title} fill className="object-cover" />
                {/* <span
                  className={[
                    "absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold text-white",
                    dept.badgeTone === "navy" ? "bg-navy-900" : "bg-orange-500",
                  ].join(" ")}
                >
                  {dept.badge}
                </span> */}
                <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white">
                  {dept.count}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-navy-900">{dept.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {dept.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      source: `Department Section — ${dept.title}`,
                      department: dept.id,
                      purposeId: "availability",
                    })
                  }
                  className="mt-3 flex items-center gap-1 text-sm font-semibold text-navy-900 hover:gap-2"
                >
                  {dept.cta} <ArrowRightIcon className="h-4 w-4 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}