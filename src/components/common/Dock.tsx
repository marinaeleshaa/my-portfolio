"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";
import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  VscAccount,
  VscArchive,
  VscHome,
  VscSettingsGear,
} from "react-icons/vsc";
import { FaLaptopCode, FaTasks } from "react-icons/fa";

export type DockItemData = {
  icon: string; // string not JSX (important for SSR)
  label: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  magnification: number;
  baseItemSize: number;
};

const iconMap: Record<string, React.ReactNode> = {
  home: <VscHome size={18} />,
  about: <VscAccount size={18} />,
  achievements: <FaTasks size={18} />,
  technology: <FaLaptopCode size={18} />,
  projects: <VscArchive size={18} />,
};

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
    >
      {Children.map(children, (child) =>
        React.isValidElement(child)
          ? cloneElement(child as any, { isHovered })
          : child
      )}
    </motion.div>
  );
}

function DockLabel({ children, isHovered }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsub = isHovered.on("change", (v) => {
      setIsVisible(v === 1);
    });
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          className="absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children }: any) {
  return <div className="flex items-center justify-center">{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  const enhancedItems = items.map((item) => {
    let onClick: (() => void) | null = null;

    switch (item.label) {
      case "Home":
        onClick = () => {
          const hero = document.getElementById("heroSection");
          hero?.scrollIntoView({ behavior: "smooth" });
        };
        break;
      case "About Me":
        onClick = () => {
          const about = document.getElementById("aboutSection");
          about?.scrollIntoView({ behavior: "smooth" });
        };
        break;
      case "Achievements":
        onClick = () => {
          const achievements = document.getElementById("achievementsSection");
          achievements?.scrollIntoView({ behavior: "smooth" });
        };
        break;
      case "Technology":
        onClick = () => {
          const technology = document.getElementById("technologySection");
          technology?.scrollIntoView({ behavior: "smooth" });
        };
        break;
      case "Projects":
        onClick = () => {
          const projects = document.getElementById("projectsSection");
          projects?.scrollIntoView({ behavior: "smooth" });
        };
        break;
      default:
        onClick = null;
    }

    return {
      ...item,
      icon: iconMap[item.icon],
      onClick,
    };
  });

  return (
    <motion.div
      style={{ height }}
      className="mx-2 flex max-w-full items-center "
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-neutral-700 backdrop-blur-3xl bg-white/10 z-999 border-2 pb-2 px-4 `}
        style={{ height: panelHeight }}
      >
        {enhancedItems.map((item, idx) => (
          <DockItem
            key={idx}
            onClick={item.onClick}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            className="cursor-pointer backdrop-blur-2xl bg-white/20"
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
