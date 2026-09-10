export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  altPhone?: string;
  hours?: string;
  badge?: string;
  image?: string;
  feature?: string;
  featured?: boolean;
}

export const storeLocations: StoreLocation[] = [
  {
    id: "trendz-plus-kids",
    name: "Trendz Plus - Kids",
    city: "Kamothe, Navi Mumbai",
    address:
      "Shop No-08, Satyaketu Complex, Plot No-09, Sector No-35, Opposite Kamothe Police Station, Kamothe, Navi Mumbai, Maharashtra - 410209",
    phone: "+91 9892470143",
    hours: "10:00 AM – 9:30 PM",
    badge: "KIDS WEAR",
    featured: true,
    image:"/shop/trendz_plus_kids.png"
  },

  {
    id: "trendz-plus-mens-wear",
    name: "Trendz Plus Mens Wear",
    city: "Kamothe, Navi Mumbai",
    address:
      "Shop No-10, Satyaketu Complex, Plot No-09, Sector No-35, Opposite Kamothe Police Station, Kamothe, Navi Mumbai, Maharashtra - 410209",
    phone: "+91 9892470143",
    hours: "10:00 AM – 9:30 PM",
    badge: "MENS WEAR",
    featured: true,
     image:"/shop/trendz_plus_mens.png"
  },

  {
    id: "trendz-plus-nx",
    name: "Trendz Plus NX",
    city: "Kamothe, Navi Mumbai",
    address:
      "Shop No-02, Satyaketu Complex, Plot No-09, Sector No-35, Opposite Kamothe Police Station, Kamothe, Navi Mumbai, Maharashtra - 410209",
    phone: "+91 9892470143",
    hours: "10:00 AM – 9:30 PM",
    badge: "LADIES WEAR",
    featured: true,
     image:"/shop/trendz_plus_nx.png"
  },

  {
    id: "trendz-plus-ethnic",
    name: "Trendz Plus - Ethnic",
    city: "Kamothe, Navi Mumbai",
    address:
      "Shop No-06, Satyaketu Complex, Plot No-09, Sector No-35, Opposite Kamothe Police Station, Kamothe, Navi Mumbai, Maharashtra - 410209",
    phone: "+91 9892470143",
    hours: "10:00 AM – 9:30 PM",
    badge: "ETHNIC WEAR",
    featured: true,
     image:"/shop/trendz_plus_ethnic.png"
  },

  {
    id: "trendz-plus-family-showroom",
    name: "Trendz Plus - The Family Showroom",
    city: "Seorahi, Kushinagar",
    address:
      "Tamkuhi Road, Main Road, Post-Seorahi, District Kushinagar, Uttar Pradesh - 274406",
    phone: "+91 9004065183",
    hours: "10:00 AM – 9:30 PM",
    badge: "FAMILY SHOWROOM",
    featured: true,
     image:"/shop/showroom.jpg"
  },
];

export function directionsUrl(loc: StoreLocation): string {
  const query = encodeURIComponent(
    `${loc.name}, ${loc.address}, ${loc.city}`
  );

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
export function callUrl(loc: StoreLocation): string {
  // tel: links want a clean numeral string — strip spaces, keep the leading +.
  const digits = loc.phone?.replace(/[^\d+]/g, "") ?? "";
  return `tel:${digits}`;
}