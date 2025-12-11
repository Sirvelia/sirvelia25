import Container from "@/components/Container";

export default function BlogPostLoading() {
    return (
        <Container className="space-y-8">
            <div className="animate-pulse max-w-3xl mx-auto">
                <div className="h-12 w-full bg-gray-200 rounded-md"></div>
            </div>
            <div className="animate-pulse max-w-2xl mx-auto">
                <div className="h-100 w-full bg-gray-200 rounded-md"></div>
            </div>
            <div className="animate-pulse max-w-2xl mx-auto space-y-4">
                <div className="h-24 w-full bg-gray-200 rounded-md"></div>
                <div className="h-24 w-full bg-gray-200 rounded-md"></div>
                <div className="h-24 w-full bg-gray-200 rounded-md"></div>
            </div>
        </Container>
    );
}