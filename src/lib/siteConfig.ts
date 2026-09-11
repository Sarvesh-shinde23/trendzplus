export const siteConfig = {
  name: "TrendzPlus",
  tagline: "House of Readymade Garments",
  since: 2001,

  // The ONLY place the WhatsApp number is defined.
  // Digits only, country code first, no + no spaces no dashes.
  whatsappNumber: "+919137926867",
  whatsappNumberDisplay: "+919137926867",

  // General (non-WhatsApp) contact info, used in the footer.
  supportPhoneDisplay: "+91 9137926867",
  supportEmail: "trendzplusclothing@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;