import ProjectCards from "@/components/Projects/ProjectCards";
import ProjectContent from "@/components/Projects/ProjectContent";
import ProjectsHero from "@/components/Projects/ProjectsHero";
import React from "react";

const ProjectsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-10 relative pb-2 flex flex-col   md:px-8 lg:px-0">
      <ProjectsHero />
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center">
        <ProjectContent />
        <ProjectCards />
      </div>
    </div>
  );
};

export default ProjectsSection;
