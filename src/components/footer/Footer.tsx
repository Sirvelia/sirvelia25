import Link from "next/link";
import SocialButton from "./SocialButton";
import Image from "next/image";
import Container from "../Container";

import Banner from "./Banner";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-website-background bg-[url('/textures/bg-pattern.png')] bg-repeat bg-center bg-contain relative pt-4 md:pt-10">

            <Banner />

            <div className="bg-website-background-ultra-dark text-primary-foreground relative px-2 md:px-6 pb-4 md:pb-10 pt-18">

                <Container className="space-y-8">

                    <div className="grid grid-cols-12 gap-4 md:gap-8 md:divide-x divide-primary-dark">

                        <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-4 md:pr-8">
                            <div className="col-span-12 md:col-span-4">
                                <Image src="/sirvelia-white-logo.svg" alt="Sirvelia Logo" width={120} height={29} />
                            </div>

                            <div className="col-span-12 md:col-span-8 space-y-4">
                                <div>
                                    <p className="font-display font-normal text-lg text-white"><span className="text-accent">/</span> Services</p>
                                </div>

                                <hr className="border-primary-dark" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 font-light text-text-light-muted">
                                    <div className="flex flex-col gap-1">
                                        <Link className="hover:underline" href="/service/technology-consulting">Technology Consulting</Link>
                                        <Link className="hover:underline" href="/service/product-development">Product Development</Link>
                                        <Link className="hover:underline" href="/service/ai-solutions">AI Solutions</Link>
                                        <Link className="hover:underline" href="/service/nextjs-development">Next.js Development</Link>
                                        <Link className="hover:underline" href="/service/laravel-development">Laravel Development</Link>
                                        <Link className="hover:underline" href="/service/supabase-development">Supabase Development</Link>
                                        <Link className="hover:underline" href="/service/nuxt-development">Nuxt Development</Link>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Link className="hover:underline" href="/service/wordpress-plugin-development">WordPress Plugin Development</Link>
                                        <Link className="hover:underline" href="/service/woocommerce-plugin-development">WooCommerce Plugin Development</Link>
                                        <Link className="hover:underline" href="/service/hybrid-app-and-pwa-development">Hybrid App and PWA Development</Link>
                                        <Link className="hover:underline" href="/service/telegram-bot-development">Telegram Bot Development</Link>
                                        <Link className="hover:underline" href="/service/whatsapp-bot-development">WhatsApp Bot Development</Link>
                                        <Link className="hover:underline" href="/service/process-digitization">Process Digitization</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-8">

                            <div className="space-y-4">
                                <div>
                                    <p className="font-display font-normal text-lg text-white"><span className="text-accent">/</span> Our Brands</p>
                                </div>

                                <hr className="border-primary-dark" />

                                <div className="flex flex-col gap-1 font-light text-text-light-muted">
                                    <Link className="hover:underline" href="https://ploogins.com" target="_blank">Ploogins</Link>
                                    <Link className="hover:underline" href="https://suggerence.com" target="_blank">Suggerence</Link>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="font-display font-normal text-lg text-white"><span className="text-accent">/</span> Brands with Partners</p>
                                </div>

                                <hr className="border-primary-dark" />

                                <div className="flex flex-col gap-1 font-light text-text-light-muted">
                                    <Link className="hover:underline" href="https://join.chat/en/ai/" target="_blank">Joinchat AI</Link>
                                    <Link className="hover:underline" href="https://wavinai.com" target="_blank">Wavinai</Link>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="flex items-center gap-4">
                        <SocialButton url="https://x.com/sirvelia" network="x" />
                        <SocialButton url="https://www.youtube.com/@sirvelia" network="youtube" />
                        <SocialButton url="https://www.linkedin.com/company/sirvelia" network="linkedin" />
                    </div>

                    <hr className="border-primary-dark" />


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-dark-muted font-light">
                        <div className="flex items-center gap-4">
                            <Link href="/privacy-policy" className="hover:underline">
                                Privacy
                            </Link>
                        </div>

                        <div className="md:text-right">
                            &copy; {year} Sirvelia
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}