import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BedDouble, Bath, Ruler, PlayCircle, Check } from "lucide-react";
import { listings, getListingById } from "@/data/listings";
import { formatPrice } from "@/lib/utils";
import PropertyCard from "@/components/PropertyCard";
import MortgageCalculator from "@/components/MortgageCalculator";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) return {};
  return {
    title: `${listing.title} — ${listing.city}, CA`,
    description: listing.description,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();

  const similar = listings.filter((l) => l.id !== listing.id && l.city === listing.city).slice(0, 3);
  const fallback = similar.length ? similar : listings.filter((l) => l.id !== listing.id).slice(0, 3);

  return (
    <>
      <section className="mt-20 bg-white pb-4 pt-8">
        <div className="container-page">
          <div className="grid grid-cols-4 gap-3" style={{ gridTemplateRows: "200px 200px" }}>
            <div className="relative col-span-4 row-span-2 overflow-hidden rounded-xl2 sm:col-span-2">
              <Image src={listing.gallery[0] ?? listing.image} alt={listing.title} fill className="object-cover" priority />
              <button className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-navy-950/80 px-4 py-2 text-sm font-semibold text-white">
                <PlayCircle size={18} /> Virtual Tour
              </button>
            </div>
            {(listing.gallery.slice(1, 3).length ? listing.gallery.slice(1, 3) : [listing.image, listing.image]).map((src, i) => (
              <div key={i} className="relative col-span-2 hidden overflow-hidden rounded-xl2 sm:col-span-1 sm:block">
                <Image src={src} alt={`${listing.title} photo ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white pt-4">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow">{listing.type}</p>
            <h1 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">{listing.title}</h1>
            <p className="mt-1 text-navy-500">{listing.city}, CA</p>
            <p className="mt-4 font-display text-3xl font-bold text-gold-600">{formatPrice(listing.price)}</p>

            <div className="mt-6 flex gap-6 border-y border-navy-100 py-5 text-navy-700">
              <span className="flex items-center gap-2"><BedDouble size={18} /> {listing.beds} Beds</span>
              <span className="flex items-center gap-2"><Bath size={18} /> {listing.baths} Baths</span>
              <span className="flex items-center gap-2"><Ruler size={18} /> {listing.sqft.toLocaleString()} Sq Ft</span>
            </div>

            <h2 className="mt-8 font-display text-xl font-semibold text-navy-900">About This Home</h2>
            <p className="mt-3 leading-relaxed text-navy-600">{listing.description}</p>

            <h2 className="mt-8 font-display text-xl font-semibold text-navy-900">Features</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {listing.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-navy-600">
                  <Check size={16} className="text-gold-500" /> {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-xl font-semibold text-navy-900">Location</h2>
            <div className="mt-3">
              <MapSection query={`${listing.city}, CA`} height={340} />
            </div>

            <h2 className="mt-10 font-display text-xl font-semibold text-navy-900">Estimate Your Payment</h2>
            <div className="mt-3">
              <MortgageCalculator />
            </div>
          </div>

          <div>
            <div className="sticky top-28">
              <ContactForm heading="Schedule a Showing" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page">
          <p className="eyebrow">You May Also Like</p>
          <h2 className="text-3xl font-bold text-navy-900">Similar Homes</h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {fallback.map((l) => (
              <PropertyCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
