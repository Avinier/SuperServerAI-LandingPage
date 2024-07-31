import React, { useEffect, useState } from "react";
import "../styles/aiinfo.css";

function AiInfo() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textBoxes = [
    { text: "Custom trained LLM", className: "md:top-1/4 md:left-1/4" },
    { text: "Advanced AI capabilities", className: "md:top-1/4 md:right-1/4" },
    { text: "Scalable solutions", className: "md:bottom-1/4 md:left-1/4" },
    { text: "24/7 Support", className: "md:bottom-1/4 md:right-1/4" },
  ];

  return (
    <section className="min-h-screen bg-background relative overflow-hidden px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-heading text-center text-text">
        What makes us different
      </h2>
      <p className="text-lg md:text-xl font-body text-center text-text mb-2 mt-5">
        Our custom trained LLM will help you blah blah
      </p>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center">
        <img
          src="/images/ai-image2.png"
          alt="ai-image"
          className="w-full max-w-[300px] mb-8 rounded-md animate-float"
        />
        {textBoxes.map((box, index) => (
          <div
            key={index}
            className={`bg-white p-4 font-body text-base rounded-md shadow-lg text-text w-full max-w-[300px] mb-4 animate-fadeIn ${
              scrollPosition > 100 * (index + 1) ? "opacity-100" : "opacity-0"
            }`}
          >
            {box.text}
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block relative w-full h-[600px]">
        <img
          src="/images/ai-image2.png"
          alt="ai-image"
          className="object-contain w-full h-full max-w-[800px] mx-auto rounded-md transition-transform duration-300 animate-float"
        />
        {textBoxes.map((box, index) => (
          <div
            key={index}
            className={`absolute ${
              box.className
            } bg-white p-4 font-body text-[1.2rem] rounded-md shadow-lg text-text animate-float opacity-0 transition-opacity duration-1000 ${
              scrollPosition > 300 * (index + 1) ? "opacity-100" : ""
            }`}
          >
            {box.text}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AiInfo;
