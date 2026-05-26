"use client";
import { CONTACT } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function BookingCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-amber-500 py-20 text-white lg:py-24">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white_0%,transparent_50%),radial-gradient(circle_at_80%_80%,white_0%,transparent_50%)]" />
      <div className="container-pro relative grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
            {t.cta.sub}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle size={18} className="text-emerald-600" /> {t.cta.whatsapp}
          </a>
          <a
            href={`tel:${CONTACT.phoneMYRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone size={18} /> {CONTACT.phoneMY}
          </a>
        </div>
      </div>
    </section>
  );
}
