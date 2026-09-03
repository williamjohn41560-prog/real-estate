import type { Metadata } from "next";
import Image from "next/image";
import { Award, Languages, GraduationCap, Users } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Jasmine",
  description: "Meet Jasmine — a bilingual Southern California realtor dedicated to helping families find home.",
};

const timeline = [
  { year: "2016", text: "Earned California Real Estate License" },
  { year: "2018", text: "Joined a top Inland Empire brokerage, specializing in new construction" },
  { year: "2021", text: "Recognized as a top-producing agent across Riverside & San Bernardino counties" },
  { year: "2024", text: "Launched Real Estate with Jasmine, a bilingual, family-first practice" },
];

const values = [
  { icon: Languages, title: "Bilingual by Design", body: "English and Español, spoken fluently at every step." },
  { icon: Users, title: "Family First", body: "Every recommendation is made as if it were for my own family." },
  { icon: Award, title: "Integrity", body: "Transparent pricing, honest advice, no pressure tactics." },
  { icon: GraduationCap, title: "Always Learning", body: "Ongoing certifications to serve first-time buyers better." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section mt-20 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About Jasmine</p>
            <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">
              A Realtor Who Speaks Your Language — Literally
            </h1>
            <p className="mt-6 leading-relaxed text-navy-600">
              Jasmine has spent nearly a decade helping families across Ontario, Moreno Valley, Menifee, and the
              greater Inland Empire find homes they can be proud of. Fluent in English and Spanish, she built her
              practice on one belief: every family deserves a realtor who explains every step clearly, negotiates
              fiercely on their behalf, and treats their biggest purchase with the seriousness it deserves.
            </p>
            <p className="mt-4 leading-relaxed text-navy-600">
              <strong className="text-navy-900">Mission:</strong> To make homeownership accessible and understandable
              for Southern California&apos;s working families, regardless of the language they speak at home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["California DRE Licensed", "Bilingual: English & Español", "New Construction Specialist", "First-Time Buyer Certified"].map(
                (badge) => (
                  <span key={badge} className="rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-700">
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="relative h-[480px] overflow-hidden rounded-xl2 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
              alt="Jasmine, Southern California realtor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page">
          <p className="eyebrow">Values</p>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">What Guides Every Transaction</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl2 bg-white p-6 shadow-card">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                  <v.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <p className="eyebrow">Experience</p>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Jasmine&apos;s Journey</h2>
          <ol className="mt-10 space-y-8 border-l border-navy-100 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient" />
                <p className="font-display text-lg font-bold text-navy-900">{t.year}</p>
                <p className="text-navy-500">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Jasmine?"
        subtitle="Book a free consultation and get a straight answer about your next step."
        ctaLabel="Book Consultation"
      />
    </>
  );
}
