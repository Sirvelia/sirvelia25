import Heading from "@/components/Heading";
import Container from "../../../components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

export default function ServicesGrid() {
    return (
        <div>
            <Container className="grid md:grid-cols-3 gap-4 lg:gap-8 items-center px-2 md:px-4 relative">

                <Card className="col-span-1 text-text-dark md:h-full" hasGradient gradientPosition="left" href="/service/technology-consulting">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/illustrations/04.png" alt="Advanced technical support" width={300} height={208} />
                            </div>

                            <Heading title="Advanced technical support" as="h3" size="small" variant="body" className="" />

                            <div className="space-y-2">
                                <p>Clarify complex decisions and keep your business infrastructure running smoothly.</p>

                                <ul className="list-disc list-inside space-y-2">
                                    <li>Advice to guide your technological path and avoid costly mistakes.</li>
                                    <li>Maintenance and support to keep your website up and running and free of risks.</li>
                                    <li>Strategic technology consulting. We take control of complex projects and advise you in difficult situations.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-end">
                            <Button variant="link" size="lg">Let's talk about support <ChevronRightIcon /></Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" hasGradient gradientPosition="left" href="/service/product-development">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/illustrations/05.png" alt="Product development" width={276} height={200} />
                            </div>

                            <Heading title="Product development" as="h3" size="small" variant="body" className="" />

                            <div className="space-y-2">
                                <p>We bring your next line of business's digital product to life. Stand out by launching unique products while freeing yourself from the constraints of third-party solutions. Your product, your code.</p>
                            </div>
                        </div>

                        <div className="text-end">
                            <Button variant="link" size="lg">Let's talk about products <ChevronRightIcon /></Button>
                        </div>

                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" hasGradient gradientPosition="left" href="/service/process-digitization">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/illustrations/02.png" alt="Process automation" width={276} height={200} />
                            </div>

                            <Heading title="Process automation" as="h3" size="small" variant="body" className="" />

                            <div className="space-y-2">
                                <p>Every minute spent on manual, repetitive tasks is a minute of lost productivity. With customized digital solutions, you can optimize your company's operations and processes while reducing costs.</p>
                            </div>
                        </div>

                        <div className="text-end">
                            <Button variant="link" size="lg">Let's talk about optimization <ChevronRightIcon /></Button>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}