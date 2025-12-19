// export const projectData = [
//   {
//     id: 0,
//     title: "El Beshara Studio",
//     subtitle:
//       "Frontend Project | Next.js, React, TypeScript, Redux Toolkit,Tailwind CSS",
//     description: [
//       "Built a production-ready multi-language website using Next.js (App Router) and TypeScript, implementing internationalization (i18n) using next-intl, supporting Arabic and English.",
//       "Developed a full admin dashboard to manage images, videos, reels, promotions, and studio data.",
//       "Integrated Cloudinary for image and video uploads, optimization, and transformations.",
//       "Managed complex client-side state using Redux Toolkit, ensuring scalable and maintainable data flow.",
//       "Debugged and resolved SSR, hydration, and performance issues in a real-world Next.js application.",
//     ],
//     link: "https://el-beshara-studio.vercel.app/",
//     deployed: true,
//   },
//   {
//     id: 1,
//     title: "Eduverse",
//     subtitle: " E-Learning Platform (Deployed) — Angular, Node.js, Express",
//     description: [
//       "Course pages, dashboard, and enrollment system.",
//       "Secure authentication & protected routes.",
//       "API integration, state management, and reusable components",
//       "Responsive, pixel-perfect Tailwind UI, and smooth animations.",
//       "Team collaboration via Git/GitHub.",
//     ],
//     link: "https://eduverse-ochre.vercel.app/home",
//     deployed: true,
//   },
//   {
//     id: 2,
//     title: "Travella",
//     subtitle:
//       "Travel Platform to explore destinations with Next.js ,Tailwind CSS",
//     description: [
//       "Modern responsive UI & Reusable component structure.",
//       "Next.js API routes (light backend) & Full CRUD for destinations & bookings.",
//       "Tailwind CSS for styling.",
//       "Smooth animations, and responsive design.",
//     ],
//     link: "https://github.com/marinaeleshaa/travella-Next.js",
//     deployed: false,
//   },
//   {
//     id: 3,
//     title: "BookStore",
//     subtitle: " Responsive Bookstore  — React, Node.js, Express",
//     description: [
//       "Route-based dashboard with user authentication.",
//       "API integration, state management, and reusable components",
//       "Responsive, pixel-perfect Tailwind UI, and smooth animations.",
//       "CRUD operations for books, authors, and genres with ownership checks",
//       "Users browse books",
//       "owners manage their own listings",
//       "admins have full control",
//     ],
//     link: "https://github.com/marinaeleshaa/Full-Stack-Book-Store-Project.git",
//     deployed: false,
//   },
//   {
//     id: 4,
//     title: "Memory Game",
//     subtitle:
//       "A zoo-themed memory game with an attractive, playful UI for an enjoyable matching experience.",
//     description: [
//       "Cute zoo style cards with sound effects.",
//       "smooth matching game with a fun and engaging UI.",
//       "Responsive, pixel-perfect Tailwind UI, and smooth animations.",
//       "Game logic, state management, and reusable components.",
//     ],
//     link: "https://github.com/marinaeleshaa/MemoryGame",
//     deployed: false,
//   },
//   {
//     id: 5,
//     title: "Todo",
//     subtitle:
//       "A fullstack todo app with an attractive, playful UI for an enjoyable experience with Next.js",
//     description: [
//       "Modern responsive UI & Reusable component structure.",
//       "Next.js API routes (light backend) & Full CRUD for destinations & bookings.",
//       "Tailwind CSS for styling.",
//       "Smooth animations, and responsive design.",
//       "Dark mode and light mode.",
//       "protected routes.",
//     ],
//     link: "https://github.com/marinaeleshaa/fullstack-todo.git",
//     deployed: false,
//   },
//   {
//     id: 6,
//     title: "Recipe",
//     subtitle:
//       "responsive recipe app with an attractive, playful UI for an enjoyable experience with React",
//     description: [
//       "Modern responsive UI & Reusable component structure.",
//       "Detail page for each recipe.",
//       "pagination for easy navigation.",
//     ],
//     link: "https://github.com/marinaeleshaa/Recipe.git",
//     deployed: false,
//   },
// ];

export const projectData = [
  {
    id: 0,
    title: "El Beshara Studio",
    subtitle:
      "Frontend Project (Production) | Next.js, React, TypeScript, Redux Toolkit, Tailwind CSS",
    description: {
      main: "A multi-language website for a music studio with galleries, reels, and promotions.",
      technical: [
        "Built with Next.js & TypeScript, supporting i18n (Arabic & English).",
        "Full admin dashboard for managing media and studio data.",
        "Cloudinary integration & Redux Toolkit for scalable state management.",
      ],
    },
    link: "https://el-beshara-studio.vercel.app/",
    deployed: true,
  },
  {
    id: 1,
    title: "Eduverse",
    subtitle: "E-Learning Platform (Deployed) — Angular, Node.js, Express",
    description: {
      main: "An e-learning platform for browsing courses, enrolling, and tracking progress.",
      technical: [
        "Course pages, dashboard, and enrollment system with secure authentication.",
        "API integration and reusable components.",
        "Responsive Tailwind UI with smooth animations.",
      ],
    },
    link: "https://eduverse-ochre.vercel.app/home",
    deployed: true,
  },
  {
    id: 2,
    title: "Travella",
    subtitle: "Travel Platform to explore destinations with Next.js, Tailwind CSS",
    description: {
      main: "A platform to explore destinations and manage bookings easily.",
      technical: [
        "Responsive UI with reusable components.",
        "Next.js API routes & CRUD for destinations/bookings.",
        "Tailwind CSS styling with smooth animations.",
      ],
    },
    link: "https://github.com/marinaeleshaa/travella-Next.js",
    deployed: false,
  },
  {
    id: 3,
    title: "BookStore",
    subtitle: "Responsive Bookstore — React, Node.js, Express",
    description: {
      main: "A responsive bookstore platform with user, owner, and admin roles.",
      technical: [
        "Dashboard with authentication & API integration.",
        "State management & reusable components.",
        "CRUD operations for books, authors, and genres.",
      ],
    },
    link: "https://github.com/marinaeleshaa/Full-Stack-Book-Store-Project.git",
    deployed: false,
  },
  {
    id: 4,
    title: "Memory Game",
    subtitle: "Zoo-themed memory game with a playful UI",
    description: {
      main: "A fun matching game with zoo-themed cards and sound effects.",
      technical: [
        "Responsive UI with animations.",
        "Game logic & state management.",
        "Reusable components for game cards.",
      ],
    },
    link: "https://github.com/marinaeleshaa/MemoryGame",
    deployed: false,
  },
  {
    id: 5,
    title: "Todo",
    subtitle:
      "Fullstack todo app with modern UI and dark/light mode (Next.js)",
    description: {
      main: "A todo app for managing tasks with dark/light mode and protected routes.",
      technical: [
        "Responsive UI & reusable components.",
        "Next.js API routes & full CRUD for tasks.",
        "Tailwind CSS styling with smooth animations.",
      ],
    },
    link: "https://github.com/marinaeleshaa/fullstack-todo.git",
    deployed: false,
  },
  {
    id: 6,
    title: "Recipe",
    subtitle: "Responsive recipe app with React",
    description: {
      main: "A recipe app for exploring recipes with easy navigation.",
      technical: [
        "Responsive UI & reusable components.",
        "Detail pages for each recipe.",
        "Pagination for easy navigation.",
      ],
    },
    link: "https://github.com/marinaeleshaa/Recipe.git",
    deployed: false,
  },
];
