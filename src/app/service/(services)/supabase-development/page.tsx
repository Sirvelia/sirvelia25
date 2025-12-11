import HeroSection from "../../components/HeroSection";

export default function SupabaseDevelopment() {
    return (
        <div>
            <HeroSection
                title="Development with Supabase"
                subtitle="Supabase: Backend as a Service for ultra-fast development"
                description={<>The framework for those seeking simplification and efficiency without having to worry about infrastructure and maintenance. Is development speed your priority right now? Supabase is the answer.</>}
                image="/illustrations/11.png"
                button="Let's do it fast"
            />
        </div>
    );
}