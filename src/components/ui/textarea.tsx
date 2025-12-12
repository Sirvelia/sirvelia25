import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        light: "bg-card text-card-foreground border border-[#DBDFEB] shadow-[0_0_0_3px_#EBEEF4] rounded-xl",
        dark: "bg-website-background-ultra-dark text-color-text-light border border-[#2B3550] shadow-[0_0_0_3px_#05DAFF14] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
)

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        textareaVariants({ variant }),
        "dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
