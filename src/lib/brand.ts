export interface Brand {
  name: string;
  tagline: string;
}

// Shown on the landing page (12 brands)
export const featuredBrands: Brand[] = [
  { name: "Jockey", tagline: "Innerwear Essentials" },
  { name: "Van Heusen", tagline: "Executive Shirts" },
  { name: "Oxemberg", tagline: "Premium Innerwear" },
  { name: "Lux Cozi", tagline: "Comfort Innerwear" },
  { name: "Dixcy Scott", tagline: "Everyday Innerwear" },
  { name: "J Hampstead", tagline: "Formal Shirting" },
  { name: "Oxford", tagline: "Classic Shirts" },
  { name: "TechnoSport", tagline: "Active Sportswear" },
  { name: "Rupa", tagline: "Trusted Innerwear" },
  { name: "Doreme", tagline: "Kids Innerwear" },
  { name: "Lyra", tagline: "Leggings & Bottoms" },
  { name: "Jojo", tagline: "Kids Wear" },
];

// Full catalog — shown on /brands
export const topBrands: string[] = featuredBrands.map((b) => b.name);

export const otherBrands: string[] = [
  "Juliet", "Grammar", "Signature", "Natkhat", "Little Doll", "Naino Girl Wear",
  "Mohak Girl Wear", "Dream Girl!", "Funky Star", "Hello Brother", "Mad Boy",
  "Boys Fun", "Beckaam", "Bee 10", "Ronaldo", "Novelty", "Blackjack", "Royal Wood",
  "Alliance", "Paapal", "C&S", "Just Feel", "La Fille", "FREAK", "Vogartino",
  "CL's - Chess Line", "Woops", "Saffron", "ONN", "SUKANYA", "Glory", "Pink Rabbit",
  "Neo Nate", "Little Me", "Two Kids", "Uno Kids", "Wow", "Mix & Max", "Tini Troop",
  "Neelkanth", "Pkids", "Toddler Zone", "Zilo", "Body Care", "Pink", "Trylo",
  "Sonari", "First Day", "Smarty Boys", "Little Hub", "Deep", "Zinc", "Azzzurro",
  "Curve", "Kuch Kuch", "Stride", "Canon", "Himalaya", "Xzone", "Killer", "Luna",
  "Florich", "Jinal", "Comfort", "Foram", "Formal Girl", "Clothly", "Derma Wear",
  "Inspire", "Sceylo", "Macho", "CodeX", "Sparky", "Patel", "Classic Cap",
  "Madmax", "Luemen", "Pan America", "Integriti", "Zdox", "John Noble", "Merino",
  "Vecent", "Neva", "Hike", "Hikon", "Swaroop", "Sanjeevni", "Ramraj", "Duke",
  "Amendus", "Kanchiro",
];