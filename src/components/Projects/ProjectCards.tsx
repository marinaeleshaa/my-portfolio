"use client";
import { IProjectCard } from "@/types";
import React from "react";
import Stack from "../Stack";
import { motion } from "framer-motion";

const ProjectCards = () => {
  const images: IProjectCard[] = [
    {
      id: 2,
      img: "/projects/1.jpg",
    },
    {
      id: 3,
      img: "/projects/2.jpg",
    },
    {
      id: 4,
      img: "/projects/3.jpg",
    },
    {
      id: 1,
      img: "/projects/eduverse.png",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col items-center justify-center gap-5"
    >
      <Stack
        cardsData={images}
        randomRotation={false}
        className="w-[250px]  h-[200px]  sm:w-[400px] sm:h-[300px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[300px]"
      />
      <p className="text-sm capitalize text-[#b19eef] animate-bounce">swipe to see more</p>
    </motion.div>
  );
};

export default ProjectCards;
