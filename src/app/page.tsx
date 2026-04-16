import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoTicker } from "@/components/landing/LogoTicker";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { FAQs } from "@/components/landing/FAQs";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Pricing />
      <FAQs />
      <CallToAction />
      <Footer />
    </div>
  );
}
