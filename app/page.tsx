import { Cases } from "@/components/Cases";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { NexusHero } from "@/components/nexus-hero";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NexusHero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cases />
      <FAQ />
      <Footer />
    </main>
  );
}
