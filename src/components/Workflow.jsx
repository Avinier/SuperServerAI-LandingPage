import React, { useState, useEffect, useRef } from "react";

const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
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
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
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
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
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
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
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
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
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
        className="bg-accent text-text px-3 md:px-6 py-2 md:py-3 w-full md:w-80 h-12 md:h-16 mx-auto rounded-md text-sm md:text-base font-body flex items-center justify-between transition-all duration-300 hover:shadow-lg"
      >
        <div className="w-fit mx-auto flex items-center">
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
        <div className="absolute mt-1 w-full bg-background text-text rounded-md shadow-lg z-10">
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

const ContentSection = ({ image, info, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full md:w-4/5 mx-auto mb-6 md:mb-12 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      } ${
        isInView
          ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex-1 px-3 md:px-0">
        <p className="text-background text-sm md:text-base font-body my-2 md:m-4">
          {info}
        </p>
      </div>
      <div className="flex-1">
        <img
          src={image}
          className="w-full md:w-96 object-cover rounded-lg shadow-lg my-2 md:m-4"
          alt="Workflow"
        />
      </div>
    </div>
  );
};

const WorkFlow = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);
  const [isChanging, setIsChanging] = useState(false);
  const content = contentData[selectedPersona];
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5 });
  const handlePersonaChange = (newPersona) => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedPersona(newPersona);
      setIsChanging(false);
    }, 300);
  };
  return (
    <section className="bg-secondary min-h-screen text-white p-3 md:p-6 pb-10 md:pb-16">
      <h2 className="text-xl md:text-3xl font-bold text-center font-heading text-white pt-12 md:pt-20 mb-5 md:mb-6">
        What types of users use our product
      </h2>
      <PersonaDropdown
        selectedPersona={selectedPersona}
        setSelectedPersona={handlePersonaChange}
      />
      <div
        className={`mt-6 md:mt-12 transition-opacity duration-300 ease-in-out ${
          isChanging ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          ref={titleRef}
          className={`${
            isTitleInView
              ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-lg md:text-xl text-center font-body text-background mb-2 md:mb-3">
            {content.title}
          </h2>
          <p className="text-background text-sm md:text-base text-center font-body mb-6 md:mb-10 px-3 md:px-0">
            {content.description}
          </p>
        </div>
        <div>
          {content.sections.map((section, index) => (
            <ContentSection key={index} {...section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkFlow;
