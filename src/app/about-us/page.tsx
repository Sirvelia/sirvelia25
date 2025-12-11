import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import IcoWritingTool from "@/components/icons/ico--100-writing tool";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import VerticalTabs from "@/components/VerticalTabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div>
            <Hero variant="dark" texture="pixel">

                <Card variant="dark" className="!overflow-visible relative max-w-2xl mx-auto !shadow-none" hasGradient gradientPosition="right">
                    <CardContent className="md:px-14 md:py-4 space-y-6">
                        <IcoWritingTool className="text-accent size-6 md:size-10" />
                        <Heading title={<>Dear customers: <br />You are to blame for everything</>} as="p" size="large" variant="body" className="" />

                        <div className="space-y-4 text-lg font-light md:text-xl">
                            <p>At Sirvelia, we love a challenge. If you keep saying "it's impossible", "I don't know if it can be done", or "there's no solution", all you'll do is pique our interest.</p>

                            <p>Thanks to that challenge, we've been designing and delivering increasingly innovative and daring projects for ten years.</p>

                            <p>And in the end, what had to happen happened.</p>
                        </div>

                        <div className="lg:my-24 lg:w-[150%] lg:ml-[-20%] xl:w-[200%] xl:ml-[-50%]">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                                <Card hasGradient gradientPosition="right">
                                    <CardContent>
                                        <div>
                                            <div className="flex mb-6 md:mb-12">
                                                <span className="h-8 w-8 flex items-center justify-center text-white bg-primary block rounded-full text-2xl">1</span>
                                            </div>
                                            <p className="text-lg font-bold">We started with WordPress plugins</p>
                                            <p>We have developed hundreds of custom plugins that offer unique features.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card hasGradient gradientPosition="right">
                                    <CardContent>
                                        <div>
                                            <div className="flex mb-6 md:mb-12">
                                                <span className="h-8 w-8 flex items-center justify-center text-white bg-primary block rounded-full text-2xl">2</span>
                                            </div>
                                            <p className="text-lg font-bold">We got involved in complex web projects</p>
                                            <p>Very soon, challenges arose that went beyond what could be done with a couple of plugins.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card hasGradient gradientPosition="right">
                                    <CardContent>
                                        <div>
                                            <div className="flex mb-6 md:mb-12">
                                                <span className="h-8 w-8 flex items-center justify-center text-white bg-primary block rounded-full text-2xl">3</span>
                                            </div>
                                            <p className="text-lg font-bold">And now we create AI solutions</p>
                                            <p>Tools that multiply operational efficiency and give users new functions.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                        </div>

                        <div className="text-accent text-center text-xl md:text-2xl">
                            <p>And what's to come</p>
                        </div>
                    </CardContent>
                </Card>

            </Hero>

            <Container className="space-y-8">

                <div className="max-w-2xl mx-auto space-y-6">
                    <Heading title={<>We overcome any challenge because we have our own method</>} as="p" size="medium" variant="body" className="text-center" />

                    <Heading title={<>and three unwavering principles</>} as="p" size="small" variant="primary" className="text-center" />
                </div>

                <VerticalTabs
                    numbered={true}
                    tabs={[
                        {
                            label: "Integration from the ground up",
                            content:
                                <div className="space-y-4 text-lg md:text-xl">
                                    <p>Solutions do not exist in isolation. We design them with integration with your systems and tools in mind from the outset, to ensure smooth implementation and an operation-focused vision.</p>
                                </div>,
                        },
                        {
                            label: "Scalability as a principle",
                            content:
                                <div className="space-y-4 text-lg md:text-xl">
                                    <p>Solutions must be aligned with the pace of business growth.</p>
                                    <p>We use modular architectures and cutting-edge technologies for rapid prototyping. They can evolve according to technical needs, with the security of a robust and adaptable infrastructure.</p>
                                </div>,
                        },
                        {
                            label: "Optimization through simplicity",
                            content:
                                <div className="space-y-4 text-lg md:text-xl">
                                    <p>Development is complex so that the solution is easy to use, maintain, and evolve.</p>
                                    <p>We create clean, agile, and well-documented code to give you high-performance solutions.  It facilitates the management of technical teams and user handling.</p>
                                </div>,
                        },
                    ]}
                />

            </Container>

            <Container className="space-y-8">
                <div className="max-w-2xl mx-auto space-y-6">
                    <Heading title={<>We are three minds working together to develop your customized projects</>} as="p" size="medium" variant="body" className="text-center" />
                </div>

                <div className="space-y-4">
                    <Card hasGradient gradientPosition="right">
                        <CardContent>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <Image className="rounded" src="/illustrations/amadeu.png" alt="Amadeu Arderiu" width={150} height={150} />

                                <p className="text-xl md:text-2xl">Amadeu Arderiu</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card hasGradient gradientPosition="right">
                        <CardContent>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <Image className="rounded" src="/illustrations/joan.png" alt="Joan Rodas" width={150} height={150} />

                                <p className="text-xl md:text-2xl">Joan Rodas</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card hasGradient gradientPosition="right">
                        <CardContent>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <Image className="rounded" src="/illustrations/albert.png" alt="Albert Tarrés" width={150} height={150} />

                                <p className="text-xl md:text-2xl">Albert Tarrés</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button variant="primary" size="lg">Schedule a call</Button>
                    </Link>
                </div>

            </Container>

            <div className="bg-white border-y border-text-muted">
                <div className="md:flex justify-around md:divide-x md:divide-text-muted md:divide-dashed">

                    <div className="px-4 md:px-6 w-full md:max-w-md md:ml-auto py-6 md:py-12">
                        <div className="mb-6">
                            <Heading title={<>400+</>} as="p" size="medium" variant="primary" className="" />
                            <Heading title={<>client projects</>} as="p" size="medium" variant="body" className="" />
                        </div>

                        <p className="text-lg md:text-xl text-text-dark">We have developed custom plugins, platforms, and technological solutions of all kinds to solve a wide range of problems, create new commercial products, and optimize business processes.</p>
                    </div>

                    <div className="px-4 md:px-6 w-full md:max-w-md py-6 md:py-50">
                        <div className="mb-6">
                        <Heading title={<>8</>} as="p" size="medium" variant="primary" className="" />
                            <Heading title={<>own products</>} as="p" size="medium" variant="body" className="" />
                        </div>

                        <p className="text-lg md:text-xl text-text-dark mb-4">It's easy to create for others and tell them how to do things from the comfort of your sofa. But the fun part is taking risks.</p>
                        <p className="text-lg md:text-xl text-text-dark">At Sirvelia, we know how complex it is. We develop our own products and spin-off brands to explore new verticals and experiment with technologies. And since we like to create synergies with interesting companies, sometimes we do so with partners.</p>
                    </div>

                    <div className="px-4 md:px-6 md:pt-60 w-full md:max-w-md md:mr-auto py-6 md:py-12 md:flex md:flex-col md:justify-end">
                        <div className="mb-6">
                            <Heading title={<>10+</>} as="p" size="medium" variant="primary" className="" />
                            <Heading title={<>sponsorships</>} as="p" size="medium" variant="body" className="" />
                        </div>

                        <p className="text-lg md:text-xl text-text-dark">We collaborate with the WordPress community by sponsoring WordCamps in Spain and Europe and giving talks at meetups to share some of our secrets.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}