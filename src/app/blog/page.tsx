import Container from "@/components/Container";
import Heading from "@/components/Heading";
import BlogPosts from "./components/BlogPosts";

export default function BlogPage() {
    return (
        <div>
            <Container className="space-y-8">
                <Heading title="Sirvelia's Blog" as="h1" size="large" variant="body" className="text-center" />
                <BlogPosts />
            </Container>
        </div>
    );
}