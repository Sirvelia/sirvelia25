import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "./Container";

interface IconsGridProps {
    className?: string;
    children: React.ReactNode;
}

interface IconsGridIconProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

function IconsGrid({ className, children }: IconsGridProps) {
    return (
        <div className={cn("bg-primary text-primary-foreground px-2 md:px-6 py-12", className)}>
            <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center px-2 md:px-4 relative">
                <div className="hidden lg:block absolute top-0 left-0 w-full h-1/2 border-b-2 border-dashed border-primary-hover">

                </div>
                {children}

            </Container>
        </div>
    );
}

function IconsGridIcon({
    src,
    alt,
    width = 100,
    height = 20,
    className
}: IconsGridIconProps) {
    return (
        <div className="col-span-1 relative">
            <div className="bg-primary p-4 border-primary-hover border-2 rounded-lg shadow-[0_0_0_3px_#05DAFF14]">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    title={alt}
                    className={cn("brightness-0 invert-[1] h-[20px] w-auto mx-auto", className)}
                />
            </div>
        </div>
    );
}

IconsGrid.Icon = IconsGridIcon;

export default IconsGrid;