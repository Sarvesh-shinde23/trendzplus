export type DepartmentId = "general" | "mens" | "womens" | "kids" | "festive";

export interface DepartmentOption {
  id: DepartmentId;
  label: string;
}

export const departmentOptions: DepartmentOption[] = [
  { id: "general", label: "Not sure / General" },
  { id: "mens", label: "Men's Apparel" },
  { id: "womens", label: "Women's Collection" },
  { id: "kids", label: "Kids & Teens Zone" },
  { id: "festive", label: "Festive & Occasion" },
];

export type PurposeId =
  | "general"
  | "availability"
  | "timings"
  | "offers"
  | "trial"
  | "bulk"
  | "other";

export interface PurposeOption {
  id: PurposeId;
  label: string;
}

export const purposeOptions: PurposeOption[] = [
  { id: "general", label: "General Enquiry" },
  { id: "availability", label: "Product Availability" },
  { id: "timings", label: "Store Timings" },
  { id: "offers", label: "Festive Offers" },
  { id: "trial", label: "Trial Room / Fitting" },
  { id: "bulk", label: "Bulk / Corporate Order" },
  { id: "other", label: "Other" },
];

// Passed by the calling CTA so the modal knows what to preselect and log.
export interface EnquiryPrefill {
  source: string;
  department?: DepartmentId;
  purposeId?: PurposeId;
  product?: ProductContext;
  locationId?: string;
}
export interface ProductContext {
  label: string;       // "Peter England — Pure Cotton Formal Shirt"
  priceLabel?: string;  // "₹899 (MRP ₹1,499)"
  sizeLabel?: string;   // "Sizes in stock: 38, 40, 42, 44"
}
export interface EnquiryFormData {
  fullName: string;
  phone: string;
  locationId: string;
  purposeId: PurposeId | "";
  department: DepartmentId;
  message: string;
  source: string;
  product?: ProductContext;
}

export const emptyFormData = (prefill: EnquiryPrefill | null): EnquiryFormData => ({
  fullName: "",
  phone: "",
  locationId: prefill?.locationId ?? "",
  purposeId: prefill?.purposeId ?? "",
  department: prefill?.department ?? "general",
  message: prefill?.product
    ? `I'd like to check availability for "${prefill.product.label}" before visiting.`
    : prefill?.locationId
    ? "I'd like to know more before visiting this store."
    : "",
  source: prefill?.source ?? "Unknown",
  product: prefill?.product,
});