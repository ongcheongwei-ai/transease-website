import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya R.",
    trip: "Singapore → LEGOLAND",
    text: "Booked last minute for our daughter's birthday — driver was 10 minutes early, super patient with the kids, and the Starex was spotless. Will definitely use again!",
  },
  {
    name: "Marcus L.",
    trip: "Changi Airport → Kuala Lumpur",
    text: "Cheaper than flying for our family of 5, and infinitely more comfortable. The Alphard felt like a private jet on wheels. 5 stars across the board.",
  },
  {
    name: "Aisyah B.",
    trip: "Singapore → Melaka weekend",
    text: "Smooth Customs clearance, driver gave us local food tips along the way, and the fixed price meant no surprises. Highly recommend TransEase.",
  },
  {
    name: "Daniel T.",
    trip: "Corporate KL run · monthly",
    text: "We've used TransEase for 8 months for our company trips. Always reliable, always professional. Monthly invoicing makes accounting easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Customer Stories</p>
          <h2 className="section-title mt-2">5,000+ happy passengers</h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={18} />
            ))}
            <span className="ml-2 text-sm font-semibold text-ink-900">
              4.9 / 5 from 1,200+ reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={14} />
                ))}
              </div>
              <blockquote className="mt-3 text-base leading-relaxed text-ink-800">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-bold text-brand-700">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-900">{r.name}</div>
                  <div className="text-xs text-ink-700">{r.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
