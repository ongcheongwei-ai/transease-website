import { Users, Briefcase, Snowflake, Wifi } from "lucide-react";
import { CONTACT } from "@/lib/contact";

const fleet = [
  {
    name: "Toyota Innova",
    tag: "Comfort",
    seats: 6,
    luggage: 4,
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    desc: "Reliable family MPV. Perfect for small groups travelling with luggage. Excellent fuel economy keeps your fare low.",
    features: ["Dual A/C zones", "USB charging", "Free Wi-Fi", "Bottled water"],
    color: "from-sky-500/15 to-sky-500/0",
  },
  {
    name: "Hyundai Starex",
    tag: "Spacious",
    seats: 9,
    luggage: 8,
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    desc: "9-seater MPV with massive luggage capacity. Best value-for-money for medium groups, school trips and corporate runs.",
    features: ["Captain seats", "Tinted windows", "USB charging", "Bottled water"],
    color: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    name: "Toyota Alphard / Vellfire",
    tag: "VIP",
    seats: 5,
    luggage: 4,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    desc: "Executive-class luxury minivan with leather captain chairs, mood lighting and rear entertainment — for travellers who want first-class on the road.",
    features: ["Leather captain seats", "Sunroof", "Rear screens", "Premium audio"],
    color: "from-brand-500/20 to-brand-500/0",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Fleet</p>
          <h2 className="section-title mt-2">Modern, well-maintained MPVs</h2>
          <p className="mt-4 text-base text-ink-700">
            Every vehicle is under 5 years old, serviced monthly, and fully
            insured for cross-border travel.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {fleet.map((v) => (
            <div
              key={v.name}
              className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`relative h-52 bg-gradient-to-br ${v.color}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow">
                  {v.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {v.name}
                </h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-ink-700">
                  <span className="inline-flex items-center gap-1.5">
                    <Users size={16} className="text-brand-600" /> {v.seats} pax
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={16} className="text-brand-600" /> {v.luggage} bags
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Snowflake size={16} className="text-brand-600" /> A/C
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {v.desc}
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-ink-700">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT.whatsappLinkPrefill(
                    `Hi TransEase, I'd like to book a ${v.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  Book this vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
