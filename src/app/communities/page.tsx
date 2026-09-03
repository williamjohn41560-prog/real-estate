import type { Metadata } from "next";
import CommunityCard from "@/components/CommunityCard";
import CTASection from "@/components/CTASection";
import { communities } from "@/data/communities";

export const metadata: Metadata = {
  title: "Communities We Serve",
  description: "Explore Ontario, Moreno Valley, Jurupa Valley, Perris, Fontana, Rancho Cucamonga, and Menifee.",
};

export default function CommunitiesPage() {
  return (
    <>
      <section className="section mt-20 bg-navy-950 text-white">
        <div className="container-page text-center">
          <p className="eyebrow text-gold-300">Communities</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">Southern California Neighborhoods We Know Best</h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((c) => (
            <CommunityCard key={c.slug} community={c} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Community Fits You?"
        subtitle="Tell Jasmine your priorities and get personalized neighborhood recommendations."
        ctaLabel="Schedule Consultation"
      />
    </>
  );
}
