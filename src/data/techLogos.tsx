import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAngular,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiMui,
  SiNgrx,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const TechLogos = () => {
  const techLogos1 = [
    { node: <FaHtml5 />, title: "html", href: "https://react.dev" },
    {
      node: <FaCss3Alt />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <FaJsSquare />,
      title: "JavaScript",
      href: "https://www.javascript.com",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://tailwindcss.com",
    },
    {
      node: <FaSass />,
      title: "sass",
      href: "https://sass-lang.com",
    },
  ];

  const techLogos2 = [
    {
      node: <FaBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <RiTailwindCssFill />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiMui />,
      title: "MUI",
      href: "https://mui.com",
    },
    {
      node: <SiChakraui />,
      title: "Chakra UI",
      href: "https://chakra-ui.com",
    },
    {
      node: <SiShadcnui />,
      title: "shadcn ui",
      href: "https://shadcn.com",
    },
    {
      node: <FaFigma />,
      title: "Figma",
      href: "https://figma.com",
    },
  ];

  const techLogos3 = [
    {
      node: <FaReact />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <RiNextjsLine />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiAngular />,
      title: "Angular",
      href: "https://angular.io",
    },
    {
      node: <SiRedux />,
      title: "Redux",
      href: "https://redux.js.org",
    },
    {
      node: <SiReactquery />,
      title: "React Query",
      href: "https://tanstack.com/query/v4",
    },
    {
      node: <SiNgrx />,
      title: "NgRx",
      href: "https://ngrx.io",
    },
  ];

  const techLogos4 = [
    {
      node: <GrGraphQl />,
      title: "GraphQL",
      href: "https://graphql.org",
    },
    {
      node: <FaGitAlt />,
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      node: <FaGithub />,
      title: "GitHub",
      href: "https://github.com",
    },
    {
      node: <FaNodeJs />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiExpress />,
      title: "Express.js",
      href: "https://expressjs.com",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
  ];
  return { techLogos1, techLogos2, techLogos3, techLogos4 };
};

export default TechLogos;
