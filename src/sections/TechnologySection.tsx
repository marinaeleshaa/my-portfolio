import LeftSide from "@/components/technologies/leftSide";
import RightSide from "@/components/technologies/RightSide";
import React from "react";

const TechnologySection = () => {
  
  return (
    <div className=" relative  flex items-center justify-between gap-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-0">
      <RightSide/>
      <div className="flex justify-end  w-[80%]">

      <LeftSide/>
      </div>
    </div>
  );
};

export default TechnologySection;
