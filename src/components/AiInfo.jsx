import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AiInfo = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  let btnAnimation =
    "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 130) {
          clearInterval(timer);
          setActiveSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
          return 0;
        }
        return Math.min(oldProgress + 1, 130);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [activeSection]);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    setProgress(0);
  };

  const sections = [
    { title: "Custom Trained LLM", content: "Content for section 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc" },
    { title: "AI-powered Dashboard with Analytics", content: "Content for section 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc" },
    { title: "All-in-one Cloud Solutions, fully automated", content: "content for section 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc" },
  ];

  return (
    <section className="py-10 md:py-20 px-4 md:px-8 lg:px-20 relative bg-secondary overflow-hidden rounded-tl-[60px] md:rounded-tl-[120px] rounded-bl-[60px] md:rounded-bl-[120px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white text-center">What makes us different</h1>
      <p className="text-sm md:text-lg lg:text-xl mt-4 lg:mt-6 text-bold text-center font-body text-white max-w-3xl mx-auto">
        We stand apart from the competition, offering amazingly blazingly fast services at affordable costs
      </p>

      <div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto mt-10 transition ease-in duration-400'>
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <div className="space-y-4 md:space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 md:pb-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => handleSectionClick(index)}
                >
                  <span className="font-semibold text-lg md:text-xl font-heading text-background">{section.title}</span>
                  {activeSection === index ? <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-accent2" /> : <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-accent2" />}
                </button>
                {activeSection === index && (
                  <div className="mt-3 md:mt-4 transition-all duration-500 ease-in-out">
                    <div className="h-1 bg-gray-200 w-full rounded-lg">
                      <div
                        className="h-1 bg-text rounded-lg transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="font-body mt-4 md:mt-6 text-background text-bold text-sm md:text-base lg:text-lg">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              className={`inline-block bg-primary text-background px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-md text-sm md:text-base lg:text-xl font-body ${btnAnimation}`}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/aiinfo-gif.png"
            alt="AI Info gif"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AiInfo;