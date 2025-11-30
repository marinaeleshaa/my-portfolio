"use client";
import { RootState } from "@/redux/Store";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ProjectContent = () => {
  const { activeProject } = useSelector((state: RootState) => state.project);
  //   console.log(activeProject, active);
  return (
    <motion.div
      className="w-full md:max-w-xl lg:max-w-2xl relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* Decorative Corners */}
      {/* <div
        className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-tl-lg border-l-4 border-t-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>

      <div
        className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-br-lg border-r-4 border-b-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div> */}

      {/* <div
        className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-tr-lg border-r-4 border-t-4 opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div> */}

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold   capitalize text-white">
        {activeProject.title}
      </h2>

      {/* Subtitle */}
      <h3
        className="text-sm  sm:text-base md:text-lg text-[#B19EEF] max-w-xl mb-4 md:mb-6"
        style={{ color: "#B19EEF" }}
      >
        {activeProject.subtitle}
      </h3>

      {/* Paragraph */}
      <ul className="ml-5 leading-relaxed list-disc text-base sm:text-lg text-[#B19EEF]">
        {activeProject.description.map((item, index) => (
          <li key={activeProject.id + index} className="marker:text-[#ff9ffc]">
            {item}
          </li>
        ))}
      </ul>

      {/* link */}
      <a
        href={activeProject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm sm:text-base font-medium text-white bg-linear-to-r from-[#FF9FFC] to-[#B19EEF] rounded-lg hover:shadow-lg hover:shadow-[#FF9FFC]/30 transition-all duration-300 hover:scale-105 group"
      >
        {activeProject.deployed ? " Visit Project" : "Show Project Code"}

        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      {/* Small Decorative Circles */}
      <div className="flex gap-3 mt-6 md:mt-8">
        <div className="w-2 h-2 rounded-full my-dark-bg"></div>
        <div className="w-2 h-2 rounded-full my-pink-bg"></div>
        <div className="w-2 h-2 rounded-full my-light-bg"></div>
      </div>
    </motion.div>
  );
};

export default ProjectContent;
