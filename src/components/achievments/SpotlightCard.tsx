import { IAchievement } from "@/data/achivementsData";
import React, { useRef, useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  achievement: IAchievement;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  className = "",
  spotlightColor = "rgba(255, 159, 252, 0.15)",
  achievement,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [isTextClamped, setIsTextClamped] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const { title, description, duration, instructors, platform } = achievement;

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      setIsTextClamped(element.scrollHeight > element.clientHeight);
    }
  }, [description]);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-lg border border-neutral-900 bg-black  p-6 md:p-8 ${className}`}
    >
      {/* Corner accent */}
      <div
        className="absolute -bottom-3 -right-3 w-10 h-10 md:w-12 md:h-12 border-r-4 border-b-4 rounded-br-lg opacity-60"
        style={{ borderColor: "#FF9FFC" }}
      ></div>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      
      <div className="relative z-10 min-h-[280px] flex flex-col">
        <div className="shrink-0">
          {/* Platform Badge */}
          {platform && (
            <div 
              className="inline-block relative z-20 px-3 py-1 mb-4 text-xs font-semibold rounded-full"
              style={{ backgroundColor: '#5227FF', color: '#B19EEF' }}
            >
              {platform}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {title}
          </h3>
        </div>

        {/* Description with tooltip */}
        {description && (
          <div className="relative flex-1 mb-4">
            <p 
              ref={descriptionRef}
              className="leading-relaxed line-clamp-2" 
              style={{ color: '#B19EEF' }}
              onMouseEnter={() => isTextClamped && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {description}
            </p>
            
            {/* Tooltip */}
            {showTooltip && isTextClamped && (
              <div 
                className="absolute z-400 left-0 right-0 top-full mt-2 p-4 rounded-lg shadow-2xl border max-w-md"
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  color: '#B19EEF',
                  borderColor: '#FF9FFC'
                }}
              >
                <p className="text-sm leading-relaxed">{description}</p>
              </div>
            )}
          </div>
        )}

        <div className="shrink-0 mt-auto">
          {/* Bottom Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4" style={{ color: '#B19EEF' }}>
            {duration && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {duration}
              </span>
            )}
            
            {instructors && instructors.length > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {instructors}
              </span>
            )}
          </div>

          {/* Decorative dots */}
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5227FF' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF9FFC' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B19EEF' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;