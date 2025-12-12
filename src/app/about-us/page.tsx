import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import IcoWritingTool from "@/components/icons/ico--100-writing tool";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import VerticalTabs from "@/components/VerticalTabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";
import SubHeading from "@/components/SubHeading";
import ContactForm from "./ConctactForm";

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

            <div className="py-12 md:py-24">
                <TestimonialSlider testimonials={[
                    {
                        stars: 5,
                        content: "100% recommended: human quality, easy communication, and absolute professionalism. We've been working with them for six months, and the quality and reliability of their work is unbeatable.",
                        person: {
                            name: "Guillermo Barquero",
                            title: "Founder & CTO @ Zrive",
                            imageUrl: "/testimonials/guillermo-barquero.png",
                        },
                        company: {
                            name: "Zrive",
                            logoUrl: "/testimonials/zrive.svg",
                        }
                    },
                    {
                        stars: 5,
                        content: "We've hired Sirvelia on several occasions for WordPress plugin development, and the results couldn't have been better. They're incredibly easy to work with because they're such great professionals, not only technically but also personally. We'll definitely work with them again whenever we need them. 100% recommended.",
                        person: {
                            name: "Abián R. Zaya",
                            title: "CEO",
                            imageUrl: "/testimonials/abian-zaya.png",
                        },
                        company: {
                            name: "ITGallery",
                            logoUrl: "/testimonials/itgallery.png",
                        }
                    },
                    {
                        stars: 5,
                        content: "Working with Sirvelia is always a pleasure. At GAMMA GROUP, we have worked on a wide variety of projects with them, and all of them have been a success. Their response is quick, personalized, and effective, which makes working with them easy and efficient. At Sirvelia, they don't just do what you ask them to do; they first understand your business and your real needs and then propose the best solution.",
                        person: {
                            name: "Cristina Fernández Freixa",
                            title: "CMO",
                            imageUrl: "/testimonials/cristina-fernandez.jpeg",
                        },
                        company: {
                            name: "GAMMA GROUP",
                            logoUrl: "/testimonials/gamma-group.jpeg",
                        }
                    },
                    {
                        stars: 5,
                        content: "We were looking for versatile developers to strengthen our dev team. We've been successfully collaborating with Sirvelia for more than a year. They've been able to smoothly intervene in our environment and communicate with our international team.",
                        person: {
                            name: "Philippe Tarrare",
                            title: "CEO",
                            imageUrl: "/testimonials/philippe-tarrare.jpeg",
                        },
                        company: {
                            name: "Voodootix",
                            logoUrl: "/testimonials/voodoo.png",
                        }
                    },
                    {
                        stars: 5,
                        content: "Great development team and skilled professionals. Excellent communication and work delivery. We've hired several teams to solve various WordPress optimization issues that we couldn't resolve with other professionals. Recommended.",
                        person: {
                            name: "David Carrasco",
                            title: "SEO & Growth Advisor",
                            imageUrl: "/testimonials/david-carrasco.jpeg",
                        }
                    },
                    {
                        stars: 5,
                        content: "They helped us develop a new, fully customized WordPress website, developing everything completely ad hoc. We now have a fast, self-manageable website with management features developed specifically for our needs, particularly for managing the content and documents for all the products we have on the website, in all languages, and with version control for everything.",
                        person: {
                            name: "Néstor Díaz",
                            title: "Managing Director SPAIN",
                            imageUrl: "/testimonials/nestor-diaz.jpeg",
                        },
                        company: {
                            name: "EKSELANS BY ITS",
                            logoUrl: "/testimonials/ekselans.png",
                        }
                    }
                ]} />
            </div>

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

            <Container className="space-y-8">

                <div className="max-w-2xl mx-auto space-y-4 mb-16">
                    <SubHeading title={<>What project are you going to challenge us with?</>} as="p" size="small" variant="primary" className="justify-center" />
                    <Heading title={<>We have the solution, we just need to hear your idea</>} as="p" size="medium" variant="body" className="text-center" />
                </div>

                <div className="max-w-xl mx-auto space-y-6">
                    <Quote avatar="/illustrations/amadeu.png" avatarName="Amadeu Arderiu" quote="Let's talk about your project" />
                </div>

                <ContactForm />
            </Container>
        </div>
    );
}