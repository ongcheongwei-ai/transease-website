import {
  Plane,
  Building2,
  Mountain,
  Briefcase,
  Truck,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    desc: "Singapore Changi & KLIA pick-up / drop-off. Flight tracking + meet-and-greet at arrival hall.",
  },
  {
    icon: Building2,
    title: "City-to-City Transfer",
    desc: "Singapore ↔ JB, KL, Melaka, Ipoh, Penang and beyond. Fixed price, no hidden surcharge.",
  },
  {
    icon: Mountain,
    title: "Tour & Day Trip",
    desc: "Genting Highlands, Cameron, LEGOLAND, JPO, theme parks — hourly or full-day chartered MPV.",
  },
  {
    icon: Briefcase,
    title: "Business / Corporate",
    desc: "Monthly invoicing for SMEs, GST-style receipts, and bilingual chauffeurs for executive clients.",
  },
  {
    icon: Users,
    title: "Group & Family",
    desc: "Up to 11 seater MPVs. Child seats and booster seats available on request — at no extra cost.",
  },
  {
    icon: Truck,
    title: "Parcel / Document Run",
    desc: "Same-day cross-border courier for urgent parcels, samples or documents between SG ⇄ MY.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title mt-2">
            One operator. Every cross-border need.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            From last-minute airport runs to multi-day chartered tours, our
            licensed drivers and modern MPV fleet handle it all — in one
            seamless booking.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
