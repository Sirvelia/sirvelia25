import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { ChevronDownIcon, Menu } from "lucide-react";
import HeaderDropdownMenu from "@/components/header/HeaderDropdownMenu";
import MenuLink from "./MenuLink";
import MenuDropdown from "./MenuDropdown";
import MobileMenu from "./MobileMenu";
import Container from "../Container";

export type HeaderVariant = "white" | "dark" | "primary";

interface HeaderProps {
  variant?: HeaderVariant;
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const getVariantStyles = (variant: HeaderVariant) => {
    switch (variant) {
      case "white":
        return {
          bg: "bg-background",
          text: "text-foreground",
          logo: "/sirvelia-blue-logo.svg",
          button: "primary",
        };
      case "primary":
        return {
          bg: "bg-primary",
          text: "text-primary-foreground",
          logo: "/sirvelia-white-logo.svg",
          button: "accent",
        };
      case "dark":
      default:
        return {
          bg: "bg-primary-ultra-dark",
          text: "text-primary-foreground",
          logo: "/sirvelia-white-logo.svg",
          button: "primary",
        };
    }
  };

  const styles = getVariantStyles(variant);


  return (
    <>
      <header className={`${styles.bg} ${styles.text} relative px-2 md:px-6 py-2 md:py-4  font-light`}>
        <div className="w-7xl max-w-full mx-auto flex items-center justify-between">
          <Link href="/">
            <Image className="w-auto h-5 md:h-auto" src={styles.logo} alt="Logo" width={120} height={29} />
          </Link>

          <div className="flex items-center gap-8">

            <div className="hidden md:flex items-center gap-8">
              <HeaderDropdownMenu
                trigger={
                  <>
                    <span>Services</span>
                    <ChevronDownIcon className="size-4 mt-1" />
                  </>
                }
                contentClassName=""
              >
                <div className="px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3">

                    <div className="md:border-l border-primary-foreground/20">
                      <Link className="py-6 block h-full w-full group transition-all duration-300 hover:bg-primary-dark/50" href="/service/technology-consulting">
                        <Image className="w-full h-[200px] object-contain mx-auto" src="/illustrations/14.png" alt="Technology Consulting" width={400} height={200} />

                        <div className="p-4">
                          <p className="font-display font-normal text-xl text-center">Technology Consulting</p>
                        </div>
                      </Link>
                    </div>

                    <div className="md:border-x border-primary-foreground/20">
                      <Link className="pt-6 pb-4 block w-full group transition-all duration-300 hover:bg-primary-dark/50 border-b border-primary-foreground/20" href="/service/product-development">

                        <Image className="w-full h-[200px] object-contain mx-auto" src="/illustrations/05.png" alt="Product Development" width={400} height={200} />

                        <div className="p-4">
                          <p className="font-display font-normal text-xl text-center">Product Development</p>
                        </div>
                      </Link>

                      <div className="divide-y divide-primary-foreground/20">
                        <MenuDropdown
                          trigger={
                            "WordPress Plugins"
                          }
                        >
                          <MenuLink className="bg-primary-light/10" href="/service/wordpress-plugin-development">
                            WordPress Plugin Development
                          </MenuLink>
                          <MenuLink className="bg-primary-light/10" href="/service/woocommerce-plugin-development">
                            WooCommerce Plugin Development
                          </MenuLink>
                        </MenuDropdown>

                        <MenuLink href="/service/ai-solutions">
                          AI Solutions
                        </MenuLink>

                        <MenuDropdown
                          trigger={
                            "Custom Web Development"
                          }
                        >
                          <MenuLink className="bg-primary-light/10" href="/service/nextjs-development">
                            Next.js Development
                          </MenuLink>
                          <MenuLink className="bg-primary-light/10" href="/service/laravel-development">
                            Laravel Development
                          </MenuLink>
                          <MenuLink className="bg-primary-light/10" href="/service/supabase-development">
                            Supabase Development
                          </MenuLink>
                          <MenuLink className="bg-primary-light/10" href="/service/nuxt-development">
                            Nuxt Development
                          </MenuLink>
                        </MenuDropdown>

                        <MenuLink href="/service/hybrid-app-and-pwa-development">
                          Hybrid App and PWA Development
                        </MenuLink>

                        <MenuDropdown
                          trigger={
                            "Bot Development"
                          }
                        >
                          <MenuLink className="bg-primary-light/10" href="/service/telegram-bot-development">
                            Telegram Bots
                          </MenuLink>
                          <MenuLink className="bg-primary-light/10" href="/service/whatsapp-bot-development">
                            WhatsApp Bots
                          </MenuLink>
                        </MenuDropdown>
                      </div>

                    </div>

                    <div className="md:border-r border-primary-foreground/20">
                      <Link className="py-6 block h-full w-full group transition-all duration-300 hover:bg-primary-dark/50" href="/service/process-digitization">

                        <Image className="w-full h-[200px] object-contain mx-auto" src="/illustrations/02.png" alt="Process Digitization" width={400} height={200} />

                        <div className="p-4">
                          <p className="font-display font-normal text-xl text-center">Process Digitization</p>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </HeaderDropdownMenu>

              <Link href="/about-us" className="hover:underline">About us</Link>
              <Link href="/spin-offs" className="hover:underline">Spin offs</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact" className="hover:underline">
                <Button variant={styles.button as VariantProps<typeof buttonVariants>["variant"]}>Contact</Button>
              </Link>

              <MobileMenu variant={styles.text} />
            </div>


          </div>
        </div>
      </header>
    </>
  );
}