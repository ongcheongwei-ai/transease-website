"use client";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";

const meta = [
  { img: "https://images.unsplash.com/photo-1597464061923-fb01fab69cf6?auto=format&fit=crop&w=800&q=80", from: "SGD 100" },
  { img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80", from: "SGD 420" },
  { img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80", from: "SGD 100" },
  { img: "https://images.unsplash.com/photo-1601824628144-0b3f48902d97?auto=format&fit=crop&w=800&q=80", from: "SGD 280" },
  { img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80", from: "SGD 380" },
  { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", from: "SGD 180" },
];

export default function Destinations() {
  const { t } = useLang();
  return (
    <section id="destinations" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.dest.eyebrow}</p>
          <h2 className="section-title mt-2">{t.dest.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.dest.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.dest.items.map((p, i) => {
            const m = meta[i];
            return (
              <a
                key={p.name}
                href={CONTACT.whatsappLinkPrefill(t.dest.msg(p.name))}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img}
                  alt={p.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm opacity-90">{t.dest.from} {m.from}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
