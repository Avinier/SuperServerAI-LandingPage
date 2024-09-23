import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AiInfo = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    { title: "Custom Trained LLM", content: "Content for section 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "AI-powered Dashboard with Analytics", content: "Content for section 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "All-in-one Cloud Solutions, fully automated", content: "Content for section 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-primary overflow-hidden rounded-tl-[60px] sm:rounded-tl-[90px] md:rounded-tl-[120px] rounded-bl-[60px] sm:rounded-bl-[90px] md:rounded-bl-[120px]">
      <h1 className="text-3xl sm:text-4xl font-heading text-white text-center mb-4 sm:mb-6">
        What makes us different
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-center font-body text-white max-w-3xl mx-auto">
        We stand apart from the competition, offering amazingly blazingly fast services at affordable costs
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl mx-auto'>
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 sm:pb-6">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => handleSectionClick(index)}
                >
                  <span className="font-semibold text-lg sm:text-xl font-heading text-background">{section.title}</span>
                  {activeSection === index ? 
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-accent2 transition-transform duration-300" /> : 
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-accent2 transition-transform duration-300" />
                  }
                </button>
                <div 
                  className={`mt-2 sm:mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-background text-base sm:text-lg">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-background px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-body transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 lg:ml-8 mt-8 lg:mt-0">
          <img
            src="/images/aiinfo-border.png"
            alt="AI Info"
            className="w-full h-auto rounded-lg"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-[2%] left-[2%] w-[96%] h-[96%] object-cover rounded-lg shadow-md"
            style={{
              borderRadius: '10px',
              pointerEvents: 'auto',
            }}
          >
            <source src="https://aniruddhagps.com/quantumsenses/chat-demo-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AiInfo;