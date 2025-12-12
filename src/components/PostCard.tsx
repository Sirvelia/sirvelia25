
import { Card, CardContent } from '@/components/ui/card';
import Image from "next/image";
import SubHeading from "@/components/SubHeading";
import Heading from '@/components/Heading';
import { ArrowRightIcon } from "lucide-react";

interface PostCardProps {
    link: string;
    imageurl: string;
    title: string;
    categories: string[];
}

export default function PostCard({ link, imageurl, title, categories }: PostCardProps) {
    return (
        <Card href={link} className="h-full" hasGradient gradientPosition="left">
            <CardContent className="space-y-2">
                <Image className="rounded-md w-full h-[200px] object-cover" src={imageurl} alt={title} width={300} height={200} />

                <div>
                    {categories.map((category: string) => (
                        <SubHeading title={category} as="p" size="xsmall" variant="primary" className="" key={category} />
                    ))}
                </div>

                <Heading title={title} as="h3" size="small" variant="body" className="" />

                <div className="flex justify-end">
                    <SubHeading title={<>Read <ArrowRightIcon className="size-4" /></>} as="p" size="xsmall" variant="primary" className="text-right" />
                </div>
            </CardContent>
        </Card>
    )
}