import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-white px-6 md:px-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-20 mt-0">Hi, my name is Harsh</h2>

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full max-w-3xl mx-auto border blur-background2 mt-0">
            <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
            <div className="space-y-6">
              <p className="text-gray-200">
                I&apos;m a 23 year old Developer with more than 2 years of experience in both Frontend and Backend in Mobile Applications & Web Dev. <br /> I currently work at Cognus Technology, Udaipur as an Executive Flutter Developer. I completed my B.Tech from Career Point University in 2023 and have been coding since then
              </p>
              <h3 className="text-xl font-semibold text-white">Languages & Frameworks</h3>
              <div className="flex justify-between items-end">
                <div className="grid grid-cols-12 ">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="next js logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="flutter logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="dart logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="android logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="androidstudio logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="bootstrap logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="codeigniter logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="confluence logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="css3 logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="dart logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="digitalocean logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="figma logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="firebase logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="github logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="html5 logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="javascript logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="jira logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="nodejs logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="php logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="python logo" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-10 h-10 rounded-full mb-4 mr-4" alt="vscode logo" />
                </div>
                <button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                  <Link href='https://www.goodcv.com/cv/4487fbf25a954a8bc5deeeaddfe859b9' target='_blank'>
                    Resume
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
