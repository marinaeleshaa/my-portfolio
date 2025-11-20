import AchievementHero from "@/components/achievments/achivementHero";
import FilledCards from "@/components/achievments/FilledCards";
import React from "react";

const AchievementsSection = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto px-4 space-y-10">
      <AchievementHero/>
      <FilledCards />
    </div>
  );
};

export default AchievementsSection;
