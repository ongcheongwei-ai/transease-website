"use client";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-pro grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title mt-2">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-base text-ink-700">{t.contact.sub}</p>

          <ul className="mt-10 space-y-5">
            <ContactRow
              icon={MessageCircle}
              title={t.contact.whatsappTitle}
              value={CONTACT.whatsappSG}
              href={CONTACT.whatsappLink}
              accent="bg-emerald-50 text-emerald-600"
            />
            <ContactRow
              icon={Phone}
              title={t.contact.phoneTitle}
              value={CONTACT.phoneMY}
              href={`tel:${CONTACT.phoneMYRaw}`}
              accent="bg-brand-50 text-brand-600"
            />
            <ContactRow
              icon={Mail}
              title={t.contact.emailTitle}
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
              accent="bg-sky-50 text-sky-600"
            />
            <ContactRow
              icon={Clock}
              title={t.contact.hoursTitle}
              value={t.contact.hoursValue}
              accent="bg-amber-50 text-amber-600"
            />
            <ContactRow
              icon={MapPin}
              title={t.contact.areaTitle}
              value={t.contact.areaValue}
              accent="bg-violet-50 text-violet-600"
            />
          </ul>
        </div>

        <form
          action={CONTACT.whatsappLink}
          method="GET"
          target="_blank"
          className="rounded-3xl border border-ink-100 bg-ink-50/60 p-8 shadow-sm"
        >
          <h3 className="font-display text-xl font-bold text-ink-900">{t.contact.formTitle}</h3>
          <p className="mt-1 text-sm text-ink-700">{t.contact.formSub}</p>
          <div className="mt-6 grid gap-4">
            <Field label={t.contact.fName} required>
              <input className="form-input" placeholder={t.contact.fNamePh} />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label={t.contact.fPhone} required>
                <input className="form-input" placeholder={t.contact.fPhonePh} />
              </Field>
              <Field label={t.contact.fEmail}>
                <input className="form-input" placeholder={t.contact.fEmailPh} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label={t.contact.fFrom} required>
                <input className="form-input" placeholder={t.contact.fFromPh} />
              </Field>
              <Field label={t.contact.fTo} required>
                <input className="form-input" placeholder={t.contact.fToPh} />
              </Field>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Field label={t.contact.fDate}>
                <input type="date" className="form-input" />
              </Field>
              <Field label={t.contact.fTime}>
                <input type="time" className="form-input" />
              </Field>
              <Field label={t.contact.fPax}>
                <input className="form-input" placeholder={t.contact.fPaxPh} />
              </Field>
            </div>
            <Field label={t.contact.fNotes}>
              <textarea className="form-input min-h-[80px]" placeholder={t.contact.fNotesPh} />
            </Field>
            <button type="submit" className="btn-primary w-full">
              {t.contact.submit}
            </button>
            <p className="text-center text-xs text-ink-700">{t.contact.tos}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
  accent: string;
}) {
  const Content = (
    <div className="flex items-start gap-4">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-700">{title}</div>
        <div className="mt-0.5 text-base font-semibold text-ink-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-80">
        {Content}
      </a>
    </li>
  ) : (
    <li>{Content}</li>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
