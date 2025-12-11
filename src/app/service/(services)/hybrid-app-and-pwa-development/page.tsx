import HeroSection from "../../components/HeroSection";

export default function HybridAppAndPWADevelopment() {
    return (
        <div>
            <HeroSection
                title="PWA and hybrid app development"
                subtitle="Your business in your customers' pockets, without friction or excuses"
                description={<>We look at our phones about 142 times a day. With PWAs and hybrid apps, you can turn your website into a mobile app so your business is always just a tap away.</>}
                image="/illustrations/10.png"
                button="I want to be more accessible"
            />
        </div>
    );
}