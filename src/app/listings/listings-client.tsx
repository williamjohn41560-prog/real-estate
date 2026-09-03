"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { listings } from "@/data/listings";
import PropertyCard from "@/components/PropertyCard";

export default function ListingsClient() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(params.get("city") ?? "");
  const [type, setType] = useState(params.get("type") ?? "");
  const [beds, setBeds] = useState("");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") ?? "");

  const cities = useMemo(() => Array.from(new Set(listings.map((l) => l.city))), []);

  const filtered = listings.filter((l) => {
    if (query && !l.title.toLowerCase().includes(query.toLowerCase()) && !l.city.toLowerCase().includes(query.toLowerCase())) return false;
    if (city && l.city !== city) return false;
    if (type && l.type !== type) return false;
    if (beds && l.beds < Number(beds)) return false;
    if (maxPrice && l.price > Number(maxPrice)) return false;
    return true;
  });

  return (
    <>
      <div className="rounded-xl2 bg-white p-5 shadow-card">
        <div className="grid gap-3 sm:grid-cols-5">
          <div className="relative sm:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or title"
              className="w-full rounded-lg border border-navy-100 py-3 pl-9 pr-3 text-sm focus:border-gold-500 focus:outline-none"
            />
          </div>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-lg border border-navy-100 px-3 py-3 text-sm focus:border-gold-500 focus:outline-none">
            <option value="">Any City</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-lg border border-navy-100 px-3 py-3 text-sm focus:border-gold-500 focus:outline-none">
            <option value="">Property Type</option>
            <option>Single Family</option>
            <option>Townhome</option>
            <option>Condo</option>
            <option>New Build</option>
          </select>
          <select value={beds} onChange={(e) => setBeds(e.target.value)} className="rounded-lg border border-navy-100 px-3 py-3 text-sm focus:border-gold-500 focus:outline-none">
            <option value="">Min Beds</option>
            {[2, 3, 4, 5].map((b) => (
              <option key={b} value={b}>{b}+</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-400">{filtered.length} homes found</p>

      <div className="mt-4 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <PropertyCard key={l.id} listing={l} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-navy-400">
            No homes match those filters yet — try widening your search or contact Jasmine directly.
          </p>
        )}
      </div>
    </>
  );
}
