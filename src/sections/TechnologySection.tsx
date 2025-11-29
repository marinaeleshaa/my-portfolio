import LeftSide from "@/components/technologies/leftSide";
import RightSide from "@/components/technologies/RightSide";
import React from "react";

const TechnologySection = () => {
  return (
    <div className=" relative  flex flex-col justify-center md:flex-row items-center md:justify-between gap-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-2">
      <RightSide />
      <div className="flex justify-center md:justify-end  w-[80%]">
        <LeftSide />
      </div>
    </div>
  );
};

export default TechnologySection;
