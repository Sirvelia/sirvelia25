import HeroSection from "../../components/HeroSection";

export default function WordPressPluginDevelopment() {
    return (
        <div>
            <HeroSection
                title="WordPress plugin development"
                subtitle="What do these companies that install custom plugins know?"
                description={<>They have more than 70,000 plugins for WordPress at their disposal. Thousands are free. Nothing prevents them from installing them to optimize their websites.</>}
                image="/illustrations/06.png"
                button="I have a hunch why, let's talk"
            />
        </div>
    );
}