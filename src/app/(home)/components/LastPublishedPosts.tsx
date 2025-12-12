import { getLastPublishedPosts } from "@/lib/blog";
import { Suspense } from 'react'
import PostCard from "@/components/PostCard";

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
                    <PostCard key={post.id} link={`/blog/${post.slug}`} imageurl={post.featuredImage.sourceUrl} title={post.title.rendered} categories={post.categories} />
                ))}
            </div>
        </div>
    )
}