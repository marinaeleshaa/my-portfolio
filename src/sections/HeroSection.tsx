"use client";
import LiquidEther from "@/components/Hero";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdMailOutline } from "react-icons/md";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "marina eleshaa";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "Next.js Enthusiast",
    "Angular Enthusiast",
    "UI/UX Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div>
      <div className="bg-black relative overflow-hidden w-full h-screen ">
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


        {/* Main Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit space-y-12 min-w-[80%] mx-auto">
          <div className="text-center space-y-6">
            {/* Greeting with fade in */}
            <div className="overflow-hidden">
              <p className="capitalize text-xl md:text-2xl lg:text-3xl my-text-light tracking-wider animate-fade-slide-down">
                <span className="inline-block animate-wave"></span> Hello,
                I&apos;m
              </p>
            </div>

            {/* Name with typing effect and glow */}
            <div className="relative">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl bg-linear-to-r from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] opacity-30 scale-110 animate-pulse-slow" />

              <h1 className="relative capitalize whitespace-nowrap text-4xl md:text-6xl lg:text-8xl  font-bold bg-clip-text text-transparent bg-linear-to-br from-[#5227FF] via-[#FF9FFC] to-[#B19EEF] animate-fade-in min-h-[1.2em]">
                {displayText}
                {showCursor && (
                  <span className="inline-block w-1 md:w-1.5 h-[0.85em] bg-linear-to-b from-[#5227FF] to-[#FF9FFC] ml-1 md:ml-2 animate-blink align-middle" />
                )}
              </h1>
            </div>

            {/* Rotating roles */}
            <div className="h-16 md:h-20 flex items-center justify-center relative overflow-hidden">
              <div className="relative">
                {roles.map((role, index) => (
                  <p
                    key={role}
                    className={`capitalize my-text-light text-lg md:text-xl lg:text-2xl font-medium absolute left-1/2 -translate-x-1/2 transition-all duration-700 whitespace-nowrap ${
                      currentRole === index
                        ? "opacity-100 translate-y-0"
                        : index < currentRole
                        ? "opacity-0 -translate-y-8"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <span className="text-[#5227FF]">&lt;</span>
                    {role}
                    <span className="text-[#5227FF]">/&gt;</span>
                  </p>
                ))}
              </div>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-linear-to-r from-transparent via-[#FF9FFC] to-transparent animate-shimmer" />
            </div>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center  animate-fade-in-up">
            <Link
              href="#projectsSection"
              className="my-main-btn group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2 ">
                View My Work{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#FF9FFC] to-[#B19EEF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link
              href="#contactSection"
              className="my-second-btn group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch{" "}
                <span className="inline-block transition-transform group-hover:scale-110">
                  <MdMailOutline />
                </span>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#5227FF]/10 to-[#FF9FFC]/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            </Link>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-[#5227FF] rounded-full animate-float-particle" />
        <div className="absolute top-[35%] right-[15%] w-1.5 h-1.5 bg-[#FF9FFC] rounded-full animate-float-particle-delayed" />
        <div className="absolute bottom-[25%] left-[18%] w-2 h-2 bg-[#B19EEF] rounded-full animate-float-particle-slow" />
        <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 bg-[#5227FF] rounded-full animate-float-particle" />

        <style>{`
          @keyframes fade-slide-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 0.4;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(10px);
            }
            to {
              opacity: 0.4;
              transform: translateX(0);
            }
          }
          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
          @keyframes wave {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(20deg);
            }
            75% {
              transform: rotate(-15deg);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-particle {
            0%,
            100% {
              transform: translate(0, 0);
              opacity: 0.4;
            }
            50% {
              transform: translate(15px, -25px);
              opacity: 1;
            }
          }
          @keyframes float-particle-delayed {
            0%,
            100% {
              transform: translate(0, 0);
              opacity: 0.3;
            }
            50% {
              transform: translate(-20px, -30px);
              opacity: 0.8;
            }
          }
          @keyframes float-particle-slow {
            0%,
            100% {
              transform: translate(0, 0);
              opacity: 0.5;
            }
            50% {
              transform: translate(10px, -15px);
              opacity: 1;
            }
          }
          @keyframes shimmer {
            0% {
              transform: translateX(-100%) scaleX(0);
            }
            50% {
              transform: translateX(0) scaleX(1);
            }
            100% {
              transform: translateX(100%) scaleX(0);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
          }

          .animate-fade-slide-down {
            animation: fade-slide-down 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out 0.5s forwards;
            opacity: 0;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out 2.5s forwards;
            opacity: 0;
          }
          .animate-fade-in-delayed {
            animation: fade-in 0.8s ease-out 3s forwards;
            opacity: 0;
          }
          .animate-fade-in-left {
            animation: fade-in-left 0.8s ease-out 0.8s forwards;
          }
          .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out 0.8s forwards;
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          .animate-wave {
            animation: wave 2s ease-in-out infinite;
            display: inline-block;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-particle {
            animation: float-particle 5s ease-in-out infinite;
          }
          .animate-float-particle-delayed {
            animation: float-particle-delayed 6s ease-in-out infinite;
            animation-delay: 1s;
          }
          .animate-float-particle-slow {
            animation: float-particle-slow 7s ease-in-out infinite;
            animation-delay: 2s;
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSection;
