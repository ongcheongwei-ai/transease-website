"use client";
import { useLang } from "./LanguageProvider";

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="bg-ink-900 py-20 text-white lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
            {t.how.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-base text-ink-200">{t.how.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((s, i) => (
            <div
              key={s.t}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 font-display text-4xl font-extrabold text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
