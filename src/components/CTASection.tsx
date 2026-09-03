"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section className="section relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-page relative z-10 text-center text-white"
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>
        <Link href={ctaHref} className="btn-gold mt-8 inline-block">
          {ctaLabel}
        </Link>
      </motion.div>
    </section>
  );
}
