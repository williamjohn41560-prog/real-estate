import type { Metadata } from "next";
import { Camera, Share2, Users2, LineChart } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sell Your Home",
  description: "Get a free home valuation and a proven marketing strategy to sell your Southern California home for top dollar.",
};

const strategy = [
  { icon: LineChart, title: "Strategic Pricing", body: "Data-backed pricing that attracts serious buyers from day one." },
  { icon: Camera, title: "Professional Photography", body: "HDR photography, drone shots, and 3D virtual tours that make listings stand out." },
  { icon: Share2, title: "Social Media Advertising", body: "Targeted Instagram and Facebook campaigns reaching qualified local buyers." },
  { icon: Users2, title: "Open Houses & Showings", body: "High-visibility open houses and flexible private showings on your schedule." },
];

export default function SellPage() {
  return (
    <>
      <section className="section mt-20 bg-navy-950 text-white">
        <div className="container-page text-center">
          <p className="eyebrow text-gold-300">Selling Your Home</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">Sell for Top Dollar, Without the Stress</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            A full-service marketing strategy designed to get your home in front of the right buyers, fast.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strategy.map((s) => (
              <div key={s.title} className="rounded-xl2 border border-navy-100 p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                  <s.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Free Home Valuation</p>
            <h2 className="text-3xl font-bold text-navy-900">What Is Your Home Worth?</h2>
            <p className="mt-4 text-navy-500">
              Fill out the form and Jasmine will send a no-obligation valuation based on recent comparable sales in
              your neighborhood — usually within 24 hours.
            </p>
          </div>
          <ContactForm heading="Get Your Free Home Valuation" />
        </div>
      </section>

      <CTASection
        title="Curious What Your Home Could Sell For?"
        subtitle="No pressure, no obligation — just a clear, honest number."
        ctaLabel="Get Free Home Valuation"
      />
    </>
  );
}
