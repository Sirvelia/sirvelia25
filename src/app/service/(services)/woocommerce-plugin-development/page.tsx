import HeroSection from "../../components/HeroSection";

export default function WooCommercePluginDevelopment() {
    return (
        <div>
            <HeroSection
                title="WooCommerce plugin development"
                subtitle="Serious e-commerce businesses don't leave their sales to chance"
                description={<>An online store needs solid technology that doesn't put sales and operations at risk. With custom plugins, you avoid Russian roulette and the overload of a thousand external tools.</>}
                image="/illustrations/07.png"
                button="Let's optimize e-commerce"
            />
        </div>
    );
}