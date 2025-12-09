import { cn } from "@/lib/utils";
import React from "react";

type HeadingLevel = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
    title: React.ReactNode;
    as?: HeadingLevel;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "accent" | "white" | "body";
    className?: string;
    hasSlash?: boolean;
}

export default function Heading({ title, as = "h1", size = "medium", variant = "primary", className, hasSlash = false }: HeadingProps) {
    const baseStyles = "font-display font-medium";

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

    const slashStyles = hasSlash ? "flex gap-2" : "";

    const Component = as;

    return (
        <Component className={cn(baseStyles, variantStyles[variant], sizeStyles[size], slashStyles, className)}>
            {hasSlash && <span className="text-accent text-5xl">/</span>}
            {title}
        </Component>
    );
}