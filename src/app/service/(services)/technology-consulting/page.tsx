import HeroSection from "../../components/HeroSection";

export default function TechnologyConsulting() {
    return (
        <div>
            <HeroSection
                title="Consulting, advisory services, and IT maintenance"
                subtitle="Reduce risks and seize opportunities by asking the right questions"
                description={<>Don't let technological challenges slow down your company's growth. We advise you on complex decisions and provide the technical support that keeps your business running.</>}
                image="/illustrations/14.png"
                button="I want technical support"
            />
        </div>
    );
}