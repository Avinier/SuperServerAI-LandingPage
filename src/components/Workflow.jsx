import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  return [ref, isInView];
};

const personas = [
  { id: "llms", label: "I AM A FOUNDER", icon: "🤵" },
  { id: "models", label: "I AM A NON-DEVOPS DEVELOPER", icon: "🧑‍💻" },
  { id: "projects", label: "I MANAGE TEAMS", icon: "👩‍💼" },
];

const contentData = {
  llms: {
    title: "FOR TECHNICAL/NON-TECHNICAL FOUNDERS",
    description: "Founders who don't have a dedicated server team and don't want to spend on the human resources",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "With our intuitive chatbot and easy-to-understand dashboard, founders can now work on thier own business, without worrying about code deployment!",
      }
    ],
  },
  models: {
    title: "FOR DEVELOPERS AND DEV TEAMS",
    description: "Developers need not worry about serverside technicalities, and can build the things that matter.",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Empowering developers and teams who don't have the skillset to handle serverside deployments, with our seamless deployment piplelines",
      },
    ],
  },
  projects: {
    title: "FOR ML PROJECT LEADERS",
    description: "Facilitating seamless project management and team collaboration in ML initiatives",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Gain real-time insights into project progress, resource allocation, and model performance to make informed decisions.",
      },
    ],
  },
  production: {
    title: "FOR PROGRAM MANAGERS",
    description: "Technical managers can also use our product and direct teams to do so.",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Monitor server deployments, get valuable insights, to handle costs, and manage your team well.",
      },
    ],
  },
};

const ContentSection = ({ image, info, index, isVisible }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 w-full mx-auto mb-16 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      } transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={image}
          className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          alt="Workflow"
        />
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <p className="text-gray-700 text-lg leading-relaxed font-medium font-body">
          {info}
        </p>
      </div>
    </div>
  );
};

const WorkFlow = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const content = contentData[selectedPersona];
  const [contentRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsContentVisible(true);
    }
  }, [isInView]);

  const handlePersonaChange = (newPersona) => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedPersona(newPersona);
      setIsChanging(false);
    }, 300); // This should match the transition duration
    setIsOpen(false);
  };

  return (
    <section className="bg-background min-h-screen text-text py-16 px-4 md:px-8">
      <h2 className="text-4xl md:text-4xl font-heading text-text font-bold text-center mb-8 transition-all duration-500 ease-in-out -translate-y-4 animate-fade-in-down">
        Who Benefits from Our Product?
      </h2>
      <div className="relative w-64 sm:w-80 md:w-96 mx-auto my-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 w-full h-10 sm:h-12 md:h-16 rounded-lg text-xs sm:text-sm md:text-lg font-semibold flex items-center justify-between shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            <span className="mr-2 md:mr-3 text-lg sm:text-xl md:text-2xl">{personas.find((p) => p.id === selectedPersona).icon}</span>
            <span className="truncate text-body">{personas.find((p) => p.id === selectedPersona).label}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl z-10 overflow-hidden transition-all duration-200 ease-in-out">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => handlePersonaChange(persona.id)}
                className="block w-full text-left px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
              >
                <span className="mr-2 md:mr-3 text-lg sm:text-xl md:text-2xl">{persona.icon}</span>
                <span className="truncate">{persona.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        ref={contentRef}
        className={`mt-12 max-w-5xl mx-auto transition-all duration-300 ease-in-out ${
          isChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <div
          key={selectedPersona}
          className="text-center mb-16 transition-all duration-500 ease-in-out"
        >
          <h3 className="text-md md:text-base lg:text-xl font-heading font-bold text-primary mb-4">
            {content.title}
          </h3>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>
        <div className="space-y-16">
          {content.sections.map((section, index) => (
            <ContentSection
              key={`${selectedPersona}-${index}`}
              {...section}
              index={index}
              isVisible={isContentVisible && !isChanging}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;