import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { getBlogPostBySlug } from "@/lib/blog";
import Image from "next/image";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    
    return (
        <div>
            <Container className="space-y-8">
                <Heading title={post.title} as="h1" size="medium" variant="body" className="text-center" />

                <Image src={post.featuredImage.node.sourceUrl} alt={post.title} width={800} height={500} className="rounded-md mx-auto" />

                <div className="bg-website-background p-4 md:p-6 rounded-md prose mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Container>
        </div>
    );
}