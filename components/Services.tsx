"use client";
import { Plane, Building2, Mountain, Briefcase, Truck, Users } from "lucide-react";
import { useLang } from "./LanguageProvider";

const icons = [Plane, Building2, Mountain, Briefcase, Users, Truck];

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title mt-2">{t.services.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.services.sub}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.t} className="card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
