import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  hasGradient?: boolean
  gradientPosition?: "left" | "right"
  isHoverable?: boolean
  href?: string
  variant?: "light" | "dark"
}

function Card({ className, hasGradient, gradientPosition, isHoverable, href, variant = "light", ...props }: CardProps) {
  const shouldBeHoverable = isHoverable ?? !!href
  const isDark = variant === "dark"
  
  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl py-6 relative overflow-hidden",
        // Light variant (default)
        !isDark && "bg-card text-card-foreground border border-[#DBDFEB] shadow-[0_0_0_3px_#EBEEF4]",
        // Dark variant
        isDark && "bg-website-background-ultra-dark text-color-text-light border border-[#2B3550] shadow-[0_0_0_3px_#05DAFF14]",
        hasGradient && gradientPosition === "left" && "before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_left,#05DAFF_0px,rgba(5,218,255,0)_200px)] before:rounded-xl before:opacity-[15%]",
        hasGradient && gradientPosition === "right" && "before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_right,#05DAFF_0px,rgba(5,218,255,0)_200px)] before:rounded-xl before:opacity-[15%]",
        shouldBeHoverable && "hover:border-accent hover:shadow-sm hover:shadow-accent",
        href && "cursor-pointer",
        className
      )}
      {...props}
    />
  )

  if (href) {
    return (
      <Link className="h-full" href={href}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 relative", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardContent,
}
