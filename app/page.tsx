import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Routes from "@/components/Routes";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <TrustBar />
        <Services />
        <Routes />
        <Fleet />
        <HowItWorks />
        <WhyUs />
        <Destinations />
        <Testimonials />
        <FAQ />
        <BookingCTA />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </main>
    </LanguageProvider>
  );
}
