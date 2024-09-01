import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Executive Flutter Developer',
    company: 'Cognus Technology',
    date: 'Sep 2023 - Present',
  },
  {
    id: 2,
    role: 'Flutter Developer',
    company: 'Ixora Infotech Pvt. Ltd.',
    date: 'June 2023 - Sep 2023',
  },
  {
    id: 3,
    role: 'Full Stack Developer(Android and Web)',
    company: 'Freelancing',
    date: 'Oct 2022 - Apr 2023',
  },
  {
    id: 4,
    role: 'Intern Developer',
    company: 'Ixora Infotech Pvt. Ltd.',
    date: 'June 2022 - Sep 2022',
  },
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent bg-transparent border border-grey rounded-lg p-6 `}>
        <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
        <h4 className="text-purple-300 text-purple-300 mb-4">{experience.company}</h4>
        <p className="text-purple-200 text-purple-200 mb-2">{experience.date}</p>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="h-auto text-white py-12 bg-transparent">
      <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block border-l-2 border-purple-600 border-purple-450 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
