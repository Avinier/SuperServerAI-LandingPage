import React, { useEffect, useRef, useState } from 'react';
import '../styles/features.css';

function Features() {
  const features = [
    { icon: '⏱️', title: 'Time Tracking' },
    { icon: '📊', title: 'Performance Management' },
    { icon: '📈', title: 'Insights and Reporting' },
    { icon: '🆕', title: 'New Business' },
    { icon: '🌐', title: 'Remote Teams' },
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
      { threshold: 0.8 } // Trigger when 80% of the container is visible
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
          setVisibleFeatures(prev => [...prev, index]);
        }, index * 300); // 300ms delay between each feature
      });
    }
  }, [animationStarted]);

  return (
    <section className="pb-20 relative bg-background">
      {/* Ribbon background */}
      <div className="absolute left-0 right-0 min-h-[750px] bg-primary transform -skew-y-3 z-0"></div>
     
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <h2 className="text-4xl font-bold text-center font-heading text-background pt-[150px]">Our Features</h2>
        <p className='text-xl font-body text-center text-background mb-7 mt-5'>We offer a wide range of features blah blah blah which helps the user lbah blah blah</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white  rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 ${
                visibleFeatures.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <div className="text-5xl mb-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">{feature.icon}</div>
              <h3 className="font-semibold font-body text-body text-xl text-center">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;