import React, { useState, useEffect, useRef } from 'react';

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
  { id: 'llms', label: 'I DEVELOP WITH LLMS', icon: '👨‍💻' },
  { id: 'models', label: 'I TRAIN MODELS', icon: '🧠' },
  { id: 'projects', label: 'I LEAD ML PROJECTS', icon: '👩‍💼' },
  { id: 'production', label: 'I MANAGE MODEL PRODUCTION', icon: '🏭' },
];

const contentData = {
  llms: {
    title: 'FOR GENERATIVE AI SOFTWARE DEVELOPERS',
    description: 'Designed to help software developers deploy GenAI applications with confidence',
    sections: [
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    ],
  },
  models: {
    title: 'USERBASE 2',
    description: 'Designed to help software developers deploy GenAI applications with confidence',
    sections: [
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    ],
  },
  projects: {
    title: 'USERBASE 3',
    description: 'Designed to help software developers deploy GenAI applications with confidence',
    sections: [
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    ],
  },
  production: {
    title: 'USERBASE 4',
    description: 'Designed to help software developers deploy GenAI applications with confidence',
    sections: [
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
      { image: '/images/workflow-image1.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    ],
  },
};

const PersonaDropdown = ({ selectedPersona, setSelectedPersona }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-fit mx-auto my-7">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent text-text px-[30px] py-[5px] pt-[7px] w-[400px] h-[75px] mx-auto rounded-md text-[1.4rem] font-body flex items-center j transition-all duration-300 hover:shadow-lg"
      >
        <div className='w-fit mx-auto'>{personas.find(p => p.id === selectedPersona).icon} {personas.find(p => p.id === selectedPersona).label}</div>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-background text-text rounded-md shadow-lg">
          {personas.map(persona => (
            <button
              key={persona.id}
              onClick={() => {
                setSelectedPersona(persona.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 font-body hover:bg-gray-100"
            >
              {persona.icon} {persona.label}
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
        className={`flex flex-col md:flex-row items-center gap-8 w-[70%] mx-auto ${
          index % 2 === 0 ? '' : 'md:flex-row-reverse'
        } ${
          isInView
            ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex-1">
          <p className="text-background text-[1.3rem] font-body m-5">{info}</p>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt={`Section ${index + 1}`}
            className="w-[500px] object-cover rounded-lg shadow-lg m-5"
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
      <section className="bg-secondary min-h-750px text-white p-8 pb-20">
        <h2 className="text-4xl font-bold text-center font-heading text-white pt-[250px] mb-8">
          What types of users use our product
        </h2>
        <PersonaDropdown
          selectedPersona={selectedPersona}
          setSelectedPersona={handlePersonaChange}
        />
        <div
          className={`mt-16 transition-opacity duration-300 ease-in-out ${
            isChanging ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            ref={titleRef}
            className={`${
              isTitleInView
                ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl text-center font-body text-background mb-4">
              {content.title}
            </h2>
            <p className="text-background text-xl text-center font-body mb-12">
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