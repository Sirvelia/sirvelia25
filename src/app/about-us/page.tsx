import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import IcoWritingTool from "@/components/icons/ico--100-writing tool";
import { Card, CardContent } from "@/components/ui/card";

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
                                            <div className="flex mb-12">
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
                                            <div className="flex mb-12">
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
                                            <div className="flex mb-12">
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
        </div>
    );
}