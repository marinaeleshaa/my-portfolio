"use client";
import { motion } from "framer-motion";
import { RootState } from "@/redux/Store";
import { useSelector } from "react-redux";
import Animate from "../common/Animate";

const ProjectContent = () => {
  const { activeProject } = useSelector((state: RootState) => state.project);

  return (
    <Animate
      className="w-full md:max-w-xl lg:max-w-2xl relative"
    >
      {/* Decorative accent bar */}
      <div className="flex gap-2 mb-6">
        <div className="w-12 h-1 rounded-full bg-linear-to-r from-[#FF9FFC] to-[#B19EEF]"></div>
        <div className="w-4 h-1 rounded-full bg-[#B19EEF]/50"></div>
      </div>

      {/* Header Section */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold capitalize text-white leading-tight">
          {activeProject.title}
        </h2>

        {/* Description cards */}
        <div className="space-y-3">
          {activeProject.description.main && (
            <div className="pl-4 border-l-2 border-[#FF9FFC]/40">
              <p className="text-base  md:text-lg text-[#B19EEF] leading-relaxed">
                {activeProject.description.main}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Technical Details Section */}
      <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF9FFC]"></div>
          Technical Highlights
        </h3>

        <ul className="space-y-3">
          {activeProject.description.technical.map((item, index) => (
            <li
              key={activeProject.id + index}
              className="flex gap-3 text-base sm:text- text-[#B19EEF]"
            >
              <span className="text-[#FF9FFC] mt-1.5 shrink-0">→</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <a
          href={activeProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF9FFC] to-[#B19EEF] rounded-xl hover:shadow-2xl hover:shadow-[#FF9FFC]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group"
        >
          <span>
            {activeProject.deployed ? "Visit Live Project" : "View Source Code"}
          </span>

          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* Decorative Circles */}
        <div className="flex gap-3">
          <div className="w-3 h-3 rounded-full my-dark-bg shadow-lg"></div>
          <div className="w-3 h-3 rounded-full my-pink-bg shadow-lg shadow-[#FF9FFC]/50"></div>
          <div className="w-3 h-3 rounded-full my-light-bg shadow-lg"></div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="mt-8 flex gap-2 opacity-50">
        <div className="w-20 h-0.5 rounded-full bg-gradient-to-r from-transparent to-[#B19EEF]"></div>
        <div className="w-2 h-0.5 rounded-full bg-[#FF9FFC]"></div>
      </div>
    </Animate>
  );
};

export default ProjectContent;
