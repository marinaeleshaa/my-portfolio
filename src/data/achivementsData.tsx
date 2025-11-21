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
    description: "UI/UX training covering modern design principles, Figma workflows, prototyping, and building clean responsive layouts.",
    duration: "11/2025 – Present"
  },
  {
    id: 2,
    title: "ITI Intensive Program, Full-Stack MERN",
    instructors: [],
    platform: "ITI - Information Technology Institute",
    description: "Intensive full-stack training in MERN, Next.js, Angular, and Git with practical projects to build strong development skills.",
    duration: "07/2025 – Present"
  },
  {
    id: 3,
    title: "PRO-FRONTEND",
    instructors: ["Muhammad Naga"],
    platform: "Codeawy - Udemy",
    description: "Practical front-end training focused on React, Redux, TypeScript, APIs, routing, and clean UI development with real projects.",
    duration: "02/2025 – 05/2025"
  },
  {
    id: 4,
    title: "FRONTEND",
    instructors: [],
    platform: "SEF Academy",
    description: "Front-end fundamentals program covering HTML, CSS, JavaScript, and responsive design through tasks and real hands-on projects.",
    duration: "08/2024 – 01/2025"
  }
];


export default AchievementsData