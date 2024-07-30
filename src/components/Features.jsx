import React, { useEffect, useRef, useState } from "react";
import "../styles/features.css";
function Features() {
  const features = [
    { icon: "⏱️", title: "Time Tracking" },
    { icon: "📊", title: "Performance Management" },
    { icon: "📈", title: "Insights and Reporting" },
    { icon: "🆕", title: "New Business" },
    { icon: "🌐", title: "Remote Teams" },
  ];
  const [animationStarted, setAnimationStarted] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.8 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [animationStarted]);

  useEffect(() => {
    if (animationStarted) {
      features.forEach((_, index) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  }, [animationStarted]);

  return (
    <section className="pb-20 relative bg-background overflow-hidden">
      {/* Ribbon background */}
      <div className="absolute left-0 right-0 h-[150%] bg-primary transform -skew-y-3 origin-top-left z-0"></div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <h2 className="text-3xl lg:text-4xl font-bold text-center font-heading text-background pt-16 lg:pt-[150px]">
          Our Features
        </h2>
        <p className="text-lg lg:text-xl font-body text-center text-background mb-7 mt-5 px-4">
          We offer a wide range of features blah blah blah which helps the user
          lbah blah blah
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 ${
                visibleFeatures.includes(index)
                  ? "animate-fadeInUp"
                  : "opacity-0"
              }`}
            >
              <div className="text-4xl lg:text-5xl mb-4 bg-blue-100 rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto">
                {feature.icon}
              </div>
              <h3 className="font-semibold font-body text-body text-lg lg:text-xl text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
