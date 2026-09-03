import { Languages, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Languages,
    title: "Truly Bilingual Service",
    body: "Every step of the process — contracts, negotiations, and closing — explained clearly in English or Español.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Expertise",
    body: "Deep knowledge of Ontario, Moreno Valley, Menifee, and the broader Inland Empire market.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Pricing",
    body: "Pricing and offer strategy backed by real comps, not guesswork — so you never overpay or underprice.",
  },
  {
    icon: HeartHandshake,
    title: "White-Glove Support",
    body: "From pre-approval to move-in day, Jasmine is one call, text, or WhatsApp message away.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-offwhite">
      <div className="container-page">
        <p className="eyebrow">Why Families Choose Jasmine</p>
        <h2 className="max-w-xl text-3xl font-bold text-navy-900 sm:text-4xl">
          A Realtor Who Treats Your Search Like Family
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl2 bg-white p-6 shadow-card">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                <p.icon size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
