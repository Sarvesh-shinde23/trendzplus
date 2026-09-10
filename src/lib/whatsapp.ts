import { siteConfig } from "./siteConfig";

import { departmentOptions, purposeOptions, EnquiryFormData } from "./enquiry";
import { storeLocations } from "./locations";

export function buildWhatsAppMessage(data: EnquiryFormData): string {
  const location = storeLocations.find((l) => l.id === data.locationId);
  const purpose = purposeOptions.find((p) => p.id === data.purposeId);
  const department = departmentOptions.find((d) => d.id === data.department);

    const productLines = data.product
    ? [
        `Product: ${data.product.label}`,
        ...(data.product.priceLabel ? [`Price: ${data.product.priceLabel}`] : []),
        ...(data.product.sizeLabel ? [`Stock Check: ${data.product.sizeLabel}`] : []),
        "",
      ]
    : [];

  const lines = [
    `New Enquiry — ${siteConfig.name}`,
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Store Location: ${location ? `${location.name}, ${location.city}` : "Not specified"}`,
    `Enquiry Purpose: ${purpose ? purpose.label : "Not specified"}`,
    `Department: ${department ? department.label : "Not specified"}`,
    "",
    ...productLines,
    "Request/Message:",
    data.message,
    "",
    `Enquiry Source: ${data.source}`,
  ];

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function buildDirectWhatsAppUrl(message: string): string {
  return buildWhatsAppUrl(message);
}