"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
        alt="Luxury Southern California home at dusk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 bg-navy-950/30" />

      <div className="container-page relative z-10 text-white">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-300"
        >
          Southern California &middot; Inland Empire
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          {t.hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl font-body text-lg text-white/85"
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Link href="/contact" className="btn-gold">
            {t.hero.ctaPrimary}
          </Link>
          <Link href="/listings" className="btn-outline">
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-white/50" />
      </motion.div>
    </section>
  );
}
