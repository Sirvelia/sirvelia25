import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function MenuLink({ href, className, children }: MenuLinkProps) {
    return (
        <Link href={href} className={cn("block w-full py-4 px-6 text-left cursor-pointer hover:bg-primary-dark/50", className)}>
            {children}
        </Link>
    );
}