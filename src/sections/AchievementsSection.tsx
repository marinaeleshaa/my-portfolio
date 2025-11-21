import AchievementHero from "@/components/achievments/achivementHero";
import FilledCards from "@/components/achievments/FilledCards";
import React from "react";

const AchievementsSection = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto px-4 space-y-10 relative pb-2 flex flex-col   md:px-8 lg:px-0">
      <AchievementHero/>
      <FilledCards />
     
    </div>
  );
};

export default AchievementsSection;
