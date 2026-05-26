import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-pro grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title mt-2">We're ready when you are.</h2>
          <p className="mt-4 max-w-md text-base text-ink-700">
            Have a question, special request or custom route? Talk to a real
            human — we're a small, dedicated team, not a call centre.
          </p>

          <ul className="mt-10 space-y-5">
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp (Singapore)"
              value={CONTACT.whatsappSG}
              href={CONTACT.whatsappLink}
              accent="bg-emerald-50 text-emerald-600"
            />
            <ContactRow
              icon={Phone}
              title="Phone (Malaysia)"
              value={CONTACT.phoneMY}
              href={`tel:${CONTACT.phoneMYRaw}`}
              accent="bg-brand-50 text-brand-600"
            />
            <ContactRow
              icon={Mail}
              title="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
              accent="bg-sky-50 text-sky-600"
            />
            <ContactRow
              icon={Clock}
              title="Operating hours"
              value="24/7 WhatsApp · Drivers daily 6am – 12am"
              accent="bg-amber-50 text-amber-600"
            />
            <ContactRow
              icon={MapPin}
              title="Service area"
              value="Singapore & all of Peninsular Malaysia"
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
          <h3 className="font-display text-xl font-bold text-ink-900">
            Send us your trip details
          </h3>
          <p className="mt-1 text-sm text-ink-700">
            We'll respond within 10 minutes via WhatsApp.
          </p>
          <div className="mt-6 grid gap-4">
            <Field label="Your name" required>
              <input className="form-input" placeholder="e.g. Cheong Wei" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Phone" required>
                <input className="form-input" placeholder="+65 / +60 ..." />
              </Field>
              <Field label="Email">
                <input className="form-input" placeholder="you@example.com" />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="From" required>
                <input className="form-input" placeholder="Pick-up address" />
              </Field>
              <Field label="To" required>
                <input className="form-input" placeholder="Drop-off address" />
              </Field>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Date">
                <input type="date" className="form-input" />
              </Field>
              <Field label="Time">
                <input type="time" className="form-input" />
              </Field>
              <Field label="Pax">
                <input className="form-input" placeholder="4" />
              </Field>
            </div>
            <Field label="Notes (optional)">
              <textarea
                className="form-input min-h-[80px]"
                placeholder="Child seat, big luggage, multiple stops..."
              />
            </Field>
            <button type="submit" className="btn-primary w-full">
              Send via WhatsApp
            </button>
            <p className="text-center text-xs text-ink-700">
              By submitting you agree to be contacted by TransEase for your
              booking.
            </p>
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
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-700">
          {title}
        </div>
        <div className="mt-0.5 text-base font-semibold text-ink-900">
          {value}
        </div>
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-700">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
