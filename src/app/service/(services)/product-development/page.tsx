import HeroSection from "../../components/HeroSection";

export default function ProductDevelopment() {
    return (
        <div>
            <HeroSection
                title="Product development"
                subtitle="What would your company be like if you could bring out the product you imagine?"
                description={<>An MPV, a new version, or the evolution of something you already sell. Whatever it is, we turn your vision into a digital product that opens up new lines of business and improves your customers' experience.</>}
                image="/illustrations/05.png"
                button="I have a product in mind"
            />
        </div>
    );
}