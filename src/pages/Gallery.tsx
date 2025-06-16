
import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">CV</h1>
          <p className="text-xl text-gray-600 font-light">
            My curriculum vitae and professional background
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-20">
          <h2 className="text-3xl font-light text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600">
            I'm working on updating my CV section. 
            Check back soon for my detailed curriculum vitae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
