# Real Estate with Jasmine

A premium, bilingual (English/Spanish) real estate website built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This build was verified end-to-end with `npm run build` (29 static/SSG pages, zero errors) before delivery — Google Fonts just need real internet access, which your dev machine/host has.

## What's included

- **Pages**: Home, About, Buy, Sell, Communities (+ 7 individual city pages: Ontario, Moreno Valley, Jurupa Valley, Perris, Fontana, Rancho Cucamonga, Menifee), Listings (with filters) + individual property detail pages, FAQ, Contact, Privacy, Terms
- **Bilingual toggle**: EN/ES switch in the navbar (top-right on desktop, in the mobile menu). Currently covers navigation, hero, CTAs, and footer strings — see "Extending the translations" below to finish the rest.
- **Mortgage calculator**: interactive sliders + live pie chart, used on the homepage and every property detail page
- **Lead capture**: validated contact/showing/valuation forms (React Hook Form + Zod) on Home, Sell, and every listing page
- **SEO**: per-page metadata, Open Graph tags, dynamic `sitemap.xml`, `robots.txt`
- **Animations**: Framer Motion page/section reveals, hover states, animated stat counters, mobile menu transitions
- **Dummy data**: `src/data/listings.ts` and `src/data/communities.ts` — replace with your real listings/MLS feed

## Before going live

1. **Google Maps**: add your API key to `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key_here` (used in `src/components/MapSection.tsx`)
2. **Real listings**: swap the dummy data in `src/data/listings.ts` for a live MLS/IDX feed, or keep updating it manually
3. **Contact form backend**: `src/components/ContactForm.tsx` currently simulates a submit — wire the `onSubmit` handler to your CRM, email service (e.g. Resend, SendGrid), or an API route
4. **Real photos**: hero and listing images currently use royalty-free Unsplash photos — replace with Jasmine's actual listing photography
5. **Phone/WhatsApp/email**: update the placeholder number `(909) 555-1234` and email in `src/app/contact/page.tsx` and `src/components/WhatsAppButton.tsx`
6. **Domain**: update `https://realestatewithjasmine.com` in `src/app/layout.tsx` (metadataBase), `sitemap.ts`, and `robots.ts`
7. **Legal**: `/privacy` and `/terms` are placeholders — swap in your brokerage's real policies and DRE license number/Fair Housing statement

## Extending the translations

`src/lib/i18n.ts` holds the EN/ES dictionary and `src/context/language-context.tsx` provides the `useLanguage()` hook (`const { t, locale, setLocale } = useLanguage()`). To fully bilingual-ize page body copy (About bio, Buy/Sell process steps, FAQs, etc.), add those strings to the dictionary and swap the hardcoded English text in each page for `t.yourKey`.

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel (recommended), Netlify, or any Node host:

```bash
npm run build
npm start
```

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · React Hook Form + Zod · Swiper.js · Recharts · Radix UI (accordion)
