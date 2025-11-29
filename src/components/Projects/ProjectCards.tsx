"use client";
import { IProjectCard } from "@/types";
import React from "react";
import Stack from "../Stack";
import { motion } from "framer-motion";

const ProjectCards = () => {
  const images: IProjectCard[] = [
    {
      id: 1,
      img: "/1.jpg",
    },
    {
      id: 2,
      img: "/1.jpg",
    },
    {
      id: 3,
      img: "/1.jpg",
    },
    {
      id: 4,
      img: "/1.jpg",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" ,delay: 0.5}}
      viewport={{ once: false, amount: 0.7 }}
      className=""
    >
      <Stack cardsData={images} className="w-[250px]  h-[200px] sm:w-[400px] sm:h-[300px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px]" />
    </motion.div>
  );
};

export default ProjectCards;
