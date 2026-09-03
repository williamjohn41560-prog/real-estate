"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Maria & Luis G.",
    city: "Moreno Valley",
    quote:
      "Jasmine walked us through every step in Spanish and English. We closed on our first home in under 45 days.",
  },
  {
    name: "David Chen",
    city: "Rancho Cucamonga",
    quote: "Professional, responsive, and she negotiated $18K off our asking price. Couldn't recommend her more.",
  },
  {
    name: "Ana Ramirez",
    city: "Fontana",
    quote: "We didn't think we could afford a home this year. Jasmine found us down payment assistance we didn't know existed.",
  },
  {
    name: "The Thompson Family",
    city: "Menifee",
    quote: "From our first showing to closing day, Jasmine made the entire process feel effortless.",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-offwhite">
      <div className="container-page">
        <p className="eyebrow text-center">Client Stories</p>
        <h2 className="text-center text-3xl font-bold text-navy-900 sm:text-4xl">What Families Are Saying</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="mt-12 pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full rounded-xl2 bg-white p-7 shadow-card">
                <Quote className="mb-4 text-gold-400" size={28} />
                <p className="text-navy-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#C8A24D" stroke="#C8A24D" />
                  ))}
                </div>
                <p className="mt-3 font-semibold text-navy-900">{t.name}</p>
                <p className="text-sm text-navy-400">{t.city}, CA</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
