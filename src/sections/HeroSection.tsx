import LiquidEther from "@/components/Hero";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div
        style={{ width: "100%", height: 600, position: "relative" }}
        className="bg-black relative"
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit space-y-10 ">
          <div className="text-center space-y-5">
            <p className="capitalize text-xl md:text-2xl lg:text-3xl my-text-light">
              hello,i'm
            </p>
            <p className="capitalize text-4xl md:text-6xl lg:text-8xl my-text-light font-semibold bg-clip-text text-transparent bg-linear-to-br from-[#5227FF] to-[#FF9FFC]">
              marina eleshaa
            </p>
            <p className="capitalize my-text-pink text-lg md:text-xl lg:text-2xl">
              frontend developer
            </p>
          </div>
          <div className="flex gap-4  justify-center">
            <Link href="#" className="my-main-btn">view my work</Link>
            <Link href="#" className="my-second-btn">get in touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
