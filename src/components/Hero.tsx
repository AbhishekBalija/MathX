import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      {/* Existing hero section remains unchanged */}
      <div className="container mx-auto px-8 flex items-center justify-between py-16">
        <div className="max-w-xl">
          <div className="grid grid-cols-10 gap-1 mb-8">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            Unlock Your Math Potential Today
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Transform your math challenges into triumphs with our AI-driven exam preparation app that empowers students to succeed.
          </p>
          
          <div className="flex gap-4">
            <Link to="/register" className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
              Get Started
            </Link>
            <button className="bg-[#0f172a] text-white px-8 py-3 rounded-lg hover:bg-[#1e2a4a]">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-5/7">
          <img 
            src="./images/Hero-left.png" 
            alt="Student studying with AI" 
            className="w-full"
          />
        </div>
      </div>

      {/* Updated Features Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="flex gap-20">
          {/* Left side content with reduced width */}
          <div className="max-w-md">
            <span className="text-green-500">Smart Solutions</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Powerful Features</h2>
            <p className="text-gray-600 mb-8">
              Experience unparalleled convenience and efficiency in your exam preparations with MathX's innovative approach to solving math problems automatically through images.
            </p>
            <p className="text-gray-600 mb-8">
              Experience unparalleled convenience and efficiency in your exam preparations with MathX's innovative approach to solving math problems automatically through images.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
              See Features
            </button>
          </div>

          {/* Right side cards with staggered layout */}
          <div className="flex-1 grid grid-cols-2 gap-6 relative h-150">
            <div className="bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-shadow duration-300">
              <img src="/icons/ocr-icon.png" alt="OCR Technology" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">OCR Technology</h3>
              <p className="text-gray-600 mb-4">Scan your handwritten math problems with ease for quick and accurate text extraction.</p>
              <a href="#" className="text-black font-semibold flex items-center">
                Read more <span className="ml-2">→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-shadow duration-300 translate-y-24">
              <img src="/icons/ai-icon.png" alt="AI Solutions" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <p className="text-gray-600 mb-4">Let AI assist you in completing your math solutions, ensuring your success.</p>
              <a href="#" className="text-black font-semibold flex items-center">
                Read more <span className="ml-2">→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-shadow duration-300">
              <img src="/icons/interface-icon.png" alt="User-Friendly Interface" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">User-Friendly Interface</h3>
              <p className="text-gray-600 mb-4">Navigate effortlessly with a clean, minimalistic design tailored for effective learning.</p>
              <a href="#" className="text-black font-semibold flex items-center">
                Read more <span className="ml-2">→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.4)] transition-shadow duration-300 translate-y-24">
              <img src="/icons/step-icon.png" alt="Step-by-Step Guidance" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Step-by-Step Guidance</h3>
              <p className="text-gray-600 mb-4">Navigate effortlessly with a clean, minimalistic design tailored for effective learning.</p>
              <a href="#" className="text-black font-semibold flex items-center">
                Read more <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
            <div className="container mx-auto px-8 py-16 flex items-center gap-16">
              <div className="w-1/2">
                <img 
                  src="./images/services-illustration.png" 
                  alt="Students achieving success" 
                  className="w-full"
                />
              </div>
      
              <div className="flex-1">
                <span className="text-green-500">Our Services</span>
                <h2 className="text-4xl font-bold mt-2 mb-6">
                  Comprehensive Math Solutions Made Easy
                </h2>
                <p className="text-gray-600 mb-6">
                  MathX is dedicated to providing students with effective tools for solving complex math problems through our intelligent web app, guiding you towards your academic goals.
                </p>
                <p className="text-gray-600 mb-8">
                  From image uploads to precise problem-solving, we provide a range of services that elevate your exam preparation experience.
                </p>
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
                  Explore Services
                </button>
              </div>
            </div>

                  {/* Effortless Learning Section */}
      <div className="container mx-auto px-8 py-16 flex items-center gap-16">
        <div className="flex-1">
          <span className="text-green-500">Effortless Learning</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Master Math Problems with AI Assistance
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Transform your exam preparation with MathX, where students can seamlessly upload handwritten math problems and receive accurate solutions instantly through advanced AI technology.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-green-500">✓</div>
              <p>Instant Image Upload for Quick Help</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-green-500">✓</div>
              <p>Advanced OCR for Accurate Recognition</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-green-500">✓</div>
              <p>AI Solutions Tailored to You</p>
            </div>
          </div>

          <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 mt-8">
            Start Solving Now
          </button>
        </div>

        <div className="w-1/2">
          <img 
            src="./images/effortless-learning.png" 
            alt="Student with large book illustration" 
            className="w-full"
          />
        </div>
      </div>
      {/* Testimonials Section */}
            <div className="container mx-auto px-8 py-16 text-center">
              <span className="text-green-500">User Testimonials</span>
              <h2 className="text-4xl font-bold mt-2 mb-16">What Our Users Say</h2>
      
              <div className="max-w-2xl mx-auto bg-white rounded-lg p-12 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                <div className="w-24 h-24 mx-auto mb-6">
                  <img 
                    src="./images/user-avatar.png" 
                    alt="User Avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4">John Doe</h3>
                <p className="text-gray-600 mb-6">
                  MathX revolutionized my exam prep! The AI is incredible and helped me tackle tough math problems effortlessly.
                </p>
                
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          {/* Latest Insights Section */}
          <div className="container mx-auto px-8 py-16">
        <div className="flex gap-20">
          {/* Left side content */}
          <div className="max-w-md flex flex-col justify-center">
            <span className="text-green-500">Latest Insights</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">EdTech Innovations</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our blog for valuable insights on the latest trends in EdTech, study tips, and effective learning strategies.
            </p>
            <p className="text-gray-600 mb-8">
              Discover how technology is transforming education and learn about the best practices for maximizing your learning potential.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600">
              Explore Blog
            </button>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Hero