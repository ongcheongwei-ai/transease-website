import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgtraveltaxi.com"),
  title: "TransEase | Singapore ⇄ Malaysia Premium Cross-Border Taxi from SGD 80",
  description:
    "Singapore to Malaysia private taxi & MPV transfer. Door-to-door cross-border service to JB, KL, Genting, Melaka, LEGOLAND & more. Toyota Alphard, Hyundai Starex, Innova. Trusted by 5,000+ travellers. Book on WhatsApp +65 8946 0637.",
  keywords: [
    "Singapore Malaysia taxi",
    "JB taxi from Singapore",
    "Singapore to KL taxi",
    "cross border taxi",
    "Singapore to Genting",
    "Singapore to Melaka",
    "Alphard taxi Singapore",
    "MPV Singapore Malaysia",
  ],
  openGraph: {
    title: "TransEase | Singapore ⇄ Malaysia Private Taxi",
    description:
      "Door-to-door cross-border MPV transfers from SGD 80. Alphard, Starex, Innova. WhatsApp +65 8946 0637.",
    type: "website",
    url: "https://sgtraveltaxi.com",
    siteName: "TransEase",
  },
  twitter: {
    card: "summary_large_image",
    title: "TransEase | Singapore ⇄ Malaysia Private Taxi",
    description:
      "Door-to-door cross-border MPV transfers from SGD 80. Alphard, Starex, Innova.",
  },
  alternates: { canonical: "https://sgtraveltaxi.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "TransEase",
              url: "https://sgtraveltaxi.com",
              telephone: "+60182935287",
              email: "sgtraveltaxi@gmail.com",
              priceRange: "SGD 80 - SGD 400",
              areaServed: ["Singapore", "Malaysia"],
              serviceType: "Cross-border private taxi & MPV transfer",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
