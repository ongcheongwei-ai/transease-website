"use client";
import { Star } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.testi.eyebrow}</p>
          <h2 className="section-title mt-2">{t.testi.title}</h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={18} />
            ))}
            <span className="ml-2 text-sm font-semibold text-ink-900">{t.testi.stars}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.testi.items.map((r) => (
            <figure key={r.n} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={14} />
                ))}
              </div>
              <blockquote className="mt-3 text-base leading-relaxed text-ink-800">
                &ldquo;{r.t}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-700">
                  {r.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">{r.n}</div>
                  <div className="text-xs text-ink-700">{r.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
