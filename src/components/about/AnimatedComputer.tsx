"use client";
import Lottie from "lottie-react";
import animationData from "@/animations/Programming Computer.json";
import { motion } from "framer-motion";

const   AnimatedComputer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" , delay: 0.5}}
      viewport={{ once: false, amount: 0.7 }}
      className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mt-0 xl:mt-16 md:-mr-16 lg:-mr-24"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-auto"
        style={{ transform: "scale(1.2)", transformOrigin: "center" }}
      />
    </motion.div>
  );
};

export default AnimatedComputer;
