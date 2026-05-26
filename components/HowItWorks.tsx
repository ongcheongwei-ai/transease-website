const steps = [
  {
    n: "01",
    title: "Send your trip details",
    desc: "WhatsApp us your date, time, pick-up and drop-off — we reply with a fixed quote in minutes.",
  },
  {
    n: "02",
    title: "Confirm without deposit",
    desc: "Once you say yes, your booking is locked in. No upfront payment, no surcharges.",
  },
  {
    n: "03",
    title: "Driver picks you up",
    desc: "Professional bilingual driver arrives on time at your doorstep with the agreed vehicle.",
  },
  {
    n: "04",
    title: "Relax — we handle the rest",
    desc: "We guide you through immigration, toll, traffic, and drop you safely at your destination.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-ink-900 py-20 text-white lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Booking takes less than 60 seconds
          </h2>
          <p className="mt-4 text-base text-ink-200">
            No app to download. No account to register. Just message us — and
            you're set.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 font-display text-4xl font-extrabold text-brand-400">
                {s.n}
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
