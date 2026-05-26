"use client";
import { Users, Briefcase, Snowflake } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";

const fleetMeta = [
  {
    seats: 6,
    luggage: 4,
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    color: "from-sky-500/15 to-sky-500/0",
  },
  {
    seats: 9,
    luggage: 8,
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
    color: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    seats: 5,
    luggage: 4,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    color: "from-brand-500/20 to-brand-500/0",
  },
];

export default function Fleet() {
  const { t } = useLang();
  return (
    <section id="fleet" className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.fleet.eyebrow}</p>
          <h2 className="section-title mt-2">{t.fleet.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.fleet.sub}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {t.fleet.items.map((v, i) => {
            const m = fleetMeta[i];
            return (
              <div
                key={v.name}
                className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`relative h-52 bg-gradient-to-br ${m.color}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.img}
                    alt={v.name}
                    className="h-full w-full object-cover opacity-90 transition group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow">
                    {v.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink-900">{v.name}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-ink-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={16} className="text-brand-600" /> {m.seats} {t.fleet.seats}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={16} className="text-brand-600" /> {m.luggage} {t.fleet.bags}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Snowflake size={16} className="text-brand-600" /> A/C
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">{v.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-ink-700">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONTACT.whatsappLinkPrefill(t.fleet.bookMsg(v.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-6 w-full"
                  >
                    {t.fleet.bookBtn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
