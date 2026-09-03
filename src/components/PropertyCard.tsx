"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, BedDouble, Bath, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import type { Listing } from "@/data/listings";
import { formatPrice } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export default function PropertyCard({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group overflow-hidden rounded-xl2 bg-white shadow-card"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-gold-400">
          {listing.type}
        </span>
        <button
          onClick={() => setSaved((s) => !s)}
          aria-label="Save listing"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 transition-colors hover:text-gold-600"
        >
          <Heart size={16} fill={saved ? "#C8A24D" : "none"} stroke={saved ? "#C8A24D" : "currentColor"} />
        </button>
      </div>
      <div className="p-5">
        <p className="font-display text-xl font-bold text-navy-900">{formatPrice(listing.price)}</p>
        <h3 className="mt-1 truncate text-base font-semibold text-navy-800">{listing.title}</h3>
        <p className="text-sm text-navy-400">{listing.city}, CA</p>

        <div className="mt-4 flex items-center gap-4 border-t border-navy-100 pt-4 text-sm text-navy-600">
          <span className="flex items-center gap-1.5"><BedDouble size={16} /> {listing.beds} {t.common.beds}</span>
          <span className="flex items-center gap-1.5"><Bath size={16} /> {listing.baths} {t.common.baths}</span>
          <span className="flex items-center gap-1.5"><Ruler size={16} /> {listing.sqft.toLocaleString()}</span>
        </div>

        <Link
          href={`/listings/${listing.id}`}
          className="mt-5 block rounded-full border border-navy-900 py-2.5 text-center text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
        >
          {t.common.viewDetails}
        </Link>
      </div>
    </motion.div>
  );
}
