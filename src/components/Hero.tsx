import { cn } from "@/lib/utils";
import { getImageProps } from 'next/image'

type HeroVariant = "dark" | "primary";

interface HeroProps {
    variant?: HeroVariant;
    className?: string;
    children?: React.ReactNode;
    texture?: "pattern" | "pixel";
}

function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}

export default function Hero({ variant = "dark", className, children, texture = "pattern" }: HeroProps) {
    const getVariantStyles = (variant: HeroVariant) => {
        switch (variant) {
            case "primary":
                return {
                    bg: "[background:linear-gradient(to_bottom,rgba(18,22,33,0),rgba(43,53,80,0.3)),#0041E6]",
                    text: "text-primary-foreground",
                    border: "",
                };
            case "dark":
            default:
                return {
                    bg: "bg-gradient-to-b from-[#121621] to-[#2B3550]",
                    text: "text-primary-foreground",
                    border: "border-t border-primary-dark",
                };
        }
    };

    const styles = getVariantStyles(variant);

    const patternImage = '/textures/bg-pattern.png';
    const pixelImage = '/textures/bg-pixel-pattern--xl.png';
    const textureImage = texture === "pattern" ? patternImage : pixelImage;

    const textureOpacity = texture === "pattern" ? "opacity-20" : "opacity-50";
    
    const {
        props: { srcSet, src },
    } = getImageProps({
        src: textureImage,
        alt: '',
        width: 1920,
        height: 1080,
    })
    const backgroundImage = srcSet ? getBackgroundImage(srcSet) : `url("${src}")`
    
    const textureStyles = {
        pattern: {
            backgroundImage: backgroundImage,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
        },
        pixel: {
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'repeat',
        },
    }
    return (
        <div 
            className={cn(styles.bg, styles.text, styles.border, "relative px-2 md:px-6 py-12 md:py-24", className)}
        >
            <div 
                className={cn("absolute inset-0", textureOpacity)}
                style={textureStyles[texture]}
            />

            {variant === "dark" && texture === "pattern" && (
                <div className="absolute inset-0 opacity-50 bg-radial-[at_40%_40%] from-[#05DAFF]/80 to-[#121621]/0 to-30%"
                />
            )}

            <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 md:gap-4">
                {children}
            </div>
        </div>
    );
}