import React, { useEffect, useRef, useState } from "react";

const FeatureCard = ({ feature, index, visibleFeatures }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden h-auto sm:h-52 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
      visibleFeatures.includes(index) ? "animate-fadeInUp" : "opacity-0"
    }`}
  >
    <div className="p-4 h-full flex flex-col relative group">
      <div className="flex flex-col items-center justify-center h-full transition-all duration-300 ease-in-out group-hover:opacity-0">
        <div className="mb-3 text-primary text-3xl">{feature.icon}</div>
        <h3 className="font-semibold text-lg sm:text-xl font-heading text-center text-gray-800">
          {feature.title}
        </h3>
      </div>

      <div className="absolute inset-0 p-4 flex items-center justify-center bg-secondary cursor-pointer text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-center font-body text-base sm:text-lg">{feature.description}</p>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: (
        <img src="/images/chatbot.png" alt="Deployment Chatbot" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
      ),
      title: "Deployment Chatbot",
      description: "Deploy your code with ease using our AI-powered chatbot."
    },
    {
      icon: (
        <img src="/images/dashboard.png" alt="Intuitive Dashboard" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
      ),
      title: "Intuitive Dashboard",
      description: "Manage your code and gain AI-driven insights through our intuitive dashboard."
    },
    {
      icon: (
        <img src="/images/shield.png" alt="Maintenance and Security" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
      ),
      title: "Maintenance and Security",
      description: "Enjoy continuous security monitoring and automated maintenance of your code."
    },
    {
      icon: (
        <img src="/images/database-storage.png" alt="DB Profiling" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
      ),
      title: "DB Profiling",
      description: "Optimize your database performance with our advanced DB profiling feature."
    },
    {
      icon: (
        <img src="/images/cloud.png" alt="Enterprise-Grade Cloud Management" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
      ),
      title: "Enterprise-Grade Cloud Management",
      description: "Focus on your code while we manage your cloud infrastructure at an enterprise level."
    },
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
      { threshold: 0.2 }
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
        }, index * 200);
      });
    }
  }, [animationStarted]);

  return (
    <section className="py-8 sm:py-12 relative bg-primary overflow-hidden rounded-tr-[40px] sm:rounded-tr-[80px] rounded-br-[40px] sm:rounded-br-[80px]">
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-center text-white mb-4">
          Our Features
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-center font-body text-white max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
          Our features ensure that you can focus on building your code while we handle the deployment, maintenance, and security.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full sm:w-[90%] lg:w-[75%] mx-auto">
          {/* All cards in a single column layout for mobile, then grid for larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} visibleFeatures={visibleFeatures} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;