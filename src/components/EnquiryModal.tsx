"use client";

import { useEffect, useMemo, useState } from "react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { storeLocations } from "@/lib/locations";
import {
  departmentOptions,
  purposeOptions,
  emptyFormData,
  type EnquiryFormData,
} from "@/lib/enquiry";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { CloseIcon, WhatsAppIcon } from "./Icons";


type FieldErrors = Partial<Record<keyof EnquiryFormData, string>>;

const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian 10-digit mobile, adjust if needed

export default function EnquiryModal() {
  const { isOpen, prefill, closeModal } = useEnquiryModal();
  const [form, setForm] = useState<EnquiryFormData>(() => emptyFormData(prefill));
  const [errors, setErrors] = useState<FieldErrors>({});

  // Re-seed the form every time the modal is opened with new context.
  useEffect(() => {
    if (isOpen) {
      setForm(emptyFormData(prefill));
      setErrors({});
    }
  }, [isOpen, prefill]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  const sourceLabel = useMemo(() => prefill?.source ?? "Website", [prefill]);

  if (!isOpen) return null;

  function update<K extends keyof EnquiryFormData>(key: K, value: EnquiryFormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.phone.trim()) {
      next.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(form.phone.trim())) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!form.locationId) next.locationId = "Please select a store.";
    if (!form.purposeId) next.purposeId = "Please select an enquiry purpose.";
    if (!form.message.trim()) next.message = "Please add a short message.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage(form);
    const url = buildWhatsAppUrl(message);

    window.open(url, "_blank", "noopener,noreferrer");
    closeModal();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 id="enquiry-modal-title" className="text-lg font-bold text-navy-900">
              Send us an Enquiry
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Enquiring about:{" "}
              <span className="font-medium text-slate-700">{sourceLabel}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        {/* Form */}
        <form onSubmit={handleSubmit} className="max-h-[75vh] space-y-4 overflow-y-auto px-6 py-5">
          {form.product && (
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Product
              </p>
              <p className="mt-0.5 text-sm font-semibold text-navy-900">
                {form.product.label}
              </p>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-500">
                {form.product.priceLabel && <span>{form.product.priceLabel}</span>}
                {form.product.sizeLabel && <span>{form.product.sizeLabel}</span>}
              </div>
            </div>
          )}

          <Field label="Full Name" error={errors.fullName} htmlFor="fullName">
            <input
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="e.g. Riya Sharma"
              className={inputClass(!!errors.fullName)}
            />
          </Field>

          <Field label="Phone Number" error={errors.phone} htmlFor="phone">
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value.replace(/[^\d]/g, ""))}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={inputClass(!!errors.phone)}
            />
          </Field>

          <Field label="Store Location" error={errors.locationId} htmlFor="locationId">
            <select
              id="locationId"
              value={form.locationId}
              onChange={(e) => update("locationId", e.target.value)}
              className={inputClass(!!errors.locationId)}
            >
              <option value="">Select a store</option>
              {storeLocations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name} — {loc.city}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Enquiry Purpose" error={errors.purposeId} htmlFor="purposeId">
              <select
                id="purposeId"
                value={form.purposeId}
                onChange={(e) => update("purposeId", e.target.value as EnquiryFormData["purposeId"])}
                className={inputClass(!!errors.purposeId)}
              >
                <option value="">Select purpose</option>
                {purposeOptions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Department" htmlFor="department">
              <select
                id="department"
                value={form.department}
                onChange={(e) => update("department", e.target.value as EnquiryFormData["department"])}
                className={inputClass(false)}
              >
                {departmentOptions.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Request / Message" error={errors.message} htmlFor="message">
            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us what you're looking for..."
              className={inputClass(!!errors.message)}
            />
          </Field>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb959]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send via WhatsApp
          </button>
          <p className="text-center text-[11px] text-slate-400">
            You'll be redirected to WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-xs font-semibold text-slate-600">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-800 outline-none transition",
    "focus:ring-2 focus:ring-navy-900/20",
    hasError ? "border-red-400" : "border-slate-200 focus:border-navy-900",
  ].join(" ");
}