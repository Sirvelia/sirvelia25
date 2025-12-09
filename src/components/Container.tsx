import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Container({ children, className, style }: ContainerProps) {
    return (
        <div className={cn("w-7xl max-w-full mx-auto", className)} style={style}>
            {children}
        </div>
    );
}