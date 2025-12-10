import Heading from "@/components/Heading";
import HeroComponent from "@/components/Hero";
import SubHeading from "@/components/SubHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <HeroComponent variant="dark" texture="pattern">
            <div className="mb-6">
                <SubHeading title={<>Custom development services</>} as="h1" size="small" variant="accent" className="text-center" />
                <Heading title={<>Put the web at the service <br /> of your business</>} as="p" size="large" variant="white" className="text-center" />
            </div>

            <Image src="/illustrations/01.png" alt="Sirvelia's Team: Amadeu Arderiu, Joan Rodas and Albert Tarrés." width={700} height={501} loading="eager" fetchPriority="high" />

            <div className="max-w-md mx-auto text-center text-text-light-muted mb-4 font-light text-lg">
                <p>
                    We develop customized technology that redefines the limits of the web and expands the limits of your company. And without depending on third parties.
                </p>
            </div>

            <Link href="/service/technology-consulting">
                <Button variant="primary" size="lg">Let's talk about goals</Button>
            </Link>
        </HeroComponent>
    );
}