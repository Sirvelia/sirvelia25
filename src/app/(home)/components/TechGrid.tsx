import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";

export default function TechGrid() {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-8 items-center">

                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/woocommerce-wordpress.png" alt="WordPress and WooCommerce plugins" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="WordPress and WooCommerce plugins" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>


                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/web.png" alt="Custom websites" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="Custom websites" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/ai.png" alt="AI" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="Artificial Intelligence" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/nuxt-laravel-supabase.png" alt="Laravel, Nuxt, and Supabase" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="Laravel, Nuxt, and Supabase" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/apps.png" alt="PWA and hybrid apps" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="PWA and hybrid apps" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 text-text-dark md:h-full" href="/contact">
                    <CardContent className="h-full space-y-6 flex flex-col justify-between">
                        <div className="flex-1 space-y-6">
                            <div className="px-6">
                                <Image className="h-[150px] md:h-[200px] w-full object-contain object-center" src="/services/telegram-bot.png" alt="WhatsApp and Telegram bots" width={300} height={208} />
                            </div>

                            <div>
                                <Heading title="WhatsApp and Telegram bots" as="h3" size="small" variant="body" className="text-center" />

                                <div className="text-center">
                                    <Button variant="link" size="lg">I'm interested <ChevronRightIcon /></Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}