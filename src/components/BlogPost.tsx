
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    'future-of-voice-ai-banking': {
      title: "The Future of Voice AI in Banking",
      content: `
        <p>The banking industry is experiencing a revolutionary transformation with the integration of AI-powered voice agents. These sophisticated systems are not just changing how customers interact with financial institutions, but fundamentally reshaping the entire customer service landscape.</p>
        
        <h2>The Current State of Voice AI in Banking</h2>
        <p>Modern voice AI systems have evolved far beyond simple command recognition. Today's implementations can understand context, emotions, and complex financial queries with remarkable accuracy. Major banks are deploying these systems to handle everything from account inquiries to complex transaction disputes.</p>
        
        <h2>Key Benefits for Financial Institutions</h2>
        <ul>
          <li><strong>24/7 Availability:</strong> Voice AI agents never sleep, providing round-the-clock customer support</li>
          <li><strong>Cost Efficiency:</strong> Reducing operational costs by handling routine inquiries automatically</li>
          <li><strong>Consistency:</strong> Ensuring uniform service quality across all customer interactions</li>
          <li><strong>Scalability:</strong> Managing thousands of simultaneous conversations without degradation</li>
        </ul>
        
        <h2>Technical Challenges and Solutions</h2>
        <p>Implementing voice AI in banking comes with unique challenges, particularly around security and compliance. Financial institutions must ensure that voice biometrics are secure, conversations are encrypted, and regulatory requirements are met.</p>
        
        <h2>The Road Ahead</h2>
        <p>As we look toward the future, voice AI in banking will become even more sophisticated. We can expect to see integration with advanced analytics, predictive modeling, and personalized financial advice delivered through natural conversation.</p>
        
        <p>The transformation is already underway, and institutions that embrace this technology early will have a significant competitive advantage in the evolving financial landscape.</p>
      `,
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
    },
    'vibration-analysis-research': {
      title: "Vibration Analysis: From Research to Real-World Applications",
      content: `
        <p>Vibration analysis has emerged as one of the most critical tools in modern industrial maintenance and fault detection. Our research at IIT Bombay has focused on developing more precise and accessible methods for industrial applications.</p>
        
        <h2>Understanding Vibration Signatures</h2>
        <p>Every mechanical system has a unique vibration signature when operating normally. Deviations from these patterns can indicate developing faults, wear, or impending failures. Our research has focused on creating algorithms that can detect these subtle changes with unprecedented accuracy.</p>
        
        <h2>Research Methodology</h2>
        <p>Our approach combines traditional signal processing techniques with modern machine learning algorithms. We've developed a hybrid system that can:</p>
        <ul>
          <li>Analyze frequency domain characteristics in real-time</li>
          <li>Identify patterns that human analysts might miss</li>
          <li>Provide predictive insights about equipment health</li>
          <li>Adapt to different types of machinery and operating conditions</li>
        </ul>
        
        <h2>Real-World Impact</h2>
        <p>The practical applications of this research extend far beyond academic interest. Industries using our techniques have reported:</p>
        <ul>
          <li>30% reduction in unexpected equipment failures</li>
          <li>Significant cost savings through predictive maintenance</li>
          <li>Improved safety through early fault detection</li>
          <li>Extended equipment lifespan</li>
        </ul>
        
        <h2>Future Directions</h2>
        <p>We're currently working on integrating IoT sensors with our analysis algorithms to create a complete predictive maintenance ecosystem. This will enable real-time monitoring and automatic alert systems for industrial facilities.</p>
      `,
      date: "December 20, 2024",
      readTime: "8 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop"
    },
    'supply-chain-optimization-pg': {
      title: "Lessons from Supply Chain Optimization at P&G",
      content: `
        <p>During my internship at Procter & Gamble, I had the opportunity to work on optimizing supply chain operations for one of the world's largest consumer goods companies. The experience provided invaluable insights into large-scale operations management.</p>
        
        <h2>The Challenge</h2>
        <p>P&G's supply chain spans multiple continents, involves thousands of suppliers, and serves billions of consumers. The challenge was to identify inefficiencies and implement solutions that could reduce costs while maintaining service quality.</p>
        
        <h2>Our Approach</h2>
        <p>We employed a data-driven methodology that included:</p>
        <ul>
          <li>Comprehensive analysis of existing supply chain data</li>
          <li>Identification of bottlenecks and inefficiencies</li>
          <li>Development of optimization algorithms</li>
          <li>Implementation of pilot programs</li>
          <li>Measurement and validation of results</li>
        </ul>
        
        <h2>Key Findings</h2>
        <p>Our analysis revealed several critical areas for improvement:</p>
        <ul>
          <li><strong>Inventory Management:</strong> Opportunities to reduce carrying costs while maintaining service levels</li>
          <li><strong>Transportation Optimization:</strong> Route optimization could reduce costs by 15%</li>
          <li><strong>Demand Forecasting:</strong> Better prediction models could reduce waste by 20%</li>
          <li><strong>Supplier Coordination:</strong> Improved communication protocols enhanced efficiency</li>
        </ul>
        
        <h2>Implementation Results</h2>
        <p>The pilot programs we implemented showed promising results:</p>
        <ul>
          <li>12% reduction in transportation costs</li>
          <li>18% improvement in inventory turnover</li>
          <li>25% reduction in stockouts</li>
          <li>Improved supplier satisfaction scores</li>
        </ul>
        
        <h2>Lessons Learned</h2>
        <p>This experience taught me the importance of balancing quantitative analysis with practical implementation challenges. The most elegant solution is worthless if it can't be executed effectively in the real world.</p>
      `,
      date: "November 10, 2024",
      readTime: "6 min read",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-black hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar size={16} className="mr-2" />
              <span className="mr-4">{post.date}</span>
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
