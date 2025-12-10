import { getLastPublishedPosts } from "@/lib/blog";
import Heading from '@/components/Heading'
import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import Image from "next/image";
import SubHeading from "@/components/SubHeading";
import { ArrowRightIcon } from "lucide-react";

export default function LastPublishedPosts() {

    return (
        <Suspense>
            <PostsGrid />
        </Suspense>
    )
}

async function PostsGrid() {
    const posts = await getLastPublishedPosts();

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-8 items-center">
                {posts.map((post: any) => (
                    <Card href={`/blog/${post.slug}`} key={post.id} className="h-full" hasGradient gradientPosition="left">
                        <CardContent className="space-y-2">
                            <Image className="rounded-md w-full h-[200px] object-cover" src={post.featuredImage.sourceUrl} alt={post.title.rendered} width={300} height={200} />

                            <div>
                                {post.categories.map((category: any) => (
                                    <SubHeading title={category} as="p" size="xsmall" variant="primary" className="" key={category} />
                                ))}
                            </div>

                            <Heading title={post.title.rendered} as="h3" size="small" variant="body" className="" />

                            <div className="flex justify-end">
                                <SubHeading title={<>Read <ArrowRightIcon className="size-4" /></>} as="p" size="xsmall" variant="primary" className="text-right" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}