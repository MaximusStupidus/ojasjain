
import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2025",
      title: "Comsync AI Launch",
      description: "Co-founded Comsync AI, building Voice AI Agents for Banking and Insurance",
      type: "entrepreneurship"
    },
    {
      year: "2024",
      title: "Zerolag Founded",
      description: "Co-founded Zerolag for retail trading solutions, raised $4700 from SINE IIT Bombay",
      type: "entrepreneurship"
    },
    {
      year: "2024",
      title: "Summer Internships",
      description: "Completed internships at Suntory Holdings Japan and P&G, received PPOs from both",
      type: "professional"
    },
    {
      year: "2024",
      title: "Business Competition Wins",
      description: "Won FAME 3.0 ($1,200), Indian Case Challenge National Winner",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Leadership Roles",
      description: "Manager at Team AeRoVe, DAMP Mentor, Research Coordinator",
      type: "leadership"
    },
    {
      year: "2023",
      title: "VibroView Research",
      description: "Started research on vibration analysis tool, later deployed at Tata Power",
      type: "research"
    },
    {
      year: "2023",
      title: "UAS Challenge Victory",
      description: "Won 3 awards for drone design in UK competition",
      type: "achievement"
    },
    {
      year: "2022",
      title: "IARC World Champions",
      description: "World Champions of IARC Mission 9 Simulation Round",
      type: "achievement"
    },
    {
      year: "2022",
      title: "Research Begins",
      description: "Started femtosecond pulse measurement research at Vibrational Spectroscopy Lab",
      type: "research"
    },
    {
      year: "2021",
      title: "IIT Bombay Admission",
      description: "Joined IIT Bombay for Mechanical Engineering, JEE Advanced AIR 882",
      type: "academic"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'entrepreneurship': return 'bg-blue-100 text-blue-800';
      case 'professional': return 'bg-green-100 text-green-800';
      case 'research': return 'bg-purple-100 text-purple-800';
      case 'leadership': return 'bg-orange-100 text-orange-800';
      case 'achievement': return 'bg-yellow-100 text-yellow-800';
      case 'academic': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">Timeline</h1>
          <p className="text-xl text-gray-600 font-light">
            A journey through milestones and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-medium">{event.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-2xl font-light text-gray-500">{event.year}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-light text-black mb-2">4+</h3>
            <p className="text-gray-600">Years at IIT</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-light text-black mb-2">2</h3>
            <p className="text-gray-600">Startups Founded</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-light text-black mb-2">10+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-light text-black mb-2">50+</h3>
            <p className="text-gray-600">Team Members Led</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
