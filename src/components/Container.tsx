import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Container({ children, className, style }: ContainerProps) {
    return (
        <div className={cn("relative px-2 md:px-6 py-12 md:py-24 w-7xl max-w-full mx-auto", className)} style={style}>
            {children}
        </div>
    );
}