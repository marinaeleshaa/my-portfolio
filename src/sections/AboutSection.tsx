import AnimatedComputer from "@/components/about/AnimatedComputer";
import LeftSide from "@/components/about/LeftSide";
const AboutSection = () => {
  return (
    <div className="bg-black  flex justify-center ">
      {/* Main wrapper */}
      <div className="w-full px-4 md:px-8 lg:px-0  max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-between ">
        <LeftSide />

        {/* Right Animation */}
        <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
          <AnimatedComputer />
        </div>
       
      </div>
    </div>
  );
};

export default AboutSection;
