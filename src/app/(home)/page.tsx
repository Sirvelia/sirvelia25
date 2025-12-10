import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Hero from "./components/Hero";
import IconsGrid from "@/components/IconsGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturesGrid from "@/app/(home)/components/FeaturesGrid";
import ServicesGrid from "./components/ServicesGrid";
import TechGrid from "./components/TechGrid";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import VerticalTabs from "@/components/VerticalTabs";
import IconGlobalCommunication from "@/components/icons/ico--045-global communication";
import IcoGrowthChart from "@/components/icons/ico--048-growth chart";
import IconLeaf from "@/components/icons/ico--049-leaf";

export default function Home() {
  return (
    <div>
      <Hero />

      <IconsGrid>
        <IconsGrid.Icon src="/logos/logo--Alpine.svg" alt="Alpine.js" />
        <IconsGrid.Icon src="/logos/logo--WordPress.svg" alt="WordPress" />
        <IconsGrid.Icon src="/logos/logo--NuxtJS.svg" alt="NuxtJS" />
        <IconsGrid.Icon src="/logos/logo--Supabase.svg" alt="Supabase" />
        <IconsGrid.Icon src="/logos/logo--Tailwind.svg" alt="TailwindCSS" />
        <IconsGrid.Icon src="/logos/logo--Laravel.svg" alt="Laravel" />
      </IconsGrid>

      <Container className="relative px-2 md:px-6 py-12 md:py-24 space-y-8">
        <div className="max-w-xl mx-auto">
          <Heading title={<>The technology you need, without the limitations that hold you back</>} as="h2" size="medium" variant="body" className="text-center" />
        </div>

        <FeaturesGrid />

        <div className="flex justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">Let's schedule a call</Button>
          </Link>
        </div>
      </Container>

      <Container className="relative px-2 md:px-6 py-12 md:py-24 space-y-8">
        <div className="max-w-2xl">
          <Heading title={<>Three services to make technology work for you</>} as="h2" size="medium" variant="body" className="" hasSlash />
        </div>

        <ServicesGrid />

      </Container>

      <Container className="relative px-2 md:px-6 py-12 md:py-24 space-y-8">
        <div className="max-w-2xl mx-auto">
          <Heading title={<>How do we create your solution?</>} as="h2" size="medium" variant="body" className="text-center mb-2" />
          <p className="text-center">We bring your project to life with one or more of these technologies.</p>
        </div>

        <TechGrid />

      </Container>

      <div className="bg-website-background-ultra-dark bg-[url('/textures/bg-pattern--dark.png')] bg-repeat bg-center bg-contain">
        <Container className="relative px-2 md:px-6 py-12 md:py-24 space-y-8">
          <div className="max-w-2xl mx-auto">
            <Heading title={<>Our essential <span className="text-accent">technical pillars</span></>} as="h2" size="medium" variant="white" className="text-center" />
          </div>

          <VerticalTabs tabs={[
            {
              label: "Integration from the ground up",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IconGlobalCommunication width={50} height={50} className="text-accent" />

                  <p>Solutions do not exist in isolation. We design them with their integration into your systems in mind from the outset, such as CRMs, ERPs, and analytics platforms, to ensure frictionless implementation and an operation-focused vision.</p>
                </div>
              )
            },
            {
              label: "Scalability as a principle",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IcoGrowthChart width={50} height={50} className="text-accent" />

                  <p>Solutions must be aligned with the pace of business growth.</p>

                  <p>We use modular architectures and cutting-edge technologies for rapid prototyping. They can evolve according to technical needs, with the security of a robust and adaptable infrastructure.</p>
                </div>
              )
            },
            {
              label: "Optimization through simplicity",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IconLeaf width={50} height={50} className="text-accent" />

                  <p>Development is complex because the solution must be easy to use, maintain, and evolve.</p>
                  
                  <p>We create clean, agile, and well-documented code to provide you with efficient, high-performance solutions.</p>
                </div>
              )
            }
          ]} variant="dark" />

          <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-2">
            <p className="text-center text-lg text-text-light-muted">We have the solution, we just need to hear your idea.</p>
            <Link href="/contact">
              <Button variant="accent" size="lg">Schedule a call</Button>
            </Link>
          </div>
          

        </Container>
      </div>
    </div>
  );
}
