'use client';

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import MenuLink from "./MenuLink";
import MenuDropdown from "./MenuDropdown";

interface MobileMenuProps {
    className?: string;
    variant?: any;
}

export default function MobileMenu({ className, variant }: MobileMenuProps) {

    const [isOpen, setIsOpen] = useState(false);

    const getVariantStyles = (variant: any) => {
        return {
            text: variant,
        };
    }

    const styles = getVariantStyles(variant);

    return (
        <div className={cn("md:hidden", className)}>
            <div className="flex items-center justify-center">
                <button className={styles.text} aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 w-full bg-primary text-primary-foreground z-50 [background-image:linear-gradient(to_bottom,transparent_30%,rgba(18,22,33,0.3)_100%)]">
                    <div className="flex flex-col divide-y divide-primary-foreground/20">
                        <MenuLink href="/">Home</MenuLink>
                        <MenuDropdown trigger="Services">
                            <MenuLink href="/service/technology-consulting">Technology Consulting</MenuLink>

                            <MenuDropdown trigger="Product Development">
                                <MenuDropdown trigger="WordPress Plugins">
                                    <MenuLink className="bg-primary-light/10" href="/service/wordpress-plugin-development">WordPress Plugin Development</MenuLink>
                                    <MenuLink className="bg-primary-light/10" href="/service/woocommerce-plugin-development">WooCommerce Plugin Development</MenuLink>
                                </MenuDropdown>
                                <MenuLink href="/service/ai-solutions">AI Solutions</MenuLink>

                                <MenuDropdown trigger="Custom Web Development">
                                    <MenuLink className="bg-primary-light/10" href="/service/nextjs-development">Next.js Development</MenuLink>
                                    <MenuLink className="bg-primary-light/10" href="/service/laravel-development">Laravel Development</MenuLink>
                                    <MenuLink className="bg-primary-light/10" href="/service/supabase-development">Supabase Development</MenuLink>
                                    <MenuLink className="bg-primary-light/10" href="/service/nuxt-development">Nuxt Development</MenuLink>
                                </MenuDropdown>

                                <MenuLink href="/service/hybrid-app-and-pwa-development">Hybrid App and PWA Development</MenuLink>
                                <MenuDropdown trigger="Bot Development">
                                    <MenuLink className="bg-primary-light/10" href="/service/telegram-bot-development">Telegram Bots</MenuLink>
                                    <MenuLink className="bg-primary-light/10" href="/service/whatsapp-bot-development">WhatsApp Bots</MenuLink>
                                </MenuDropdown>
                            </MenuDropdown>
                            <MenuLink href="/service/process-digitization">Process Digitization</MenuLink>
                        </MenuDropdown>

                        <MenuLink href="/about-us">About us</MenuLink>
                        <MenuLink href="/spin-offs">Spin offs</MenuLink>
                        <MenuLink href="/blog">Blog</MenuLink>
                    </div>
                </div>
            )}
        </div>
    );
}