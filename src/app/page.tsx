import SplashCursor from "@/components/common/SplashCursor";
import AboutSection from "@/sections/AboutSection";
import AchievementsSection from "@/sections/AchievementsSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TechnologySection from "@/sections/TechnologySection";

export default function Home() {
  return (
    <div>
      <div aria-hidden="true">
        <SplashCursor SPLAT_FORCE={500} SPLAT_RADIUS={0.08} />
      </div>
      <main id="main-content">
        <section id="heroSection" aria-label="Hero section">
          <HeroSection />
        </section>
        <div className="md:w-[75%] mx-auto px-10 md:px-0 space-y-40">
          <section id="aboutSection" aria-label="About Marina Eleshaa">
            <AboutSection />
          </section>
          <section id="achievementsSection" aria-label="Achievements">
            <AchievementsSection />
          </section>
          <section id="technologySection" aria-label="Technologies">
            <TechnologySection />
          </section>
          <section id="projectsSection" aria-label="Featured projects">
            <ProjectsSection />
          </section>
          <section id="contactSection" aria-label="Contact">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
}
