import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about buying, selling, financing, and closing on a home in Southern California.",
};

const categories = [
  {
    title: "Buying",
    items: [
      { question: "How much do I need for a down payment?", answer: "Programs range from 0% (VA) to 3.5% (FHA) to conventional options — we'll find the right fit for your situation." },
      { question: "How long does buying a home take?", answer: "On average, 30-45 days from an accepted offer to closing." },
    ],
  },
  {
    title: "Selling",
    items: [
      { question: "How is my home priced?", answer: "Using a comparative market analysis of recently sold, similar homes in your neighborhood." },
      { question: "What repairs should I make before listing?", answer: "We'll walk your home together and prioritize only the repairs that impact price or buyer perception." },
    ],
  },
  {
    title: "Loans",
    items: [
      { question: "What credit score do I need?", answer: "FHA loans can go as low as 580; conventional loans typically want 620+. We can connect you with a lender to check your options." },
    ],
  },
  {
    title: "Closing",
    items: [
      { question: "What are closing costs?", answer: "Typically 2-5% of the purchase price, covering lender fees, title insurance, and escrow." },
    ],
  },
  {
    title: "First-Time Buyers",
    items: [
      { question: "Is there help for first-time buyers?", answer: "Yes — CalHFA and local down payment assistance programs can significantly reduce upfront costs." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="section mt-20 bg-navy-950 text-white">
        <div className="container-page text-center">
          <p className="eyebrow text-gold-300">FAQ</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page mx-auto max-w-3xl space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="mb-4 font-display text-2xl font-bold text-navy-900">{cat.title}</h2>
              <FaqAccordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Jasmine is happy to talk through your specific situation, no obligation."
        ctaLabel="Contact Agent"
      />
    </>
  );
}
