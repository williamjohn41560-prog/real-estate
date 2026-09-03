"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, Home as HomeIcon } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { communities } from "@/data/communities";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 pt-16 text-white/80">
      <div className="container-page grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
              <HomeIcon size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold">Real Estate with Jasmine</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Helping families find their dream home across the Inland Empire and Southern California — en inglés y español.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold text-white">{t.footer.quickLinks}</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/about", t.nav.about],
              ["/buy", t.nav.buy],
              ["/sell", t.nav.sell],
              ["/listings", t.nav.listings],
              ["/faq", t.nav.faq],
            ].map(([href, label]) => (
              <li key={href as string}>
                <Link href={href as string} className="transition-colors hover:text-gold-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold text-white">{t.footer.communities}</h4>
          <ul className="space-y-2.5 text-sm">
            {communities.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={`/communities/${c.slug}`} className="transition-colors hover:text-gold-400">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-base font-semibold text-white">{t.footer.newsletterTitle}</h4>
          <p className="mb-3 text-sm text-white/60">{t.footer.newsletterSub}</p>
          <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
            />
            <button className="btn-gold w-full whitespace-nowrap px-5 py-2.5 text-sm sm:w-auto">{t.footer.subscribe}</button>
          </form>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Real Estate with Jasmine. {t.footer.rights}</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold-400">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-gold-400">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
