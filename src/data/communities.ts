export interface Community {
  slug: string;
  name: string;
  image: string;
  avgPrice: string;
  description: string;
  schools: string[];
  shopping: string[];
  restaurants: string[];
  parks: string[];
  lifestyle: string;
  lat: number;
  lng: number;
}

export const communities: Community[] = [
  {
    slug: "ontario",
    name: "Ontario",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$620,000",
    description:
      "A growing hub with easy freeway access, new master-planned communities, and a fast-modernizing downtown core.",
    schools: ["Chaffey Joint Union High School District", "Ontario-Montclair School District"],
    shopping: ["Ontario Mills", "Downtown Ontario"],
    restaurants: ["The Little Bird", "Nando's Peri-Peri"],
    parks: ["Ontario Community Park", "Cucamonga-Guasti Regional Park"],
    lifestyle: "Family-friendly with quick access to LA and the Inland Empire job corridor.",
    lat: 34.0633,
    lng: -117.6509,
  },
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$495,000",
    description:
      "One of the fastest-growing new-build markets in Riverside County, popular with first-time buyers and growing families.",
    schools: ["Moreno Valley Unified School District"],
    shopping: ["Moreno Valley Mall"],
    restaurants: ["Farmer Boys", "Sunnyside Grill"],
    parks: ["Towngate Memorial Park", "Lake Perris State Recreation Area"],
    lifestyle: "New construction, spacious lots, and strong value for growing households.",
    lat: 33.9425,
    lng: -117.2297,
  },
  {
    slug: "jurupa-valley",
    name: "Jurupa Valley",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$560,000",
    description: "A quieter, view-oriented community bordered by the Santa Ana River and rolling hills.",
    schools: ["Jurupa Unified School District"],
    shopping: ["Pedley Marketplace"],
    restaurants: ["El Patron", "Pedley Cafe"],
    parks: ["Rancho Jurupa Park"],
    lifestyle: "Semi-rural charm with mountain views and easy access to Riverside.",
    lat: 33.9992,
    lng: -117.4459,
  },
  {
    slug: "perris",
    name: "Perris",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$470,000",
    description: "Larger lots, no-HOA neighborhoods, and some of the region's most affordable new construction.",
    schools: ["Perris Union High School District"],
    shopping: ["Perris Towne Center"],
    restaurants: ["El Torito Grill", "Amelia's"],
    parks: ["Paul Bratton Community Park", "Lake Perris"],
    lifestyle: "Space, affordability, and room to grow — popular with larger families.",
    lat: 33.7825,
    lng: -117.2286,
  },
  {
    slug: "fontana",
    name: "Fontana",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$530,000",
    description: "A well-connected city along the 10 freeway with strong resale value and established neighborhoods.",
    schools: ["Fontana Unified School District"],
    shopping: ["Fontana Shopping Center"],
    restaurants: ["Cask & Cleaver", "Los Pinos"],
    parks: ["Falcon Ridge Town Center Park"],
    lifestyle: "Convenient commuter city with a mix of established and new-build homes.",
    lat: 34.0922,
    lng: -117.435,
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$780,000",
    description: "Upscale foothill living with top-ranked schools, wineries, and walkable shopping districts.",
    schools: ["Etiwanda School District", "Chaffey Joint Union High School District"],
    shopping: ["Victoria Gardens"],
    restaurants: ["Sushi Kiyosaki", "The Sycamore Inn"],
    parks: ["Red Hill Community Park", "Central Park"],
    lifestyle: "Premium foothill community favored by move-up and luxury buyers.",
    lat: 34.1064,
    lng: -117.5931,
  },
  {
    slug: "menifee",
    name: "Menifee",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    avgPrice: "$515,000",
    description: "Master-planned new-build communities with resort-style amenities and top-rated schools.",
    schools: ["Menifee Union School District", "Perris Union High School District"],
    shopping: ["Menifee Town Center"],
    restaurants: ["Filippi's Pizza Grotto", "Le Rendezvous"],
    parks: ["Wheatfield Park", "Wheatfield Community Park"],
    lifestyle: "Fast-growing and family-oriented, with new amenities added every year.",
    lat: 33.6971,
    lng: -117.1851,
  },
];

export const getCommunityBySlug = (slug: string) => communities.find((c) => c.slug === slug);
