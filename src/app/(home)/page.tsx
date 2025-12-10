import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Hero from "./components/Hero";
import IconsGrid from "@/components/IconsGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturesGrid from "@/app/(home)/components/FeaturesGrid";
import ServicesGrid from "./components/ServicesGrid";
import TechGrid from "./components/TechGrid";

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
    </div>
  );
}
