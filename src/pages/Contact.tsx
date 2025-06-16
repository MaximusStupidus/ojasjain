
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'cc0072bc-0607-46e6-9674-2600c51593c1');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6">Contact Me</h1>
          <p className="text-xl text-gray-600 font-light">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, 
              or just having a conversation about technology and innovation. 
              Feel free to reach out through any of the channels below.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <a
                href="mailto:ojas.jain.25072003@gmail.com"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  <Mail className="text-gray-600" size={20} />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-gray-500 text-center">Best for detailed discussions</p>
              </a>

              <a
                href="https://www.linkedin.com/in/ojas-jain-iit/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  <Linkedin className="text-gray-600" size={20} />
                </div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <p className="text-sm text-gray-500 text-center">Professional networking</p>
              </a>

              <a
                href="https://github.com/MaximusStupidus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  <Github className="text-gray-600" size={20} />
                </div>
                <h3 className="font-medium mb-1">GitHub</h3>
                <p className="text-sm text-gray-500 text-center">Code and projects</p>
              </a>

              <a
                href="https://x.com/OjasJai24837315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  <Twitter className="text-gray-600" size={20} />
                </div>
                <h3 className="font-medium mb-1">Twitter</h3>
                <p className="text-sm text-gray-500 text-center">Quick updates</p>
              </a>
            </div>

            <div className="mt-8 flex items-start justify-center">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
                  <MapPin className="text-gray-600" size={20} />
                </div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-gray-600">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="consulting">Consulting Opportunity</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="networking">Professional Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Response Time:</strong> I typically respond to messages within 24-48 hours. 
                For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
