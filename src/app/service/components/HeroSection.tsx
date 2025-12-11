import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";

import Hero from "@/components/Hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: React.ReactNode;
    image: string;
    button: string;
}

export default function HeroSection({ title, subtitle, description, image, button }: HeroSectionProps) {
    return (
        <Hero variant="primary">
            <div className="mb-6">
                <SubHeading title={title} as="h1" size="small" variant="accent" className="justify-center" />
                <Heading title={subtitle} as="p" size="large" variant="white" className="text-center" />
            </div>

            <Image className="h-[300px] md:h-[400px] w-full object-contain object-center" src={image} alt={title} width={700} height={501} loading="eager" fetchPriority="high" />

            <div className="mt-6 max-w-md mx-auto text-center text-text-light-muted mb-4 font-light text-lg">
                {description}
            </div>

            <Link href="/contact">
                <Button variant="accent" size="lg">{button}</Button>
            </Link>
        </Hero>
    );
}