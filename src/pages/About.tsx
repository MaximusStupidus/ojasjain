
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">About Me</h1>
          <p className="text-xl text-gray-600 font-light">
            Mechanical Engineer trying to explore the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="/lovable-uploads/c0f49a49-59f7-43bb-bd86-81a599881e6f.png"
              alt="Ojas Jain"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light mb-6">Hello, I'm Ojas</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a Mechanical Engineering student at IIT Bombay with a passion for solving real problems 
              through technology. I've had the chance to work on some interesting projects in supply chain 
              optimization and vibration analysis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              My work spans across different areas - from improving production processes at companies like 
              Suntory and P&G, to building tools that can detect mechanical faults with high precision. 
              I also enjoy the entrepreneurial side of things and have started a couple of ventures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not working on projects, you'll probably find me leading teams, mentoring other 
              students, or just trying to figure out how things work.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-light mb-8">Education</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-4">Indian Institute of Technology, Bombay</h3>
            <p className="text-gray-600 mb-2">Major in Mechanical Engineering with Honours in Computer Vision and Minor in Machine Learning and Data Science</p>
            <p className="text-gray-600 mb-4">November 2021 - May 2025 | Mumbai, Maharashtra</p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-light mb-8">Areas of Interest</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Engineering</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Supply Chain Optimization</li>
                <li>• Vibration Analysis</li>
                <li>• Process Engineering</li>
                <li>• Manufacturing Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Technology</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Machine Learning</li>
                <li>• Computational Modelling</li>
                <li>• Image Processing</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Leadership</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Team Management</li>
                <li>• Project Leadership</li>
                <li>• Academic Mentorship</li>
                <li>• Strategic Planning</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
