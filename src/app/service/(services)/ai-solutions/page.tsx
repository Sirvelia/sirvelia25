import HeroSection from "../../components/HeroSection";

export default function AISolutions() {
    return (
        <div>
            <HeroSection
                title="AI solutions"
                subtitle="What would your team do with 10 more hours each week?"
                description={<>Or 20, or 50... with AI, you can multiply efficiency to unprecedented levels. We implement smart ideas and solutions in weeks, not months, to keep your company at the forefront.</>}
                image="/illustrations/04.png"
                button="Let's talk about competitiveness"
            />
        </div>
    );
}