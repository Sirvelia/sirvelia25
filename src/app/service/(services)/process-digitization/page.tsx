import HeroSection from "../../components/HeroSection";

export default function ProcessDigitization() {
    return (
        <div>
            <HeroSection
                title="Process automation"
                subtitle="Technology at the service of operations, not the other way around"
                description={<>Having your team warming their seats with useless processes is a waste of their valuable talent. And they surely think the same. Help your company become more productive and efficient. We transform manual and repetitive workflows with agile, automated solutions.</>}
                image="/illustrations/02.png"
                button="Let's revolutionize processes"
            />
        </div>
    );
}