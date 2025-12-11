import HeroSection from "../../components/HeroSection";

export default function NuxtDevelopment() {
    return (
        <div>
            <HeroSection
                title="Development with Nuxt"
                subtitle="Ultra-fast and smooth web applications, because users don't wait"
                description={<>With the Nuxt framework, we develop applications that impress and provide the best experience for your users. Because you don't just have to give them the best functionality: it also has to be visually stunning and easy to use.</>}
                image="/illustrations/12.png"
                button="I want to impress them"
            />
        </div>
    );
}