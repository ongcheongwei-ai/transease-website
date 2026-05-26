"use client";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#routes", label: t.nav.routes },
    { href: "#fleet", label: t.nav.fleet },
    { href: "#destinations", label: t.nav.destinations },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-sm border-b border-ink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-pro flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            T
          </span>
          <span>
            Trans<span className="text-brand-600">Ease</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-700 hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={`tel:${CONTACT.phoneMYRaw}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            <Phone size={16} className="text-brand-600" /> {CONTACT.phoneMY}
          </a>
          <a href={CONTACT.whatsappLink} className="btn-primary" target="_blank" rel="noreferrer">
            {t.nav.book}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle variant="compact" />
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="container-pro flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
