import SplashCursor from "@/components/SplashCursor";
import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <SplashCursor SPLAT_FORCE={500} SPLAT_RADIUS={0.08} />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div className="md:w-[75%] mx-auto px-10 md:px-0">
        <div id="aboutSection" className="min-h-screen">
          <AboutSection />
          
        </div>
      </div>
    </div>
  );
}
