import {
  BadgeCheck,
  Wallet,
  HeartHandshake,
  Clock4,
  ShieldCheck,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "All-in fixed pricing",
    desc: "Toll, petrol and parking included. The price you see is the price you pay.",
  },
  {
    icon: BadgeCheck,
    title: "Vetted, licensed drivers",
    desc: "Every driver holds valid PSV/E licences and is background-checked.",
  },
  {
    icon: Clock4,
    title: "Punctual to the minute",
    desc: "Live traffic monitoring + flight tracking. We're early, never late.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    desc: "Comprehensive cross-border insurance covers every passenger.",
  },
  {
    icon: Languages,
    title: "Bilingual drivers",
    desc: "All our chauffeurs speak English, Mandarin and Bahasa Melayu.",
  },
  {
    icon: HeartHandshake,
    title: "Real human support",
    desc: "WhatsApp our owner directly — no call centre, no robots.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why TransEase</p>
          <h2 className="section-title mt-2">
            Built for cross-border travel, by cross-border people.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            We've made the JB-Singapore commute hundreds of times. Every
            shortcut, every immigration tip — passed straight to your driver.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
