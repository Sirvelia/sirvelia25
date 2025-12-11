import HeroSection from "../../components/HeroSection";

export default function WhatsAppBotDevelopment() {
    return (
        <div>
            <HeroSection
                title="WhatsApp bot development"
                subtitle="Connect with your customers where they already feel comfortable"
                description={<>With a WhatsApp bot, you can automate contact with your customers directly and securely in real time. Respond instantly and improve their experience. We optimize your conversations so you can build loyalty and multiply business opportunities.</>}
                image="/illustrations/08.png"
                button="I want to be on their phones"
            />
        </div>
    );
}