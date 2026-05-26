import { CONTACT } from "@/lib/contact";

const places = [
  {
    name: "LEGOLAND Malaysia",
    img: "https://images.unsplash.com/photo-1597464061923-fb01fab69cf6?auto=format&fit=crop&w=800&q=80",
    tag: "Family fun",
    from: "SGD 100",
  },
  {
    name: "Genting Highlands",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=80",
    tag: "Cool mountains",
    from: "SGD 420",
  },
  {
    name: "Johor Premium Outlet",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    tag: "Designer shopping",
    from: "SGD 100",
  },
  {
    name: "Melaka Heritage",
    img: "https://images.unsplash.com/photo-1601824628144-0b3f48902d97?auto=format&fit=crop&w=800&q=80",
    tag: "UNESCO town",
    from: "SGD 280",
  },
  {
    name: "Kuala Lumpur City",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    tag: "Skyline & food",
    from: "SGD 380",
  },
  {
    name: "Desaru Coast",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tag: "Beach getaway",
    from: "SGD 180",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Top Destinations</p>
          <h2 className="section-title mt-2">
            We drive you to every corner of Malaysia
          </h2>
          <p className="mt-4 text-base text-ink-700">
            From a day at LEGOLAND to a weekend in Genting — pick a spot, we'll
            handle the wheels.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <a
              key={p.name}
              href={CONTACT.whatsappLinkPrefill(
                `Hi TransEase, I'd like a quote for a trip to ${p.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm opacity-90">From {p.from}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
