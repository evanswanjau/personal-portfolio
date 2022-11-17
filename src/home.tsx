import { FooterSection } from "./components/footer";
import { AboutSection } from "./components/home/about";
import { ContactSection } from "./components/home/contact";
import { HeroSection } from "./components/home/hero";
import { WorkSection } from "./components/home/work";

export const HOME = () => {
    return (
        <div className="bg-zinc-900 text-zinc-300 font-sen">
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
};
