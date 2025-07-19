import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "gyanitalk",
    position: "Lead FLutter Developer",
    company: "GyaniTalk",
    location: "Udaipur, Rajasthan",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Building and maintaining key modules in the GyaniTalk astrology platform across web and mobile (Next.js, Flutter, Laravel).",
      "Migrating legacy UI components to a central design system for consistent UX across platforms.",
      "Automating daily backend operations using cron jobs and backend services (Node.js + Prisma).",
    ],
    achievements: [
      "Delivered production-level features within the first month, including the astrologer dashboard and daily horoscope module.",
      "Led the UI migration from third-party themes to a custom component library using Tailwind + Next.js, improving speed and reusability.",
      "Built and maintained a scalable astrology platform with 10k+ monthly users.",
      "Integrated real-time chat and call features using Firebase and WebSockets",
      "Developed a powerful admin dashboard for astrologer onboarding, reports, and user management.",
      "Designed clean, responsive UIs using React, Next.js, and Tailwind CSS",
      "Developed secure APIs with Node.js, Nest.js, Prisma, and PostgreSQL",
      "Enabled seamless payment processing with Razorpay integration",
      "Added kundali prediction capabilities using the VedicRishi API"
    ],
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Next.js",
      "Node.js",
      "React",
      "MongoDB",
      "MySQL",
      "Vercel",
      "Prisma",
      "Git",
      "Typescript",
    ],
    companyUrl: "https://play.google.com/store/apps/details?id=com.app.gyanitalk&hl=en_IN",
    logo: "https://play-lh.googleusercontent.com/SzLfCEVB2cG_M15CJda__c7LOQBBiSc2o0PLlmhPsWQXNQY8HwnCY6O4Q0RnhMf6l-U=w240-h480-rw",
  },
  {
    id: "woodenstreet",
    position: "Flutter Developer",
    company: "WoodenStreet",
    location: "Udaipur, Rajasthan",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2025-02-01"),
    description: [
      "Enhanced the WoodenStreet furniture app using Flutter and Firebase for Android and iOS platforms.",
      "Worked with backend teams to improve product view, cart, and order tracking modules.",
      "Focused on optimizing UI components and improving cross-platform performance.",
    ],
    achievements: [
      "Developed core modules for the e-commerce app including cart and order management.",
      "Implemented Firebase-based user sync and push notification system.",
      "Improved product listing and navigation flow, enhancing user experience.",
      "Secured login and integrated version-controlled release management via Git + CI/CD.",
      "Collaborated with backend engineers to consume Node.js + MySQL APIs effectively.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Next.js",
      "Node.js",
      "MySQL",
      "Vercel",
      "Git",
    ],
    companyUrl: "https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_IN",
    logo: "https://afiles.in.webengage.com/in~~71680c29/5797fcb7-39ce-404b-8ff5-ba8f03a31197.png",
  },
  {
    id: "ipotec",
    position: "Full Stack Developer",
    company: "IPOTEC",
    location: "Udaipur, Rajasthan",
    startDate: new Date("2024-01-01"),
    endDate: "Present",
    description: [
      "Built IPOTEC, an all-in-one IPO and mutual fund tracking platform for mobile and web.",
      "Developed real-time data scraping tools and financial data APIs.",
      "Led the mobile app development in Flutter and web development using Next.js.",
    ],
    achievements: [
      "Released full-featured IPO and MF tracking mobile app using Flutter & Firebase.",
      "Built a responsive web app with Next.js, Tailwind CSS, and Node.js backend.",
      "Automated data fetching using scrapers and cron jobs for GMP/IPO listings.",
      "Added advanced filters, search, and comparison modules in the frontend.",
      "Secured authentication using Firebase Auth and handled Firestore-based real-time sync.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Next.js",
      "Node.js",
      "React",
      "MongoDB",
      "MySQL",
      "Vercel",
      "Prisma",
      "Git",
      "Typescript",
    ],
    companyUrl: "https://play.google.com/store/apps/details?id=com.ipotec&hl=en_IN",
    logo: "https://play-lh.googleusercontent.com/l6OwX4MzSFCd08hL5-jUNf7-RI74TooE4hB2VWzOTMXWIClkj2nkgWUVyFx4ec6-BVU=w240-h480-rw",
  },
  {
    id: "gradding",
    position: "Flutter Developer",
    company: "Gradding",
    location: "Udaipur, Rajasthan",
    startDate: new Date("2023-09-11"),
    endDate: new Date("2024-11-01"),
    description: [
      "Worked on a student-focused platform for studying abroad—offering course matching, test prep, and housing discovery.",
      "Developed real-time data modules and interactive components in React Native.",
      "Collaborated with backend teams to consume APIs and enhance mobile workflows.",
    ],
    achievements: [
      "Implemented dynamic college and university search with filters and AI matching.",
      "Built interactive test prep modules for IELTS, TOEFL, GMAT, etc.",
      "Developed accommodation finder with map-based listings and live updates.",
      "Integrated Firebase for notifications and authentication.",
      "Used Redux for consistent state management across cross-platform codebase.",
    ],
    skills: [
      "React Native",
      "Javascript",
      "Redux",
      "Node.js",
      "express.js",
    ],
    companyUrl: "https://www.gradding.com/",
    logo: "https://graddingteams.zendesk.com/embeddable/avatars/24960340110481",
  },
  {
    id: "my-sip",
    position: "Flutter Developer",
    company: "MySIP",
    location: "Udaipur, Rajasthan",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Developed key modules for India's first digital SIP investment platform.",
      "Built secure financial flows for SIP, lumpsum, and KYC integration using Flutter.",
      "Implemented advanced calculators and dashboards for tracking investments.",
    ],
    achievements: [
      "Launched investment features with secure payment APIs and real-time tracking.",
      "Created smart calculators for SIP, tax planning, and retirement planning.",
      "Enabled smooth onboarding via video KYC using Flutter plugins.",
      "Integrated push notifications and Firebase analytics.",
      "Maintained app with over 100K installs and optimized performance via Redux.",
    ],
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Typescript",
      "Flutter",
    ],
    companyUrl: "https://www.mysiponline.com/",
    logo: "https://play-lh.googleusercontent.com/jjlhq_zaeaUjsXcVKTGXckQKXHcc3fmA9eENjt2HjbYX0Ocah97fpOG7_kHtiOpYWv8=w240-h480-rw",
  }
];
