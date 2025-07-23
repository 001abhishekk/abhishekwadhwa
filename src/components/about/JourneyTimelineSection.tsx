import React from 'react';
import { GraduationCap, Briefcase, BookOpen, Store, Mic, Award } from 'lucide-react';

export const JourneyTimelineSection = () => {
  const timelineEvents = [
    {
      year: '2012',
      title: 'Class 10',
      subtitle: 'Shri Tulsi Das Memorial School, Kurukshetra',
      description: 'Completed secondary education with a passion for learning and technology.',
      icon: GraduationCap,
      color: 'bg-green-500',
      type: 'education'
    },
    {
      year: '2014',
      title: 'Class 12 (Non-Medical)',
      subtitle: 'Government Senior Secondary School, Kurukshetra',
      description: 'Completed with strong academic performance, laying the foundation for a tech-focused path.',
      icon: GraduationCap,
      color: 'bg-green-500',
      type: 'education'
    },
    {
      year: '2017',
      title: 'Dropped Out of B.Sc. Computer Science',
      subtitle: 'Bhagwan Parshuram College',
      description: 'Completed 6 semesters but chose to step away. A pivotal pause that led to new beginnings.',
      quote: 'Sometimes dropping out opens the door to a better path.',
      icon: GraduationCap,
      color: 'bg-red-500',
      type: 'education'
    },
    {
      year: '2017-2020',
      title: 'Worked at Family Kirana Shop',
      subtitle: 'Mukhi Ji Kirana Store',
      description: 'Helped set up and manage a local store with my father. Learned discipline, hustle, and customer psychology.',
      quote: 'Selling groceries taught me more about people than any classroom.',
      icon: Store,
      color: 'bg-orange-500',
      type: 'work'
    },
    {
      year: '2017-2020',
      title: 'Distance Learning (BCA)',
      subtitle: 'Directorate of Distance Education, Kurukshetra University',
      description: 'Pursued Bachelor of Computer Applications while working. Completed graduation with determination and self-study.',
      icon: GraduationCap,
      color: 'bg-yellow-500',
      type: 'education'
    },
    {
      year: 'Jan 2021 – Mar 2023',
      title: 'First Content Writer Role',
      subtitle: 'Local Agency (Small Firm)',
      description: 'Started as a content writer. Built strong fundamentals in SEO, storytelling, and digital platforms.',
      icon: Briefcase,
      color: 'bg-green-500',
      type: 'work'
    },
    {
      year: 'Apr 2023 – Oct 2023',
      title: 'Virtual Oplossing, Mohali',
      subtitle: 'Content Writer (Full-time)',
      description: 'Expanded skills in campaign content, email marketing, and audience research.',
      icon: Briefcase,
      color: 'bg-blue-500',
      type: 'work'
    },
    {
      year: 'Nov 2023 – Dec 2024',
      title: 'Idea Clan, Panchkula',
      subtitle: 'Creative & SEO-Optimized Writing',
      description: 'Worked across tech, lifestyle, and affiliate niches. Strengthened long-form writing and strategic blogging.',
      icon: Briefcase,
      color: 'bg-green-500',
      type: 'work'
    },
    {
      year: 'Late 2024 – Mid 2025',
      title: 'Creator Milestones',
      subtitle: 'Published & Produced',
      description: 'Published 2 Contemporary Romance Novels, Launched 2 Podcast Shows, Released 1 Udemy Course',
      quote: 'From grocery shelves to bestsellers — all through words.',
      icon: Award,
      color: 'bg-purple-500',
      type: 'milestone'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Journey So Far</h2>
          <p className="text-xl text-gray-600">Every milestone tells a story of growth, resilience, and purpose</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${event.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 ${event.color} rounded-lg mr-3`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{event.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{event.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                      
                      {event.quote && (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-700 bg-blue-50 p-3 rounded-r-lg">
                          "{event.quote}"
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};