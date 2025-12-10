import { cn } from "@/lib/utils";
import React from "react";

type SubHeadingLevel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type SubHeadingSize = "small" | "medium" | "large";

interface SubHeadingProps {
    title: React.ReactNode;
    as?: SubHeadingLevel;
    size?: SubHeadingSize;
    variant?: "primary" | "accent" | "white" | "body";
    className?: string;
}

export default function SubHeading({ title, as = "p", size = "medium", variant = "primary", className }: SubHeadingProps) {
    const baseStyles = "font-mono font-medium";

    const variantStyles = {
        primary: "text-primary",
        accent: "text-accent",
        white: "text-white",
        body: "text-body",
    }

    const sizeStyles = {
        small: "text-2xl md:text-3xl",
        medium: "text-3xl md:text-4xl",
        large: "text-4xl md:text-6xl",
    }

    const Component = as;

    return (
        <Component className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
            {title}
        </Component>
    );
}