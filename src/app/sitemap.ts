import type { MetadataRoute } from "next";
import { listings } from "@/data/listings";
import { communities } from "@/data/communities";

const BASE_URL = "https://realestatewithjasmine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/buy", "/sell", "/communities", "/listings", "/faq", "/contact"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const communityRoutes = communities.map((c) => ({
    url: `${BASE_URL}/communities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const listingRoutes = listings.map((l) => ({
    url: `${BASE_URL}/listings/${l.id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...communityRoutes, ...listingRoutes];
}
