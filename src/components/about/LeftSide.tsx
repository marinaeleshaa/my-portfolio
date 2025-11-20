"use client";
import { motion } from "framer-motion";
import React from "react";

const LeftSide = () => {
  return (
    <motion.div
      className="w-full md:max-w-xl lg:max-w-2xl relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div
        className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-tl-lg border-l-4 border-t-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>
      <div
        className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-br-lg border-r-4 border-b-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 capitalize text-white">
        who am i?
      </h2>

      <p
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: "#B19EEF" }}
      >
        Front-End Developer focused on building{" "}
        <span style={{ color: "#FF9FFC" }}>responsive</span> and{" "}
        <span style={{ color: "#FF9FFC" }}>user-friendly</span> web interfaces.
        I write clean, maintainable code and continuously improve my skills in
        modern front-end technologies. Motivated to contribute to real projects
        and grow within a professional development environment.
      </p>

      <div className="flex gap-3 mt-6 md:mt-8">
        <div className="w-2 h-2 rounded-full my-dark-bg"></div>
        <div className="w-2 h-2 rounded-full my-pink-bg"></div>
        <div className="w-2 h-2 rounded-full my-light-bg"></div>
      </div>
    </motion.div>
  );
};

export default LeftSide;
