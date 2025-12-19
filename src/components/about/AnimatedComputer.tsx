"use client";
import dynamic from "next/dynamic";
import animationData from "@/animations/Programming Computer.json";
import Animate from "../common/Animate";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimatedComputer = () => {
  return (
    <Animate
      delay={0.5}
      className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] mt-0 xl:mt-16 md:-mr-16 lg:-mr-24"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="w-full h-auto"
        style={{ transform: "scale(1.2)", transformOrigin: "center" }}
      />
    </Animate>
  );
};

export default AnimatedComputer;
