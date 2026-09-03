import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-bold text-gold-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">This page has moved or doesn&apos;t exist</h1>
      <p className="mt-2 max-w-sm text-navy-500">
        Let&apos;s get you back to browsing homes across Southern California.
      </p>
      <Link href="/listings" className="btn-gold mt-8">
        Browse Homes
      </Link>
    </section>
  );
}
