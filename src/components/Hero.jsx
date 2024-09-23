import React, { useEffect, useState, useRef } from "react";
import "../styles/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const btnAnimation =
    "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";

  return (
    <section
      className={`bg-background flex flex-col lg:flex-row min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold mb-4 font-heading text-text">
            Seamlessly deploy your code, with{" "}
            <span className="text-secondary">ZERO</span> knowledge of devops.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-text mb-6 font-body">
            We aim to offer AI-powered services to small businesses and
            developers to deploy and manage their code.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-secondary text-background px-6 py-3 rounded-md text-base sm:text-lg font-body ${btnAnimation}`}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Image and Video Container */}
      <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/images/hero-image1.png"
          alt="Hero image"
          className="w-full h-auto rounded-lg shadow-lg"
        />

        {/* Video Thumbnail */}
        <div
          className="absolute bottom-4 left-4 cursor-pointer w-1/3 sm:w-1/4 min-w-[120px] max-w-[208px]"
          onClick={handleVideoClick}
        >
          <div className="relative w-full pb-[56.25%]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div
            className="bg-white rounded-lg relative w-full max-w-3xl"
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