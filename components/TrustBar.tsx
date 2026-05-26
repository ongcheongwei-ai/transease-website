const stats = [
  { value: "5,000+", label: "Cross-border trips completed" },
  { value: "4.9 / 5", label: "Average customer rating" },
  { value: "24 / 7", label: "WhatsApp booking support" },
  { value: "100%", label: "Door-to-door service" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container-pro grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-700">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
