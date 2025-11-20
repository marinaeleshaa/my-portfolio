"use client";

import AchievementsData, { IAchievement } from "@/data/achivementsData";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

const FilledCards = () => {
    
  return (
    <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
      {AchievementsData.map((achievement: IAchievement) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: achievement.id * 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }}
          key={achievement.id}
          className="p-4  rounded-lg shadow-md"
        >
          <SpotlightCard achievement={achievement} />
        </motion.div>
      ))}
    </div>
  );
};

export default FilledCards;
