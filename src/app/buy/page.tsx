import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Buy a Home",
  description: "Step-by-step guidance for buying a home in Southern California, from pre-approval to closing day.",
};

const steps = [
  { title: "Get Pre-Approved", body: "Connect with a trusted lender to understand your true budget before you shop." },
  { title: "Define Your Wish List", body: "We narrow down neighborhoods, must-haves, and deal-breakers together." },
  { title: "Tour Homes", body: "Private showings scheduled around your calendar, with honest feedback on every property." },
  { title: "Make a Competitive Offer", body: "Pricing strategy backed by real comps so you win without overpaying." },
  { title: "Inspection & Appraisal", body: "Jasmine coordinates every vendor and negotiates repairs on your behalf." },
  { title: "Closing Day", body: "Final walkthrough, paperwork review, and keys in hand." },
];

const faqs = [
  { question: "How much down payment do I need?", answer: "Programs exist for as little as 3% down, and several down payment assistance programs can cover even more. We'll review what you qualify for during your consultation." },
  { question: "Are there first-time buyer programs?", answer: "Yes — CalHFA, FHA, and local Inland Empire programs can significantly reduce your upfront cash needed. Jasmine partners with lenders who specialize in these programs." },
  { question: "How long does the buying process take?", answer: "Typically 30–45 days from an accepted offer to closing, though pre-approval and home search time varies by buyer." },
  { question: "Do I need a realtor if I'm buying new construction?", answer: "Yes — having your own agent costs you nothing extra (the builder pays commission) and ensures someone is negotiating solely on your behalf." },
];

export default function BuyPage() {
  return (
    <>
      <section className="section mt-20 bg-navy-950 text-white">
        <div className="container-page text-center">
          <p className="eyebrow text-gold-300">Buying a Home</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">Your Path to Homeownership, Simplified</h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            From pre-approval to move-in day, here's exactly what to expect working with Jasmine.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl2 border border-navy-100 p-6">
                <span className="font-display text-3xl font-bold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Down Payment Help</p>
            <h2 className="text-3xl font-bold text-navy-900">Programs That Can Lower Your Upfront Cost</h2>
            <ul className="mt-6 space-y-3 text-navy-600">
              <li>• CalHFA down payment assistance programs</li>
              <li>• FHA loans with as little as 3.5% down</li>
              <li>• Builder incentives on select new construction</li>
              <li>• First-time homebuyer tax credits</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mb-6 text-3xl font-bold text-navy-900">Buying FAQs</h2>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Find Your Next Home"
        subtitle="Book a free buyer consultation — no obligation, just a clear plan."
        ctaLabel="Book Consultation"
      />
    </>
  );
}
