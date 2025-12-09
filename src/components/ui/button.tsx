import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-mono font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        primaryLight: "bg-primary-light text-primary hover:bg-primary-light/80",
        primaryDark: "bg-primary-dark text-white hover:bg-primary-dark/80",
        primaryOutline: "border-2 border-primary text-primary hover:bg-primary/80",

        accent: "bg-accent text-accent-dark hover:bg-accent/80",
        accentLight: "bg-accent-ultra-light text-accent hover:bg-accent-ultra-light/80",
        accentDark: "bg-accent-semi-dark text-white hover:bg-accent-semi-dark/80",
        accentOutline: "border-2 border-accent text-accent hover:bg-accent/80",

        link: "text-primary text-base underline-offset-4 hover:underline",
      },
      size: {
        md: "text-lg h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "text-base h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "text-xl h-11 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
