import HeroSection from "../../components/HeroSection";

export default function NextjsDevelopment() {
    return (
        <div>
            <HeroSection
                title="Development with Next.js"
                subtitle="The framework for those who want to build the future of the web"
                description={<>Next.js is the framework that allows you to create web applications that are fast, scalable, and easy to maintain. It is the framework that allows you to build the future of the web.</>}
                image="/illustrations/12.png"
                button="I want to build the future of the web"
            />
        </div>
    );
}