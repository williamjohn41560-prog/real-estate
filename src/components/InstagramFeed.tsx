import Image from "next/image";
import { Instagram } from "lucide-react";
import { listings } from "@/data/listings";

export default function InstagramFeed() {
  const images = listings.slice(0, 6).map((l) => l.image);

  return (
    <section className="section bg-white">
      <div className="container-page text-center">
        <p className="eyebrow">@jsrealtyca</p>
        <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Follow the Journey</h2>
        <a
          href="https://instagram.com/jsrealtyca"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:underline"
        >
          <Instagram size={16} /> @jsrealtyca
        </a>

        <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
          {images.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={src}
                alt="Instagram post preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="16vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 transition-colors group-hover:bg-navy-950/40">
                <Instagram className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
