'use client';

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuDropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export default function MenuDropdown({
    trigger,
    children,
    className,
    contentClassName
}: MenuDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("relative", className)}>
            <button
                role="button"
                className="w-full flex justify-between items-center py-4 px-6 text-left cursor-pointer hover:bg-primary-dark/50"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
            >
                {trigger}
                <ChevronDownIcon className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
                <div
                    className={cn(
                        "border-t border-primary-foreground/20 divide-y divide-primary-foreground/20",
                        contentClassName
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
}