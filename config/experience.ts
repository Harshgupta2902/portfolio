import { ValidCategory, ValidExpType, ValidSkills } from "./constants";



interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  techStack: ValidSkills[];
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  imgArr: string[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "gyanitalk",
    companyName: "GyaniTalk",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Mobile Dev", "Frontend", "Backend", "UI/UX"],
    shortDescription: "अच्छे भविष्य का सच्चा सारथी",
    websiteLink: "https://play.google.com/store/apps/details?id=com.app.gyanitalk&hl=en_IN",
    techStack: [
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
    companyLogoImg: "https://play-lh.googleusercontent.com/QzkoQtuOCk-Yb3Qav_adTsp2ylCEPqzbpGZ76yBwwoBQRWjLtNPyWXinp0lPMIEY4v3C=w416-h235-rw",
    imgArr: [
      "/gtalk/g-1.webp",
      "/gtalk/g-2.webp",
      "/gtalk/g-3.webp",
      "/gtalk/g-4.webp",
      "/gtalk/g-5.webp",
      "/gtalk/g-6.webp",
      "/gtalk/g-7.webp",
      "/gtalk/g-8.webp",
    ],
    descriptionDetails: {
      paragraphs: [
        "At GyaniTalk, I helped build and scale an AI-powered astrology platform serving thousands of daily users. My focus was on creating a smooth user experience and a robust backend for real-time features. 🔮💻",
        "I collaborated with design and product teams to deliver clean, responsive UIs using Next.js, React, and Tailwind CSS. Features included live chats, calls, and kundali analysis. ✨📱",
        "The backend was developed using Node.js, Nest.js, Prisma, and PostgreSQL. I also integrated Razorpay for payments and Firebase for analytics and messaging. 🚀🔐",
        "GyaniTalk's success in delivering personalized astrology through modern tech has been a defining part of my journey. 🌟👨‍💻"
      ],
      bullets: [
        "🌐 Built and maintained a scalable astrology platform (10k+ users/month).",
        "📲 Integrated real-time chat & call using Firebase & WebSockets.",
        "📊 Developed an admin dashboard for astrologer and user management.",
        "🛠️ Used React, Next.js, Tailwind CSS for intuitive UI/UX.",
        "🧠 Built secure APIs with Node.js, Nest.js, Prisma & PostgreSQL.",
        "💳 Enabled smooth payments via Razorpay integration.",
        "🔍 Added kundali predictions using VedicRishi API.",
      ],
    }

  },
  {
    id: "woodenstreet",
    companyName: "WoodenStreet",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Mobile Dev", "Frontend", "Backend", "UI/UX"],
    shortDescription:
      "Furniture Brand - furniture at the best prices",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_IN",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Next.js",
      "Node.js",
      "MySQL",
      "Vercel",
      "Git",
    ],
    companyLogoImg: "https://images.woodenstreet.de/wsnew2024/static-webmedia/images/cover.gif",
    imgArr: [
      "/wooden/w-1.webp",
      "/wooden/w-2.webp",
      "/wooden/w-3.webp",
      "/wooden/w-4.webp",
      "/wooden/w-5.webp",
      "/wooden/w-6.webp",
    ],
    descriptionDetails: {
      paragraphs: [
        "At WoodenStreet, I worked as a Flutter Developer on a high-scale e-commerce application focused on providing a seamless furniture shopping experience. My primary role was to enhance app performance and optimize UI components for smoother navigation. 🛋️📱",
        "I collaborated with the backend and design teams to implement key features like personalized product views, order tracking, and wishlist management. Using Flutter and Firebase, I ensured real-time updates and a responsive interface across Android and iOS. 🔥📦",
        "My work also included improving API integration flows, managing authentication, and deploying updates with version control through Git and CI/CD workflows. 🚀🔧",
        "This experience deepened my expertise in mobile architecture, user-centric design, and cross-platform deployment at scale. 👨‍💻📊",
      ],
      bullets: [
        "📱 Developed and optimized key modules of the WoodenStreet app using Flutter and Dart.",
        "🛒 Integrated product view, cart, and order tracking features with Firebase backend.",
        "📦 Enhanced UI/UX performance, ensuring seamless experience across platforms.",
        "🔐 Implemented secure login, user data sync, and Firebase push notifications.",
        "🔧 Collaborated with backend teams using Node.js & MySQL APIs for data handling.",
        "🚀 Managed app versions and updates using Git and CI/CD best practices.",
      ],
    },

  },
  {
    id: "ipotec",
    companyName: "IpoTec",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "Mobile Dev", "Frontend", "Backend", "UI/UX"],
    shortDescription: "All-in-One Fintech Platform",
    websiteLink: "https://play.google.com/store/apps/details?id=com.ipotec&hl=en_IN",
    techStack: ["Flutter",
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
      "Typescript"],
    companyLogoImg: "https://play-lh.googleusercontent.com/OfRyja3s146KPKJm8d6yHQ1D6zRVHlohNnUAuGUImANkmOwHsi9fFf4JQluUe0wDXWQ=w416-h235-rw",
    imgArr: [
      "/ipo/i-1.webp",
      "/ipo/i-2.webp",
      "/ipo/i-3.webp",
      "/ipo/i-4.webp",
      "/ipo/i-5.webp",
    ],
    descriptionDetails: {
      paragraphs: [
        "At IPOTEC, I built a dynamic platform focused on IPO and mutual fund tracking—offered as a web app (IPO Live GMP) and a mobile app. The aim was to provide users with accurate, real-time financial data through a clean, intuitive experience. 📈📱",
        "The web app was developed using Next.js and Node.js with Tailwind CSS, while the mobile application was built in Flutter and powered by Firebase for backend services and push notifications. 🔧🌐",
        "I implemented data scraping mechanisms to automatically gather IPO and mutual fund data from various reliable sources, ensuring up-to-date listings and GMP info. 🧩📊",
        "Delivering fast, insightful financial content to users across platforms has been one of the most rewarding parts of building IPOTEC. 🚀💼"
      ],
      bullets: [
        "🌐 Developed IPOTEC as a cross-platform IPO/mutual fund tracker (Web + App).",
        "📱 Built a responsive web app using Next.js, Node.js, and Tailwind CSS.",
        "📲 Created the mobile app in Flutter with Firebase for real-time sync and notifications.",
        "🧹 Scraped live data for IPO listings, GMP, and mutual funds from trusted sources.",
        "📊 Designed clean UI/UX with filters, search, and detailed company views.",
        "🔐 Integrated Firebase Auth and Firestore for secure data handling.",
        "📦 Delivered a complete real-time tracking solution for investors and enthusiasts."
      ],
    }
  },
  {
    id: "gradding",
    companyName: "Gradding",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Mobile Dev", "Frontend", "Backend", "UI/UX"],
    shortDescription:
      "Study Abroad University Finder",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    companyLogoImg: "/GraddingBanner.png",
    imgArr: [
      "/gd/gd-1.webp",
      "/gd/gd-2.webp",
      "/gd/gd-3.webp",
      "/gd/gd-4.webp",
      "/gd/gd-5.webp",
      "/gd/gd-6.webp",
    ],
    descriptionDetails: {
      paragraphs: [
        "At Gradding.com, I served as a Flutter developer, building mobile apps that empower students in their study-abroad journey—from test preparation to university, college, and accommodation discovery. The platform supports over 20,000 students, offers AI-driven course matching, and provides comprehensive services like test prep, visa support, and housing assistance.",
        "I led the development of key features including university and college finders, real-time test prep modules (IELTS, TOEFL, GMAT, SAT), and accommodation listings. By collaborating with backend teams, I integrated Node.js/Express APIs to ensure smooth data retrieval and sync. Clean UI/UX and cross-platform performance were prioritized using Redux and React Native.",
        "Through real-time data flows and Firebase-powered notifications, the app delivers live updates on test schedules, application statuses, and featured accommodations. I also optimized user authentication, state management, and seamless navigation across Android and iOS. 🧠📲",
        "This project strengthened my skills in full-stack mobile development, user-centric design, API integration, and scalable system delivery for a high-impact ed-tech platform. 🚀"
      ],
      bullets: [
        "🎯 Implemented university & college search with filterable results.",
        "📘 Built interactive test prep modules (IELTS, GRE, SAT, TOEFL) with real-time progress tracking.",
        "🏠 Developed accommodation finder with location-based listings and Firebase-powered updates.",
        "🔗 Integrated Node.js/Express backend for robust API communication and data flow.",
        "🔐 Implemented secure user authentication and live notifications using Firebase.",
        "📱 Ensured cross-platform app stability and optimized UI/UX responsiveness.",
        "🔧 Collaborated in agile sprints, contributing to code reviews, CI/CD, and app deployments.",
      ],
    }
  },

  {
    id: "my-sip",
    companyName: "MySIP",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Mobile Dev", "Frontend", "Backend", "UI/UX"],
    shortDescription: "SIP Investment Platform.",
    websiteLink: "https://www.mysiponline.com/",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "Flutter"],
    companyLogoImg: "https://play-lh.googleusercontent.com/rvobt18fxbVYIBbSHh7PtRa0JfhNPD3D3YYaIxLvowcQ7KLs9Tl3dPqjJW6kpAfBrBs=w416-h235-rw",
    imgArr: [
      "/sip/sip1.webp",
      "/sip/sip2.webp",
      "/sip/sip3.webp",
      "/sip/sip4.webp",
      "/sip/sip5.webp",
      "/sip/sip6.webp",
      "/sip/sip7.webp",
      "/sip/sip8.webp",
    ],
    descriptionDetails: {
      paragraphs: [
        "At MySIPonline—India’s first digital SIP investment platform—I served as a Flutter Developer, contributing to both Android and iOS apps with 100K+ downloads. The platform simplifies mutual fund investments through features like SIP initiation, calculators, KYC, and portfolio tracking.",
        "I spearheaded the development of key mobile modules, including interactive SIP & lumpsum investment flows, video KYC onboarding, and real-time portfolio dashboards. I collaborated with backend teams to integrate secure APIs built on Node.js, ensuring smooth data sync and bank-level transaction security.",
        "To improve user experience, I implemented features like smart calculators, live investment tracking, and push notifications. Leveraging Redux for state management and Flutter’s performance capabilities, I ensured consistent UI behavior across platforms.",
        "Through agile development and CI/CD workflows, I optimized app performance, reduced crash rates, and enhanced overall user satisfaction for a mission-critical fintech service. This role honed my strengths in cross-platform development, UI/UX consistency, and secure financial application delivery. 🚀"
      ],
      bullets: [
        "📈 Built SIP & lump-sum investment flows with secure payment integrations.",
        "🎥 Integrated video KYC onboarding to streamline user registration.",
        "📊 Developed real-time portfolio dashboard with fund tracking.",
        "🛠️ Implemented smart SIP calculators (SIP, tax, retirement) using Flutter & Redux.",
        "🔔 Enabled push notifications for transaction status and reminders.",
        "🔐 Consumed secure Node.js APIs, ensuring bank-grade encryption.",
        "📱 Ensured app stability across Android/iOS—100K+ installs.",
        "⚙️ Collaborated in agile sprints with CI/CD processes and code reviews."
      ],
    }
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
