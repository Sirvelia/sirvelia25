import HeroSection from "../../components/HeroSection";

export default function LaravelDevelopment() {
    return (
        <div>
            <HeroSection
                title="Development with Laravel"
                subtitle="Laravel: the robust and flexible framework for scalable and secure web solutions "
                description={<>Lead your company's technological transformation with complex, customized applications that support and keep pace with your business without compromising software quality.</>}
                image="/illustrations/13.png"
                button="I want a powerful backend"
            />
        </div>
    );
}