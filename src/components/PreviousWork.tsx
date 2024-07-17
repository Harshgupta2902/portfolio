"use client"

import { useState } from "react";

const projects = [
  {
    title: 'Gradding App',
    description: 'Gradding is a Flutter-based mobile application designed to assist students who aspire to study abroad. It provides comprehensive guidance and resources, making the process smoother and more organized',
    imageUrl: 'https://www.gradding.com/frontend/primary-theme/assets/images/ogimage.png',
    caseStudyUrl: 'https://www.gradding.com/'
  },
  {
    title: 'IELTS Grad App',
    description: 'IELTS Grad is also a brand of Gradding, offering white-label solutions for test preparation. It is specifically tailored for IELTS, PTE, GMAT, SAT, and ACT exams. This platform provides students with the necessary preparation materials, practice tests, and personalized learning plans to excel in these standardized tests',
    imageUrl: 'https://www.gradding.com/test-preparation/openGraph/test-prep.png',
    caseStudyUrl: 'https://www.gradding.com/test-preparation/ielts/coaching',
  },
  {
    title: 'Vocabulary (White-Label)',
    description: 'Vocabulary App is a comprehensive mobile application designed to enhance vocabulary skills for test preparation and language learning. This app is available as a white-label solution, allowing educational institutions and businesses to offer a branded language learning experience to their users',
    imageUrl: 'https://media.discordapp.net/attachments/881992483603611708/1098721882292887663/image.png?width=1377&height=676',
    caseStudyUrl: '#',
  },
  {
    title: 'MRP',
    description: 'Global assignment help refers to online academic assistance provided by experts to students worldwide. This type of help is particularly useful for students who are struggling with complex assignments, research papers, or projects. Global assignment help services offer a range of benefits, including timely submissions, improved grades, and enhanced learning outcomes',
    imageUrl: 'https://www.globalassignmenthelp.com/images/og_GAH.jpg',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.globalassignmenthelp&hl=en_US',
  },
  {
    title: 'MySIP Online',
    description: 'Mysiponline is a popular online platform that allows users to check their SIP (Subscriber Identity Module) balance, recharge, and manage their mobile phone accounts. The website provides a user-friendly interface to access various services, including bill payments, data usage, and call logs',
    imageUrl: 'https://www.mysiponline.com/images/whatsapp.jpg',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.mysiponline&hl=en_US',
  },
  {
    title: 'WoodenStreet',
    description: 'The Wooden Street application is an online marketplace that specializes in sourcing authentic, handmade, and unique wooden decorative items from artisans and craftspeople worldwide. Their platform allows users to discover and purchase one-of-a-kind wooden products, such as wooden street art, wooden furniture, and decorative items!',
    imageUrl: 'https://www.woodenstreet.com/images/cover.gif',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_US',
  },
  {
    title: 'IpoTech',
    description: 'Discover upcoming IPOs, latest mutual fund NAVs, and utilize fintech tools like calculators and PAN verification. All in one sleek, user-friendly platform',
    imageUrl: 'https://images.ctfassets.net/qr8kennq1pom/1FwKqQoHL68jdVhdkJBJcI/12576e11f3d925df875ebdcb38db9f0a/Freelance.jpg',
    caseStudyUrl: "https://ipotech.vercel.app/"
  },
  {
    title: 'Winners',
    description: 'The Winners Institute - Indias Best Coaching for. Competitive and Govt. Jobs Exam Preparation',
    imageUrl: '/winners.png',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.winners.institute&hl=en_US',
  },
  {
    title: 'This website ✨',
    description: 'Portfolio website built in Next.js 14 to showcase my projects, experience and resume through a cooler way',
    imageUrl: 'https://nextjs.org/static/blog/next-14/twitter-card.png',
    caseStudyUrl: 'https://harsh29.vercel.app/',
  }
];

const PreviousWork: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div id='previouswork' className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a] project-card"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  {/* {project.caseStudyUrl !== '#' ? (
                    <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                        <p className="mt-3 text-base text-gray-300">{project.description}</p>
                      </div>
                    </a>
                  ) : (
                    <a>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                        <p className="mt-3 text-base text-gray-300">{project.description}</p>
                      </div>
                    </a>
                  )} */}

                  {project.caseStudyUrl !== '#' ? (
                    <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                        <p
                          className={`mt-3 text-base text-gray-300 description ${hoveredProject === project.title ? 'expand' : 'truncate'}`}
                        >
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                      <p
                        className={`mt-3 text-base text-gray-300 description ${hoveredProject === project.title ? 'expand' : 'truncate'}`}
                      >
                        {project.description}
                      </p>
                    </div>
                  )}



                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .truncate {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .expand {
    -webkit-line-clamp: unset;
  }
      `}</style>
    </div>
  );
};

export default PreviousWork;
