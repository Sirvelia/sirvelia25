import * as React from "react"
import { cn } from "@/lib/utils"

interface RowGridProps extends React.ComponentProps<"div"> {
    children: React.ReactNode
}

function RowGrid({ children, className, ...props }: RowGridProps) {
    return (
        <div 
            className={cn(
                "divide-y divide-dashed divide-text-muted",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface RowGridItemProps extends React.ComponentProps<"div"> {
    children: React.ReactNode
}

function RowGridItem({ children, className, ...props }: RowGridItemProps) {
    return (
        <div 
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 md:gap-8 py-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface RowGridLeftProps extends React.ComponentProps<"div"> {
    children: React.ReactNode
}

function RowGridLeft({ children, className, ...props }: RowGridLeftProps) {
    return (
        <div 
            className={cn(
                "px-2 md:w-xl md:max-w-full md:ml-auto md:col-span-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface RowGridRightProps extends React.ComponentProps<"div"> {
    children: React.ReactNode
}

function RowGridRight({ children, className, ...props }: RowGridRightProps) {
    return (
        <div 
            className={cn(
                "px-2 md:w-xl md:max-w-full md:col-span-1 md:col-start-2",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

RowGrid.Item = RowGridItem
RowGrid.Left = RowGridLeft
RowGrid.Right = RowGridRight

export default RowGrid