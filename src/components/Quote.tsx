import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface QuoteProps {
    avatar: string;
    avatarName: string;
    quote: string;
}

export default function Quote({ avatar, avatarName, quote }: QuoteProps) {
    return (
        <div className="relative">
            <Card className="md:!rounded-full" hasGradient gradientPosition="top">
                <CardContent>
                    <div className="flex items-start gap-4 py-4">
                        <div className="flex-1 text-center md:text-lg">
                            <div
                                dangerouslySetInnerHTML={{ __html: quote }}
                                />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {avatar && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0">
                    <Image
                        src={avatar}
                        alt={avatarName || "Avatar"}
                        width={52}
                        height={52}
                        className="rounded-full border border-accent"
                    />
                </div>
            )}
        </div>
    );
}