"use client";
import { useLang } from "./LanguageProvider";

export default function TrustBar() {
  const { t } = useLang();
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container-pro grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {t.trust.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <div className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
              {s.v}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-700">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
