export interface Listing {
  id: string;
  title: string;
  city: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: "Single Family" | "Townhome" | "Condo" | "New Build";
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  lat: number;
  lng: number;
  featured?: boolean;
}

export const listings: Listing[] = [
  {
    id: "ontario-01",
    title: "Modern Farmhouse Estate",
    city: "Ontario",
    price: 689900,
    beds: 5,
    baths: 3,
    sqft: 3120,
    type: "New Build",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A light-filled new build with an open-concept kitchen, oversized island, and a covered California room perfect for entertaining.",
    features: ["Attached 3-car garage", "Owned solar", "Quartz countertops", "Loft + 5th bedroom"],
    lat: 34.0633,
    lng: -117.6509,
    featured: true,
  },
  {
    id: "morenovalley-01",
    title: "Sunrise Ridge Family Home",
    city: "Moreno Valley",
    price: 482990,
    beds: 4,
    baths: 3,
    sqft: 2410,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Move-in ready with a bright great room, low-maintenance backyard, and a primary suite with dual walk-in closets.",
    features: ["Patio + backyard", "2.5 bathrooms", "Near top-rated schools", "Low HOA"],
    lat: 33.9425,
    lng: -117.2297,
    featured: true,
  },
  {
    id: "menifee-01",
    title: "Menifee Modern Retreat",
    city: "Menifee",
    price: 512000,
    beds: 4,
    baths: 3,
    sqft: 2650,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
    ],
    description: "A spacious loft, chef's kitchen, and a resort-style community pool just minutes away.",
    features: ["Loft", "Community pool", "3-car tandem garage", "Energy-efficient windows"],
    lat: 33.6971,
    lng: -117.1851,
  },
  {
    id: "jurupavalley-01",
    title: "Jurupa Valley Mountain View Home",
    city: "Jurupa Valley",
    price: 548290,
    beds: 4,
    baths: 2.5,
    sqft: 2280,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop"],
    description: "Panoramic mountain views, an open backyard ready for a garden, and a versatile flex room.",
    features: ["Mountain views", "Flex room", "Tankless water heater"],
    lat: 33.9992,
    lng: -117.4459,
  },
  {
    id: "perris-01",
    title: "No-HOA Family Home",
    city: "Perris",
    price: 468250,
    beds: 5,
    baths: 3,
    sqft: 2900,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"],
    description: "Over 3,000 sqft of living space with no HOA, RV parking potential, and a large corner lot.",
    features: ["No HOA", "Corner lot", "RV parking potential"],
    lat: 33.7825,
    lng: -117.2286,
  },
  {
    id: "fontana-01",
    title: "Fontana Starter Home",
    city: "Fontana",
    price: 499000,
    beds: 3,
    baths: 2,
    sqft: 1780,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"],
    description: "Ideal for first-time buyers — updated kitchen, new roof, and low $18K down payment assistance eligible.",
    features: ["New roof", "Updated kitchen", "First-time buyer eligible"],
    lat: 34.0922,
    lng: -117.435,
  },
  {
    id: "ranchocucamonga-01",
    title: "Rancho Cucamonga Estate",
    city: "Rancho Cucamonga",
    price: 2100000,
    beds: 6,
    baths: 5,
    sqft: 5400,
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"],
    description: "An entertainer's dream with a pool, casita, wine cellar, and views of the foothills.",
    features: ["Pool + spa", "Casita", "Wine cellar", "3-car garage"],
    lat: 34.1064,
    lng: -117.5931,
    featured: true,
  },
];

export const getListingById = (id: string) => listings.find((l) => l.id === id);
export const featuredListings = listings.filter((l) => l.featured);
