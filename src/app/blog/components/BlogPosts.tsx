import { getBlogPosts } from "@/lib/blog";
import { Suspense } from "react";
import PostCard from "@/components/PostCard";

export default function BlogPosts() {
    return (
        <Suspense>
            <BlogPostsGrid />
        </Suspense>
    );
}

async function BlogPostsGrid() {
    const posts = await getBlogPosts();

    return (
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 items-center">
            {posts.map((post: any) => (
                <PostCard key={post.id} link={`/blog/${post.slug}`} imageurl={post.featuredImage.sourceUrl} title={post.title.rendered} categories={post.categories} />
            ))}
        </div>
    );
}