import React, { useEffect, useState, useRef } from "react";
import "../styles/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null); // Ref to access the video element

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoClick = () => {
    // Open modal or make video fullscreen
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Safari
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE11
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleModalClick = (e) => {
    // Close modal when clicking outside the video content
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  let btnAnimation =
    "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";

  return (
    <section
      className={`bg-background flex flex-col lg:flex-row h-fit w-full items-center justify-around px-[20px] lg:py-[60px] lg:px-0 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      {/* Text Content */}
      <div className="items-center h-fit w-full lg:w-1/2 mb-6 lg:mb-0">
        <div className="text-center lg:text-left max-w-2xl px-3 ml-[40px]">
          <h1 className="text-xl lg:text-[40px] leading-[1.2] font-bold mb-3 font-heading text-text text-center">
            Seamlessly deploy your code, with{" "}
            <span className="text-secondary">ZERO</span> knowledge of devops.
          </h1>
          <p className="text-base lg:text-lg text-text mb-6 font-body text-center">
            We aim to offer AI-powered services to small businesses and
            developers to deploy and manage their code.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-secondary text-background px-5 py-2 mx-auto lg:px-10 lg:py-3 rounded-md text-base lg:text-xl font-body ${btnAnimation}`}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Image and Video Container */}
      <div className="relative w-[60%] mr-[40px] transition-transform duration-300">
        {/* Hero Image */}
        <img
          src="/images/hero-image1.png"
          alt="Hero image"
          className="w-full"
        />

        {/* Video Thumbnail */}
        <div
          className="absolute bottom-12 left-2 cursor-pointer"
          onClick={handleVideoClick}
        >
          <div style={{ top: '-24px', left: '4px' }} className="relative w-[208px] h-[102px]">
            <video
              ref={videoRef} // Attach ref to the video element
              autoPlay
              muted
              loop
              playsInline
              style={{
                borderRadius: '10px', // Adjust the value for more or less rounding
                pointerEvents: 'auto', // Allow click for 4ullscreen
              }}
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Modal with Fullscreen Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div
            className="bg-white p-4 rounded-lg relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.loom.com/embed/aa2a3e920c5e43569facbfca924a6213?sid=3e2cd9bf-9945-4077-9b08-2fc24907a304"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
