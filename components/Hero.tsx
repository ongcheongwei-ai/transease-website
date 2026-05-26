"use client";
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Star } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="hero-gradient relative pt-28 lg:pt-36 pb-20">
      <div className="container-pro grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="badge">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
            {t.hero.badge}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {t.hero.title1}
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-amber-500 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.whatsappLinkPrefill(t.hero.whatsappMsg)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} /> {t.hero.cta1} <ArrowRight size={16} />
            </a>
            <a href="#routes" className="btn-ghost">
              {t.hero.cta2}
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, label: t.hero.f1 },
              { icon: Clock, label: t.hero.f2 },
              { icon: Star, label: t.hero.f3 },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                <f.icon size={18} className="text-brand-600" />
                <span className="text-sm font-medium text-ink-800">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up rounded-3xl border border-ink-100 bg-white p-6 shadow-2xl shadow-ink-900/5 sm:p-8 lg:ml-auto lg:max-w-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-xl font-bold">{t.hero.cardTitle}</h3>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {t.hero.cardBadge}
            </span>
          </div>
          <form
            className="space-y-3"
            action={CONTACT.whatsappLink}
            method="GET"
            target="_blank"
          >
            <FormRow label={t.hero.pickup}>
              <select className="form-input">
                <option>Singapore</option>
                <option>Changi Airport</option>
                <option>Marina Bay / CBD</option>
                <option>Jurong</option>
                <option>Johor Bahru</option>
                <option>Kuala Lumpur</option>
                <option>Other</option>
              </select>
            </FormRow>
            <FormRow label={t.hero.dropoff}>
              <select className="form-input">
                <option>Johor Bahru / JB Town</option>
                <option>LEGOLAND Malaysia</option>
                <option>Johor Premium Outlet (JPO)</option>
                <option>Genting Highlands</option>
                <option>Kuala Lumpur</option>
                <option>Melaka</option>
                <option>Penang</option>
                <option>Other</option>
              </select>
            </FormRow>
            <div className="grid grid-cols-2 gap-3">
              <FormRow label={t.hero.date}>
                <input type="date" className="form-input" />
              </FormRow>
              <FormRow label={t.hero.pax}>
                <select className="form-input">
                  <option>1–2</option>
                  <option>3–4</option>
                  <option>5–6</option>
                  <option>7+</option>
                </select>
              </FormRow>
            </div>
            <button type="submit" className="btn-primary w-full">
              {t.hero.btn} <ArrowRight size={16} />
            </button>
            <p className="text-center text-xs text-ink-700">{t.hero.note}</p>
          </form>
        </div>
      </div>

      <style>{`
        .form-input{
          width:100%;
          border:1px solid #e2e8f0;
          border-radius:0.75rem;
          padding:0.65rem 0.85rem;
          font-size:0.875rem;
          background:white;
          outline:none;
          transition:border-color .15s, box-shadow .15s;
        }
        .form-input:focus{
          border-color:#fb923c;
          box-shadow:0 0 0 4px rgba(251,146,60,.18);
        }
      `}</style>
    </section>
  );
}

function FormRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700">
        {label}
      </span>
      {children}
    </label>
  );
}
