"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { communities } from "@/data/communities";

export default function SearchBar() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (type) params.set("type", type);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.push(`/listings?${params.toString()}`);
  };

  return (
    <div className="-mt-12 relative z-20 mx-auto max-w-4xl rounded-xl2 bg-white p-4 shadow-card sm:p-5">
      <div className="grid gap-3 sm:grid-cols-4">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-700 focus:border-gold-500 focus:outline-none"
        >
          <option value="">Any City</option>
          {communities.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-700 focus:border-gold-500 focus:outline-none"
        >
          <option value="">Property Type</option>
          <option>Single Family</option>
          <option>Townhome</option>
          <option>Condo</option>
          <option>New Build</option>
        </select>
        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="rounded-lg border border-navy-100 px-4 py-3 text-sm text-navy-700 focus:border-gold-500 focus:outline-none"
        >
          <option value="">Max Price</option>
          <option value="500000">$500,000</option>
          <option value="750000">$750,000</option>
          <option value="1000000">$1,000,000</option>
          <option value="2500000">$2,500,000+</option>
        </select>
        <button onClick={handleSearch} className="btn-gold flex items-center justify-center gap-2">
          <Search size={16} /> Search
        </button>
      </div>
    </div>
  );
}
