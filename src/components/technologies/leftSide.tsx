"use client";
import TechLogos from "@/data/techLogos";
import LogoLoop from "./LogoLoop";

import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className=" flex gap-8 w-fit h-[300px] relative">
        <LogoLoop
          logos={TechLogos().techLogos1}
          speed={20}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white/60"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos2}
          speed={30}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white/80"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos3}
          speed={40}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={TechLogos().techLogos4}
          speed={50}
          direction="up"
          logoHeight={50}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          className="bg-clip-text text-white"
          ariaLabel="Technology partners"
        />
      </div>
    </motion.div>
  );
};

export default LeftSide;
