import React, { useState, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => setIsModalOpen(true);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const btnAnimation = "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";

  return (
    <section className={`
      bg-background flex flex-col lg:flex-row 
      min-h-[80vh] w-full items-center justify-center 
      px-4 sm:px-6 lg:px-8 py-12 lg:py-20
      ${isVisible ? "animate-fade-in-up" : "opacity-0"}
    `}>
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-4 font-heading text-text">
            Seamlessly{' '}
            <span className="relative inline-block">
              <TypeAnimation
                sequence={[
                  'Deploy',
                  3000,
                  'Manage',
                  3000,
                  'Secure',
                  3000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={false}
                className="text-secondary"
              />
              <span className="custom-cursor">|</span>
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-0">
              your code, with ZERO knowledge of devops.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-text mb-6 font-body">
            We offer AI-powered cloud services to small businesses and
            developers to deploy, manage and scale their code.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                bg-secondary text-background text-center
                px-6 py-3 rounded-md text-sm sm:text-base
                font-body font-bold ${btnAnimation}
              `}
            >
              Join Waitlist
            </a>
            <button
              onClick={handleVideoClick}
              className={`
                lg:hidden bg-primary text-background
                px-6 py-3 rounded-md text-sm sm:text-base
                font-body font-bold ${btnAnimation}
              `}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Image and Video Container */}
      <div className="hidden lg:block relative w-full lg:w-1/2">
        <img
          src="/api/placeholder/600/400"
          alt="Hero illustration"
          className="w-full h-auto rounded-lg"
        />
        <div
          className="absolute bottom-[14%] left-[1.8%] cursor-pointer w-[29.1%]"
          onClick={handleVideoClick}
        >
          <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-4xl">▶️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl z-10"
            >
              ✕
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <span className="text-white text-4xl">Video Player Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-cursor {
          font-family: monospace;
          animation: blink 0.7s infinite;
          position: absolute;
          bottom: 0;
          right: -0.5em;
          font-size: 1em;
        }
        @keyframes blink {
          0%, 100% { opacity: 0 }
          50% { opacity: 1 }
        }
      `}</style>
    </section>
  );
};

export default Hero;