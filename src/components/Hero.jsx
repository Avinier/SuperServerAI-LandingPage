import React, { useState, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import "../styles/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const btnAnimation =
    "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";

  return (
    <section
      className={`bg-background flex flex-col lg:flex-row min-h-min w-full items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-20 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <div className="lg:text-left max-w-xl mx-auto lg:mx-4">
          <h1 className="text-3xl text-center sm:text-3xl lg:text-4xl xl:text-4xl leading-tight font-bold mb-4 font-heading text-text">
            Seamlessly
            <br className="block lg:hidden" /> {/* Line break for mobile */}
            <div className="relative inline-block">
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
                className="text-secondary"
                repeat={Infinity}
                cursor={false}
              />
              <span className="custom-cursor">|</span>
            </div>
            <br />
            your code, with ZERO knowledge of devops.
          </h1>
          <style jsx>{`
            .custom-cursor {
              font-family: 'Courier New', monospace;
              animation: blink 0.7s infinite;
              display: inline-block;
              margin-left: -8px;
              font-size: 1.3em;
              line-height: 1;
              vertical-align: text-top;
            }
            @keyframes blink {
              0% { opacity: 0 }
              50% { opacity: 1 }
              100% { opacity: 0 }
            }
          `}</style>
          <p className="text-base text-center sm:text-lg lg:text-xl text-text mb-6 font-body">
            We offer AI-powered cloud services to small businesses and
            developers to deploy, manage and scale their code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-secondary text-background lg:mx-auto sm:mx-12 text-center px-6 py-3 rounded-md text-base sm:text-lg font-body font-bold ${btnAnimation}`}
            >
              Join Waitlist
            </a>
            <button
              onClick={handleVideoClick}
              className={`lg:hidden bg-primary text-background px-6 py-3 rounded-md text-base sm:text-lg font-body font-bold ${btnAnimation}`}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
      {/* Image and Video Container */}
      <div className="hidden lg:block relative w-1/2">
        <img
          src="/images/hero-image1.png"
          alt="Hero image"
          className="w-full h-auto rounded-lg"
        />

        <div
          className="absolute bottom-[28.7%] left-[17.8%] cursor-pointer w-[40%] lg:w-[51.7%] max-w-none"
          onClick={handleVideoClick}
        >
          <div className="relative w-full pb-[56.25%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
              style={{
                borderRadius: '10px',
                pointerEvents: 'auto',
              }}
            >
              <source src="https://aniruddhagps.com/quantumsenses/final-demo_editted.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Modal with Fullscreen Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
            >
              ✕
            </button>
            <div className="relative pb-[56.25%] h-0">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 rounded-md"
                controls
                autoPlay
                muted={false}
                volume={1.0}
              >
                <source src="https://aniruddhagps.com/quantumsenses/final-demo_editted.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;