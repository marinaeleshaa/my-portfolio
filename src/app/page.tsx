import SplashCursor from "@/components/common/SplashCursor";
import AboutSection from "@/sections/AboutSection";
import AchievementsSection from "@/sections/AchievementsSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TechnologySection from "@/sections/TechnologySection";

export default function Home() {
  return (
    <div>
      <SplashCursor SPLAT_FORCE={500} SPLAT_RADIUS={0.08} />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div className="md:w-[75%] mx-auto px-10 md:px-0 space-y-40">
        <div id="aboutSection" className="">
          <AboutSection />
        </div>
        <div id="achievementsSection" className="">
          <AchievementsSection />
        </div>
        <div id="technologySection" className="">
          <TechnologySection />
        </div>
        <div>
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
