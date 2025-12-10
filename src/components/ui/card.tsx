import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  hasGradient?: boolean
  gradientPosition?: "left" | "right"
  isHoverable?: boolean
  href?: string
}

function Card({ className, hasGradient, gradientPosition, isHoverable, href, ...props }: CardProps) {
  const shouldBeHoverable = isHoverable ?? !!href
  
  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[#DBDFEB] py-6 shadow-[0_0_0_3px_#EBEEF4] relative overflow-hidden",
        hasGradient && gradientPosition === "left" && "before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_left,#05DAFF_0px,rgba(5,218,255,0)_100px)] before:rounded-xl before:opacity-[15%]",
        hasGradient && gradientPosition === "right" && "before:absolute before:inset-0 before:pointer-events-none before:bg-[radial-gradient(circle_at_right,#05DAFF_0px,rgba(5,218,255,0)_100px)] before:rounded-xl before:opacity-[15%]",
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
