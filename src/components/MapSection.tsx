export default function MapSection({
  query = "Ontario, CA",
  height = 420,
}: {
  query?: string;
  height?: number;
}) {
  return (
    <div className="overflow-hidden rounded-xl2 shadow-card" style={{ height }}>
      <iframe
        title={`Map of ${query}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        // Replace GOOGLE_MAPS_API_KEY with a real key in .env as NEXT_PUBLIC_GOOGLE_MAPS_KEY
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "GOOGLE_MAPS_API_KEY"}&q=${encodeURIComponent(
          query
        )}`}
      />
    </div>
  );
}
