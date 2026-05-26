"use client";
import { Languages } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function LanguageToggle({ variant = "default" }: { variant?: "default" | "compact" }) {
  const { lang, toggle } = useLang();
  const label = lang === "en" ? "中文" : "EN";

  if (variant === "compact") {
    return (
      <button
        onClick={toggle}
        aria-label="Toggle language"
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 text-xs font-bold text-ink-900 hover:border-ink-900"
      >
        <Languages size={14} className="text-brand-600" />
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-2 text-xs font-bold text-ink-900 transition hover:border-ink-900 hover:-translate-y-0.5"
    >
      <Languages size={14} className="text-brand-600" />
      {label}
    </button>
  );
}
