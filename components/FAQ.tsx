"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a TransEase ride?",
    a: "Simply WhatsApp us at +65 8946 0637 with your pick-up address, drop-off address, date, time and number of passengers. We reply with a fixed quote within minutes — no app, no account required.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "No deposit required. You only pay the driver in cash or e-transfer (SGD / MYR / PayNow / DuitNow) after the trip is completed.",
  },
  {
    q: "What's included in the fixed price?",
    a: "Everything: door-to-door pick-up, all tolls in Singapore & Malaysia, petrol, parking, immigration assistance, and complimentary bottled water on board.",
  },
  {
    q: "Can you pick me up at Changi Airport?",
    a: "Yes — we offer flight tracking and meet-and-greet at all Changi terminals as well as Senai (JHB), KLIA / KLIA2 and Penang airports.",
  },
  {
    q: "Is your service available 24/7?",
    a: "Bookings can be made anytime via WhatsApp. Pick-ups between 12am – 6am incur a small SGD 30 night surcharge to cover the driver's overtime.",
  },
  {
    q: "Do you provide child seats?",
    a: "Yes, free of charge. Just let us know the child's age and we'll prepare a booster or infant seat for you.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "Free cancellation up to 6 hours before pick-up. After that, a SGD 50 fee applies to cover the driver's commitment.",
  },
  {
    q: "Are your drivers insured for cross-border travel?",
    a: "All TransEase vehicles carry full SG–MY cross-border passenger insurance plus comprehensive vehicle insurance — for your complete peace of mind.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-pro grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title mt-2">
            Everything you need to know.
          </h2>
          <p className="mt-4 text-base text-ink-700">
            Still have questions? Reach out — we answer every WhatsApp within
            10 minutes during operating hours.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-ink-100 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-ink-900">{f.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-brand-600 transition ${
                    open === i ? "rotate-180" : ""
                  }`}
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
