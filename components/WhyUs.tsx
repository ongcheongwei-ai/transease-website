"use client";
import { BadgeCheck, Wallet, HeartHandshake, Clock4, ShieldCheck, Languages } from "lucide-react";
import { useLang } from "./LanguageProvider";

const icons = [Wallet, BadgeCheck, Clock4, ShieldCheck, Languages, HeartHandshake];

export default function WhyUs() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.why.eyebrow}</p>
          <h2 className="section-title mt-2">{t.why.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.why.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <div key={f.t} className="card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{f.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
