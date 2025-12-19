"use client";

import AchievementsData, { IAchievement } from "@/data/achivementsData";
import SpotlightCard from "./SpotlightCard";
import Animate from "../common/Animate";

const FilledCards = () => {
  return (
    <Animate className="grid  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  mx-auto ">
      {AchievementsData.map((achievement: IAchievement) => (
        <Animate
          delay={achievement.id * 0.2}
          key={achievement.id}
          className="p-4  rounded-lg shadow-md"
        >
          <SpotlightCard achievement={achievement} />
        </Animate>
      ))}
    </Animate>
  );
};

export default FilledCards;
