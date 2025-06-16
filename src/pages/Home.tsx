
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light text-black mb-6 animate-fade-in">
            Hi, I am Ojas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            Trying to be an<br />
            <span className="text-black font-bold">Engineer</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Contact Me
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
