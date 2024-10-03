import { CallToAction } from "@/sections/CallToAction";
import FAQ from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import ProductShowcase from "@/sections/ProductShowcase";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Services />
      <ProductShowcase />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
