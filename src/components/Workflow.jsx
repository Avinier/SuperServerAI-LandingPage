import React, { useState, useEffect, useRef } from "react";

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
  { id: "llms", label: "I DEVELOP WITH LLMS", icon: "👨‍💻" },
  { id: "models", label: "I TRAIN MODELS", icon: "🧠" },
  { id: "projects", label: "I LEAD ML PROJECTS", icon: "👩‍💼" },
  { id: "production", label: "I MANAGE MODEL PRODUCTION", icon: "🏭" },
];

const contentData = {
  llms: {
    title: "FOR GENERATIVE AI SOFTWARE DEVELOPERS",
    description:
      "Designed to help software developers deploy GenAI applications with confidence",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "FIRST Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
    ],
  },
  models: {
    title: "USERBASE 2",
    description:
      "Designed to help software developers deploy GenAI applications with confidence",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "SECOND Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
    ],
  },
  projects: {
    title: "USERBASE 3",
    description:
      "Designed to help software developers deploy GenAI applications with confidence",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "THIRD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
    ],
  },
  production: {
    title: "USERBASE 4",
    description:
      "Designed to help software developers deploy GenAI applications with confidence",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: " FOURTHLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
      {
        image: "/images/workflow-image1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      },
    ],
  },
};

const PersonaDropdown = ({ selectedPersona, setSelectedPersona }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full md:w-fit mx-auto my-3 md:my-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent text-text px-3 md:px-6 py-5 md:py-3 w-full md:w-80 h-12 md:h-16 mx-auto rounded-md text-sm md:text-base font-body flex items-center justify-between transition-all duration-300 hover:shadow-lg"
      >
        <div className="w-fit mx-auto flex items-center text-text">
          <span className="mr-2">
            {personas.find((p) => p.id === selectedPersona).icon}
          </span>
          <span>{personas.find((p) => p.id === selectedPersona).label}</span>
        </div>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-background text-text text-bold rounded-md shadow-lg z-10">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => {
                setSelectedPersona(persona.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm md:text-base font-body hover:bg-gray-100"
            >
              <span className="mr-2">{persona.icon}</span>
              <span>{persona.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ContentSection = ({ image, info, index, isVisible }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full mx-auto mb-8 md:mb-12 ${index % 2 === 0 ? "" : "md:flex-row-reverse"} ${isVisible ? "opacity-100 translate-y-0 transition-all duration-500 ease-out" : "opacity-0 translate-y-5"}`}
    >
      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
        <img
          src={image}
          className="w-full h-auto object-cover rounded-lg shadow-md"
          alt="Workflow"
        />
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <p className="text-text text-sm leading-snug md:text-base md:leading-normal font-body">
          {info}
        </p>
      </div>
    </div>
  );
};

const WorkFlow = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);
  const [isChanging, setIsChanging] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const content = contentData[selectedPersona];
  const [contentRef, isInView] = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (isInView) {
      setIsContentVisible(true);
    }
  }, [isInView]);
  const handlePersonaChange = (newPersona) => {
    setIsChanging(true);
    setIsContentVisible(false);
    setTimeout(() => {
      setSelectedPersona(newPersona);
      setIsChanging(false);
      setIsContentVisible(true);
    }, 300);
  };

  return (
    <section className="bg-background min-h-screen text-white mb-[40px] p-2 md:p-4 pb-6 md:pb-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center font-heading text-text pt-6 md:pt-10 mb-3 md:mb-4">
        What types of users use our product
      </h2>
      <PersonaDropdown
        selectedPersona={selectedPersona}
        setSelectedPersona={handlePersonaChange}
      />
      <div
        ref={contentRef}
        className={`mt-4 md:mt-6 gap-3 sm:gap-6 w-[70%] mx-auto mb-6 transition-opacity duration-300 ease-in-out ${isChanging ? "opacity-0" : "opacity-100"}`}
      >
        <div
          className={`${isContentVisible ? "opacity-100 translate-y-0 transition-all duration-500 ease-out" : "opacity-0 translate-y-5"}`}
        >
          <h2 className="text-base md:text-lg text-center font-heading text-text mb-3 md:mb-2">
            {content.title}
          </h2>
          <p className="text-background text-xl md:text-sm text-center font-body text-text mb-3 md:mb-4 px-2 md:px-0 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          {content.sections.map((section, index) => (
            <ContentSection
              key={index}
              {...section}
              index={index}
              isVisible={isContentVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default WorkFlow;