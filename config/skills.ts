import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Flutter",
    description: "UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Dart",
    description: "Programming language optimized for building mobile, desktop, server, and web applications.",
    rating: 5,
    icon: Icons.dart,
  },
  {
    name: "Firebase",
    description: "Platform developed by Google for building and scaling mobile and web applications with backend services like auth and database.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "Next.js",
    description: "React framework for building fast, scalable, and full-stack web apps with file-based routing and server-side rendering.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description: "JavaScript library for building interactive and component-based user interfaces efficiently.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine, allowing server-side development with JS.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MySQL",
    description: "Popular open-source relational database management system based on SQL.",
    rating: 2,
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description: "NoSQL database for storing JSON-like documents with dynamic schemas.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Express.js",
    description: "Fast and minimalist web framework for Node.js, used to build APIs and web apps.",
    rating: 5,
    icon: Icons.express,
  },

  {
    name: "TypeScript",
    description: "Superset of JavaScript that adds static typing to improve development speed and reduce bugs.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description: "High-level, versatile programming language used for web development on client and server side.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML5",
    description: "Markup language used to structure and present content on the web.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description: "Style sheet language used for describing the look and formatting of a document written in HTML.",
    rating: 4,
    icon: Icons.css3,
  },

  {
    name: "Material UI",
    description: "Popular React component library that implements Google's Material Design system.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description: "Comprehensive cloud platform offering compute, storage, and deployment services at scale.",
    rating: 3,
    icon: Icons.amazonaws,
  },

  {
    name: "Vercel",
    description: "Frontend cloud platform optimized for Next.js and serverless deployments.",
    rating: 5,
    icon: Icons.vercel,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
