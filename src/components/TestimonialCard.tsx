import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import PropertyStarFilled from "./icons/Property 1=star--filled";
import PropertyStarHalf from "./icons/Property 1=star--half";
import PropertyStarEmpty from "./icons/Property 1=star--empty";

interface Person {
    imageUrl?: string;
    name: string;
    title?: string;
}

interface Company {
    name?: string;
    logoUrl?: string;
}

export interface TestimonialCardProps {
    stars: number; // 1 to 5 with 0.5 step
    content: string;
    person?: Person;
    company?: Company;
}

function StarRating({ rating }: { rating: number }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <PropertyStarFilled key={`filled-${i}`} className="text-primary w-5 h-5" />
        );
    }

    if (hasHalfStar) {
        stars.push(
            <PropertyStarHalf key="half" className="text-primary w-5 h-5" />
        );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <PropertyStarEmpty key={`empty-${i}`} className="text-primary w-5 h-5" />
        );
    }

    return <div className="flex gap-1">{stars}</div>;
}

export default function TestimonialCard({ stars, content, person, company }: TestimonialCardProps) {
    return (
        <Card className="h-full max-w-md" hasGradient gradientPosition="right">
            <CardContent className="h-full space-y-4 flex flex-col">
                <div className="space-y-4 flex-1">
                    <StarRating rating={stars} />

                    <p className="text-md md:text-lg font-medium">{content}</p>
                </div>

                <div className="space-y-4">
                    <hr className="border-accent/20" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                        {person && (
                            <div className="flex items-center gap-2">
                                {person.imageUrl && (
                                    <Image
                                        src={person.imageUrl}
                                        alt={person.name}
                                        width={35}
                                        height={35}
                                        className="rounded-full object-cover"
                                    />
                                )}

                                <div>
                                    <p className="text-sm font-semibold">{person.name}</p>
                                    {person.title && (
                                        <p className="text-sm">{person.title}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {company && company.logoUrl && (
                            <div>
                                <Image
                                    src={company.logoUrl}
                                    alt={company.name || ""}
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}