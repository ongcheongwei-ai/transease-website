"use client";
import { Mail, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#routes", label: t.nav.routes },
    { href: "#fleet", label: t.nav.fleet },
    { href: "#destinations", label: t.nav.destinations },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-pro grid gap-10 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600">T</span>
            Trans<span className="text-brand-400">Ease</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{t.footer.blurb}</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.quick}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle size={14} className="text-brand-400" /> {CONTACT.whatsappSG}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneMYRaw}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={14} className="text-brand-400" /> {CONTACT.phoneMY}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={14} className="text-brand-400" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-200 sm:flex-row">
          <p>© {new Date().getFullYear()} TransEase. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
