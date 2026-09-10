export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We bought complete Diwali outfits for both our kids and ourselves from the MG Road branch. We saved at least ₹3,000 compared to other stores, and the on-site alteration master fixed my trousers in 15 minutes!",
    name: "Rajesh & Kavita Sharma",
    meta: "Shoppers for 6 Years • Sector 14",
    initials: "RK",
  },
  {
    quote:
      "The multi-brand variety is huge. Getting Raymond, Peter England, and Aurelia kurtis in the same billing counter without mall confusion is the biggest relief. Parking was hassle-free.",
    name: "Ananya Mukherjee",
    meta: "Regular Buyer • City Center Mall",
    initials: "AM",
  },
  {
    quote:
      "My son had a school function and needed a traditional kurta set urgently. I texted their WhatsApp number, they sent 4 photos in 5 minutes, held the size, and I picked it up right away.",
    name: "Vikram Patel",
    meta: "Westside Bypass Branch",
    initials: "VP",
  },
];