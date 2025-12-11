import HeroSection from "../../components/HeroSection";

export default function TelegramBotDevelopment() {
    return (
        <div>
            <HeroSection
                title="Telegram bot development"
                subtitle="A chat group with hundreds of users should be useful to you"
                description={<>Other than constantly answering the same questions. With custom bots, you can take advantage of the freedom Telegram offers to create personalized experiences, automate contact and group management, and integrate powerful tools.</>}
                image="/illustrations/09.png"
                button="I want a boosted Telegram"
            />
        </div>
    );
}