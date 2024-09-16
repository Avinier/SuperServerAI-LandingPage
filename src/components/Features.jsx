import React, { useEffect, useRef, useState } from "react";


const FeatureCard = ({ feature, index, visibleFeatures }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden h-64 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl ${visibleFeatures.includes(index) ? "animate-fadeInUp" : "opacity-0"
      }`}
  >
    <div className="p-6 h-full flex flex-col relative group">
      <div className="flex flex-col items-center justify-center h-full transition-all duration-300 ease-in-out group-hover:opacity-0">
        <div className="mb-4 text-primary text-4xl">{feature.icon}</div>
        <h3 className="font-semibold text-xl font-heading text-center text-gray-800">
          {feature.title}
        </h3>
      </div>

      <div className="absolute inset-0 p-6 flex items-center justify-center bg-secondary cursor-pointer text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <p className="text-center font-body text-bold text-xl">{feature.description}</p>
      </div>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: (
        <img src="/images/chatbot.png" alt="Deployment Chatbot" className="size-36 mx-auto" />
      ),
      title: "Deployment Chatbot",
      description: "Deploy your code with ease using our AI-powered chatbot."
    },
    {
      icon: (
        <img src="/images/dashboard.png" className="size-36 mx-auto" />

      ),
      title: "Intuitive Dashboard",
      description: "Manage your code and gain AI-driven insights through our intuitive dashboard."
    },
    {
      icon: (
        <img src="/images/shield.png" className="size-36 mx-auto" />
      ),
      title: "Maintenance and Security",
      description: "Enjoy continuous security monitoring and automated maintenance of your code."
    },
    {
      icon: (
        <img src="/images/database-storage.png" className="size-36 mx-auto" />

      ),
      title: "DB Profiling",
      description: "Optimize your database performance with our advanced DB profiling feature."
    },
    {
      icon: (
        <img src="/images/cloud.png" className="size-36 mx-auto" />

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
        }, index * 300);
      });
    }
  }, [animationStarted]);

  return (
    <section className="py-20 relative bg-primary overflow-hidden rounded-tr-[120px] rounded-br-[120px]">
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <h2 className="text-[50px] md:text-5xl font-heading text-center text-white">
          Our Features
        </h2>
        <p className="text-md md:text-2xl lg:text-xl lg:my-6 text-bold text-center font-body text-white max-w-3xl mx-auto">
          Our features ensure that you can focus on building your code while we handle the deployment, maintenance, and security.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:w-[80%] mx-auto">
          {/* Top row with 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} visibleFeatures={visibleFeatures} />
            ))}
          </div>
          {/* Bottom row with 2 centered cards */}
          <div className="flex justify-center gap-8">
            {features.slice(3, 5).map((feature, index) => (
              <div key={index + 3} className="w-full sm:w-1/2 lg:w-1/3">
                <FeatureCard feature={feature} index={index + 3} visibleFeatures={visibleFeatures} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;