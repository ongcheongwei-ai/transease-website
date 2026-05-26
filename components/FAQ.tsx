"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-pro grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="section-eyebrow">{t.faq.eyebrow}</p>
          <h2 className="section-title mt-2">{t.faq.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.faq.sub}</p>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-ink-900">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-brand-600 transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="border-t border-ink-100 px-5 py-4 text-sm leading-relaxed text-ink-700">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
