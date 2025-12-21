"use client";
import { IProjectCard } from "@/types";
import React from "react";
import Stack from "../Stack";
import { motion } from "framer-motion";
import Animate from "../common/Animate";

const ProjectCards = () => {
  const images: IProjectCard[] = [
    {
      id: 8,
      img: "/projects/recipe.png",
    },
    {
      id: 7,
      img: "/projects/todo.png",
    },
    {
      id: 6,
      img: "/projects/memoryGame.png",
    },
    {
      id: 5,
      img: "/projects/booksy.png",
    },
    {
      id: 4,
      img: "/projects/travella.png",
    },
    {
      id: 3,
      img: "/projects/eduverse.png",
    },
    {
      id: 2,
      img: "/projects/studio.png",
    },
    {
      id: 1,
      img: "/projects/ecosphere.png",
    },
  ];
  return (
    <Animate
      delay={0.5}
      className="flex flex-col items-center justify-center gap-5"
    >
      <Stack
        cardsData={images}
        randomRotation={false}
        className="w-62.5  h-50  sm:w-100 sm:h-75 md:w-87.5 md:h-62.5 lg:w-125 lg:h-75"
      />
      <p className="text-sm capitalize text-[#b19eef] animate-bounce">
        swipe to see more
      </p>
    </Animate>
  );
};

export default ProjectCards;
