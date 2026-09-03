"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Community } from "@/data/communities";

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <Link href={`/communities/${community.slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="group relative h-80 overflow-hidden rounded-xl2 shadow-card"
      >
        <Image
          src={community.image}
          alt={community.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="font-display text-xl font-bold">{community.name}</h3>
          <p className="mt-1 text-sm text-gold-300">Avg. {community.avgPrice}</p>
        </div>
      </motion.div>
    </Link>
  );
}
