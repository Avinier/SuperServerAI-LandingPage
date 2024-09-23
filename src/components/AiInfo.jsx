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
    <section className="py-20 min-h-screen md:px-8 lg:px-40 relative bg-primary overflow-hidden rounded-tl-[120px] rounded-bl-[120px]">
      <h1 className="text-4xl md:text-4xl font-heading text-white text-center mb-6">
        What makes us different
      </h1>
      <p className="text-lg md:text-xl lg:text-xl mb-12 text-center font-body text-white max-w-3xl mx-auto">
        We stand apart from the competition, offering amazingly blazingly fast services at affordable costs
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl mx-auto'>
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => handleSectionClick(index)}
                >
                  <span className="font-semibold text-xl font-heading text-background">{section.title}</span>
                  {activeSection === index ? 
                    <ChevronUp className="h-6 w-6 text-accent2 transition-transform duration-300" /> : 
                    <ChevronDown className="h-6 w-6 text-accent2 transition-transform duration-300" />
                  }
                </button>
                <div 
                  className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body text-background text-lg">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-background px-6 py-3 rounded-md text-lg font-body transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2 lg:ml-8">
          <img
            src="/images/aiinfo-border.png"
            alt="AI Info"
            className="w-full h-auto rounded-lg"
          /><video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-30 right-45 w-[120px] h-[150px] object-cover rounded-lg shadow-md"
          style={{
            borderRadius: '10px',
            pointerEvents: 'auto',
          }}
        >
          <source src="http://dev.quantumsenses.com:8877/chat-demo-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </section>
  );
};

export default AiInfo;