import type { Metadata } from "next";
import { Suspense } from "react";
import ListingsClient from "./listings-client";

export const metadata: Metadata = {
  title: "Homes for Sale",
  description: "Browse homes for sale across Ontario, Moreno Valley, Menifee, Fontana, and the greater Inland Empire.",
};

export default function ListingsPage() {
  return (
    <section className="section mt-20 bg-offwhite min-h-screen">
      <div className="container-page">
        <p className="eyebrow">Available Now</p>
        <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">Homes for Sale</h1>
        <div className="mt-8">
          <Suspense fallback={null}>
            <ListingsClient />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
