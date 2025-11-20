export interface IAchievement {
    id: number;
  title: string;
  instructors: string[];
  platform: string;
  description: string;
  duration: string;
}
const AchievementsData : IAchievement[] = [
  {
    id: 1,
    title: "Complete Web & Mobile Designer (UI / UX)",
    instructors: ["Andrei Neagoie", "Daniel Schifano"],
    platform: "Udemy",
    description: "Complete UI/UX & Web Design course focused on modern design principles, Figma, prototyping, design systems, responsive web/mobile interfaces, and converting designs to code (HTML & CSS) with hands-on real projects and portfolio building.",
    duration: "11/2025 – Present"
  },
  {
    id: 2,
    title: "ITI Intensive Program, Full-Stack MERN",
    instructors: [],
    platform: "ITI - Information Technology Institute",
    description: "Covering MERN, Next.js, Angular, and NestJS, advanced UI concepts, Git/GitHub, and real-world projects. Gained strong front-end and back-end skills through intensive hands-on training.",
    duration: "07/2025 – Present"
  },
  {
    id: 3,
    title: "PRO-FRONTEND",
    instructors: ["Muhammad Naga"],
    platform: "Codeawy - Udemy",
    description: "Hands-on training in React, Redux, and TypeScript, focusing on building responsive UIs, API integration, state management, routing, and Tailwind CSS. Includes real-world projects and clean-code best practices to prepare for professional front-end development.",
    duration: "02/2025 – 05/2025"
  },
  {
    id: 4,
    title: "FRONTEND",
    instructors: [],
    platform: "SEF Academy",
    description: "Focused on front-end fundamentals (HTML, CSS, JavaScript), with hands-on tasks and real projects. Gained strong practical skills in building responsive interfaces and applying modern UI techniques through continuous practice and project-based learning.",
    duration: "08/2024 – 01/2025"
  }
];


export default AchievementsData