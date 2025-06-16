
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Comsync AI",
      role: "Co-Founder",
      duration: "Jan 2025 - Present",
      location: "",
      website: "https://app.comsync.in/",
      logo: null,
      achievements: [
        "Comsync AI builds Voice AI Agents for Banking and Insurance to improve the process of Collections and Outreach",
        "Piloting with HDFC, India's largest private sector bank to reduce costs by 30% with improved collection efficiency"
      ]
    },
    {
      company: "Zerolag",
      role: "Co-Founder", 
      duration: "October 2024 - Present",
      location: "",
      website: "https://github.com/zerolag-opx/opx",
      logo: null,
      achievements: [
        "Zerolag helps Retail traders gain access to fastest real time market data and the best tools for Options Trading in India",
        "Currently testing the software with 15 Retail Traders to validate the market | Raised $4700 from SINE, IIT Bombay"
      ]
    },
    {
      company: "Firefly Diamonds",
      role: "Internship",
      duration: "October 2024 – March 2025",
      location: "Mumbai, India",
      website: "https://fireflydiamonds.com/",
      logo: "/lovable-uploads/9e5e1499-51f2-44ed-b4f0-7d0e7a5bce04.png",
      achievements: [
        "Created a data planning system for inventory tracking & demand planning of stock to reduce handling costs",
        "Established the franchise model to expand from 3 customer touch-points to 9+ against industry benchmarks",
        "Implemented a Ranking system to identify advertising channels who increase the efficiency of marketing spend",
        "Established an exhibition model by strategic date & location selection to increase off-season sales by 40%"
      ]
    },
    {
      company: "Suntory Holdings Japan",
      role: "Supply Chain Engineering Intern",
      duration: "July 2024 - August 2024",
      location: "Osaka, Japan",
      website: "https://www.suntory.com/",
      logo: "/lovable-uploads/8fd2be87-a81f-4f54-9083-5b74dd56ca6d.png",
      achievements: [
        "Proposed 132% capacity increase in Gin production by redesigning maceration with independent mulching tanks",
        "Improved flavor extraction and cut energy use by modeling aroma diffusion and optimizing distillation dynamics",
        "Received a Pre Placement Offer"
      ]
    },
    {
      company: "Procter & Gamble",
      role: "Supply Chain Operations Intern",
      duration: "May 2024 - July 2024",
      location: "Mandideep, India",
      website: "https://in.pg.com/",
      logo: "/lovable-uploads/b48c7ebf-2703-467e-87bf-bf764adf17af.png",
      achievements: [
        "Led a 20% cost reduction in Whisper FemCare by optimizing contractor allocation through workload time analysis",
        "Boosted shop floor efficiency by redesigning palletizer for ergonomic handling & built real-time Power dashboards",
        "Received a Pre Placement Offer"
      ]
    },
    {
      company: "Aidentifi",
      role: "Automation Engineer",
      duration: "Dec 2023 – Apr 2024",
      location: "Mumbai, India",
      website: "https://www.aidentifi.com/",
      logo: "/lovable-uploads/669cd91d-200b-4050-ac04-74f940c34041.png",
      achievements: [
        "Curated a databases of 20000+ candidates suitable for Private Equity and Venture Capital positions across firms",
        "Automated queries for external website and Linkedin Recruiter Services to reduce headhunting man hours",
        "Implemented a fully automated web scraping script categorising 1300+ profiles based upon 14+ hyper-parameters",
        "Implemented an end to end pipeline for Linkedin crawling and CRM automation for the firm to optimise processes"
      ]
    },
    {
      company: "Siddharth Carbochem Products Ltd.",
      role: "Machine Learning Engineer",
      duration: "Aug 2023 – Dec 2023",
      location: "Mumbai, India",
      website: "https://www.scpl.biz/",
      logo: "/lovable-uploads/5c52c319-d085-4864-881f-95b63534be6c.png",
      achievements: [
        "Researched and curated a database of 2000+companies for 8+ chemical products for business development",
        "Integrated generative AI plugins with CRM system to automate marketing efforts and emails to reduce man hours",
        "Created a detailed dossier for market expansion across 4+ continental regions with possible market entry plans",
        "Trained a regression model to automate leads & perform time series analysis to predict product demand"
      ]
    }
  ];

  const leadership = [
    {
      role: "Manager",
      organization: "Team AeRoVe | Unmesh Mashruwala Innovation Cell",
      duration: "May 2023 – May 2024",
      description: "Led innovation outreach and project execution in IIT Bombay's premier aerospace student team",
      achievements: [
        "Led 50-member team to scale outreach and showcase technical work in UAS challenges and WWF collaborations",
        "Managed INR 1.5M budget and oversaw international procurement to support aerospace innovation projects"
      ]
    },
    {
      role: "Mentor",
      organization: "Department Academic Mentorship Program (DAMP)",
      duration: "May 2023 – May 2024",
      description: "Guided sophomore academic success as part of the institute's flagship student mentorship initiative",
      achievements: [
        "Selected among 54 mentors (from 400+) to guide sophomores through coursework & academic challenges",
        "Co-led Sophomore 101 outreach event for 190+, easing their transition into departmental life at IIT Bombay"
      ]
    },
    {
      role: "Coordinator",
      organization: "Department Research | Mechanical Engineering Council",
      duration: "May 2023 – July 2024",
      description: "Enhanced research culture within the department by leading initiatives and overseeing all student-led projects",
      achievements: [
        "Organized Tech-RnD Expo & initiated Weekly Abridged Research articles to increase Student-Professor connect",
        "Proposed the I-Excel Program to integrate industry field visits into core engineering curriculum to promote research"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">Experience</h1>
          <p className="text-xl text-gray-600 font-light">
            Professional journey across industry and academia
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-12">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-6">
                  {/* Logo Space */}
                  <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 flex items-center justify-center border border-gray-200">
                    {exp.logo ? (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="max-w-full max-h-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">Logo</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-medium text-black">{exp.company}</h3>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-black transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <p className="text-xl text-gray-700 mt-1">{exp.role}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-gray-600 font-medium">{exp.duration}</p>
                        {exp.location && <p className="text-gray-500">{exp.location}</p>}
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-black mr-3 mt-0.5 flex-shrink-0 text-sm">•</span>
                          <span className="leading-relaxed text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Experience */}
        <section>
          <h2 className="text-3xl font-light mb-12">Leadership & Mentorship</h2>
          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <div key={index} className="border-l-4 border-black pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black">{leader.role}</h3>
                    <p className="text-lg text-gray-700 mt-1">{leader.organization}</p>
                  </div>
                  <p className="text-gray-600 font-medium mt-2 md:mt-0">{leader.duration}</p>
                </div>
                <p className="text-gray-600 mb-4 font-light">{leader.description}</p>
                <ul className="space-y-2">
                  {leader.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-black mr-3 mt-0.5 flex-shrink-0">◦</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mt-20">
          <h2 className="text-3xl font-light mb-8">Teaching</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Teaching Assistant</h3>
            <p className="text-gray-600">
              TA for 4 UG Courses on Optimization, Differential Equations, Calculus & Linear Algebra
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
