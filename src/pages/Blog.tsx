
import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">Blog</h1>
          <p className="text-xl text-gray-600 font-light">
            Thoughts on technology, research, and innovation
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center py-20">
          <h2 className="text-3xl font-light text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600">
            I'm working on some exciting blog posts about technology, research, and innovation. 
            Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
