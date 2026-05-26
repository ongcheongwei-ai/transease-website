"use client";
import { CONTACT } from "@/lib/contact";
import { MapPin } from "lucide-react";
import { useLang } from "./LanguageProvider";

const prices = [
  { innova: 80, starex: 90, alphard: 150, duration: "~1.5 hr", popular: true },
  { innova: 100, starex: 110, alphard: 180, duration: "~1.5 hr" },
  { innova: 180, starex: 200, alphard: 280, duration: "~2 hr" },
  { innova: 280, starex: 300, alphard: 400, duration: "~4 hr", popular: true },
  { innova: 380, starex: 400, alphard: 550, duration: "~5 hr", popular: true },
  { innova: 420, starex: 450, alphard: 600, duration: "~5.5 hr" },
  { innova: 580, starex: 620, alphard: 850, duration: "~7 hr" },
  { innova: 780, starex: 820, alphard: 1100, duration: "~9 hr" },
];

export default function Routes() {
  const { t } = useLang();
  return (
    <section id="routes" className="bg-ink-50/60 py-20 lg:py-28">
      <div className="container-pro">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{t.routes.eyebrow}</p>
          <h2 className="section-title mt-2">{t.routes.title}</h2>
          <p className="mt-4 text-base text-ink-700">{t.routes.sub}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{t.routes.route}</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{t.routes.duration}</th>
                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider">Innova<br/><span className="text-[10px] font-normal opacity-70">{t.routes.paxNote.innova}</span></th>
                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider">Starex<br/><span className="text-[10px] font-normal opacity-70">{t.routes.paxNote.starex}</span></th>
                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider">Alphard<br/><span className="text-[10px] font-normal opacity-70">{t.routes.paxNote.alphard}</span></th>
                  <th className="px-5 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {t.routes.list.map((r, i) => {
                  const p = prices[i];
                  const routeName = `${r.from} → ${r.to}`;
                  return (
                    <tr key={r.to} className="hover:bg-brand-50/40">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-brand-600" />
                          <div>
                            <div className="font-semibold text-ink-900">{routeName}</div>
                            {p.popular && (
                              <span className="mt-0.5 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800">{t.routes.popular}</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-ink-700">{p.duration}</td>
                      <td className="px-5 py-4 text-right font-semibold text-ink-900">SGD {p.innova}</td>
                      <td className="px-5 py-4 text-right font-semibold text-ink-900">SGD {p.starex}</td>
                      <td className="px-5 py-4 text-right font-semibold text-brand-600">SGD {p.alphard}</td>
                      <td className="px-5 py-4 text-right">
                        <a
                          href={CONTACT.whatsappLinkPrefill(t.routes.bookMsg(routeName))}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-600"
                        >
                          {t.routes.book}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="border-t border-ink-100 bg-ink-50/50 px-5 py-4 text-center text-xs text-ink-700">
            {t.routes.bottom}{" "}
            <a href={CONTACT.whatsappLink} target="_blank" rel="noreferrer" className="font-semibold text-brand-600 underline">
              {CONTACT.whatsappSG}
            </a>{" "}{t.routes.bottomTail}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.routes.cards.map((x) => (
            <div key={x.t} className="rounded-2xl border border-ink-100 bg-white p-5">
              <div className="font-semibold text-ink-900">{x.t}</div>
              <div className="mt-1 text-sm text-ink-700">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
