import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsCounter from "@/components/StatsCounter";
import PropertyCard from "@/components/PropertyCard";
import CommunityCard from "@/components/CommunityCard";
import MortgageCalculator from "@/components/MortgageCalculator";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Link from "next/link";
import { featuredListings, listings } from "@/data/listings";
import { communities } from "@/data/communities";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchBar />

      <StatsCounter />
      <WhyChooseUs />

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Handpicked</p>
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Featured Listings</h2>
            </div>
            <Link href="/listings" className="text-sm font-semibold text-gold-600 hover:underline">
              View All Listings &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page">
          <p className="eyebrow">Where We Sell</p>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Featured Communities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((c) => (
              <CommunityCard key={c.slug} community={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Just Listed</p>
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Latest Listings</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {listings.slice(0, 6).map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page">
          <p className="eyebrow text-center">Plan Ahead</p>
          <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-4xl">Mortgage Calculator</h2>
          <div className="mx-auto mt-10 max-w-4xl">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <Testimonials />
      <InstagramFeed />

      <CTASection
        title="Ready to Find Your Dream Home?"
        subtitle="Schedule a free, no-pressure consultation with Jasmine today — in English or Español."
        ctaLabel="Schedule Consultation"
      />

      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Let&apos;s Talk About Your Move</h2>
            <p className="mt-4 max-w-md text-navy-500">
              Call, text, or WhatsApp — Jasmine typically responds within the hour.
            </p>
            <div className="mt-8">
              <MapSection query="Ontario, CA" height={320} />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
