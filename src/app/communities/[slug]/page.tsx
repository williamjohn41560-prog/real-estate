import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { School, ShoppingBag, UtensilsCrossed, Trees } from "lucide-react";
import { communities, getCommunityBySlug } from "@/data/communities";
import { listings } from "@/data/listings";
import PropertyCard from "@/components/PropertyCard";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};
  return {
    title: `${community.name} Homes for Sale`,
    description: community.description,
  };
}

export default async function CommunityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const localListings = listings.filter((l) => l.city === community.name);

  return (
    <>
      <section className="relative mt-20 flex h-[50vh] min-h-[380px] items-end">
        <Image src={community.image} alt={community.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-navy-950/20" />
        <div className="container-page relative z-10 pb-10 text-white">
          <p className="eyebrow text-gold-300">Community Guide</p>
          <h1 className="text-4xl font-bold sm:text-5xl">{community.name}, CA</h1>
          <p className="mt-2 text-lg text-gold-300">Average Home Price: {community.avgPrice}</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-navy-600">{community.description}</p>
            <p className="mt-4 leading-relaxed text-navy-600">{community.lifestyle}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <InfoBlock icon={School} title="Schools" items={community.schools} />
              <InfoBlock icon={ShoppingBag} title="Shopping" items={community.shopping} />
              <InfoBlock icon={UtensilsCrossed} title="Restaurants" items={community.restaurants} />
              <InfoBlock icon={Trees} title="Parks" items={community.parks} />
            </div>
          </div>
          <div>
            <MapSection query={`${community.name}, CA`} height={360} />
          </div>
        </div>
      </section>

      {localListings.length > 0 && (
        <section className="section bg-offwhite">
          <div className="container-page">
            <p className="eyebrow">Available Now</p>
            <h2 className="text-3xl font-bold text-navy-900">Featured Listings in {community.name}</h2>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {localListings.map((l) => (
                <PropertyCard key={l.id} listing={l} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Thinking About ${community.name}?`}
        subtitle="Get personalized listing alerts and neighborhood insight from Jasmine."
        ctaLabel="Contact Agent"
      />
    </>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof School;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl2 border border-navy-100 p-5">
      <div className="mb-3 flex items-center gap-2 text-navy-900">
        <Icon size={18} className="text-gold-500" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="space-y-1 text-sm text-navy-500">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
