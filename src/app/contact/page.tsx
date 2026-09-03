import type { Metadata } from "next";
import { Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contact Jasmine",
  description: "Call, text, WhatsApp, or email Jasmine to schedule your free real estate consultation.",
};

const details = [
  { icon: Phone, label: "Phone", value: "(909) 555-1234" },
  { icon: Mail, label: "Email", value: "hello@realestatewithjasmine.com" },
  { icon: Clock, label: "Office Hours", value: "Mon–Sat, 9am–7pm PST" },
];

export default function ContactPage() {
  return (
    <section className="section mt-14 bg-offwhite sm:mt-20">
      <div className="container-page">
        <p className="eyebrow">Contact</p>
        <h1 className="text-3xl font-bold text-navy-900 sm:text-5xl">Let&apos;s Start the Conversation</h1>
        <p className="mt-3 max-w-lg text-sm text-navy-500 sm:mt-4 sm:text-base">
          Whether you're buying, selling, or just curious about the market — reach out anytime.
        </p>

        <div className="mt-8 grid gap-6 sm:gap-10 lg:mt-12 lg:grid-cols-3">
          <div className="space-y-3 sm:space-y-4 lg:col-span-1">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4 rounded-xl2 bg-white p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                  <d.icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">{d.label}</p>
                  <p className="font-semibold text-navy-900">{d.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3 rounded-xl2 bg-white p-5 shadow-card">
              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:text-gold-600">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:text-gold-600">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/19095551234" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 hover:text-gold-600">
                <MessageCircle size={20} />
              </a>
            </div>
            <div className="hidden sm:block">
              <MapSection query="Ontario, CA" height={220} />
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm heading="Send Jasmine a Message" />
          </div>
        </div>
      </div>
    </section>
  );
}
