"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/buy", key: "buy" },
  { href: "/sell", key: "sell" },
  { href: "/communities", key: "communities" },
  { href: "/listings", key: "listings" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || !isHome ? "glass shadow-card" : "bg-transparent"
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
            <HomeIcon size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            Real Estate <span className="text-gold-400">with Jasmine</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-gold-400"
              >
                {t.nav[l.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Toggle language"
            className="rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <Link href="/contact" className="btn-gold text-sm">
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-navy-950 lg:hidden"
          >
            <div className="container-page flex h-20 items-center justify-between">
              <span className="font-display text-lg font-semibold text-white">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <X size={28} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-6 pt-4"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 text-xl font-display text-white"
                  >
                    {t.nav[l.key]}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-page mt-6 flex items-center gap-4">
              <button
                onClick={() => setLocale(locale === "en" ? "es" : "en")}
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white"
              >
                {locale === "en" ? "Español" : "English"}
              </button>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold flex-1 text-center">
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
