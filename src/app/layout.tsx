import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realestatewithjasmine.com"),
  title: {
    default: "Real Estate with Jasmine | Southern California Realtor",
    template: "%s | Real Estate with Jasmine",
  },
  description:
    "Bilingual real estate guidance across Ontario, Moreno Valley, Jurupa Valley, Perris, Fontana, Rancho Cucamonga, and Menifee. Buy, sell, or find your dream home with Jasmine.",
  keywords: [
    "Southern California realtor",
    "Inland Empire homes for sale",
    "bilingual real estate agent",
    "Moreno Valley homes",
    "Ontario CA real estate",
  ],
  openGraph: {
    title: "Real Estate with Jasmine",
    description: "Helping families find their dream home in Southern California.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
