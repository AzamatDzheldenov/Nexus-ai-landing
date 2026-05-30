import dynamic from "next/dynamic";

import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { NexusHero } from "@/components/nexus-hero";

const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((module) => module.Testimonials),
);
const Pricing = dynamic(() =>
  import("@/components/Pricing").then((module) => module.Pricing),
);
const Cases = dynamic(() =>
  import("@/components/Cases").then((module) => module.Cases),
);
const FAQ = dynamic(() =>
  import("@/components/FAQ").then((module) => module.FAQ),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((module) => module.Footer),
);

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
