import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

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
  { id: "llms", label: "I DEVELOP WITH LLMs", icon: "👨‍💻" },
  { id: "models", label: "I TRAIN MODELS", icon: "🧠" },
  { id: "projects", label: "I LEAD ML PROJECTS", icon: "👩‍💼" },
  { id: "production", label: "I MANAGE MODEL PRODUCTION", icon: "🏭" },
];

const contentData = {
  llms: {
    title: "FOR GENERATIVE AI SOFTWARE DEVELOPERS",
    description: "Designed to help software developers deploy GenAI applications with confidence",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Streamline your LLM development process with our intuitive tools and APIs, enabling rapid prototyping and seamless integration.",
      }
    ],
  },
  models: {
    title: "FOR MODEL TRAINERS AND RESEARCHERS",
    description: "Empowering researchers and data scientists to train and refine ML models efficiently",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Access powerful compute resources and collaborative environments to accelerate your model training and experimentation workflows.",
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
    title: "FOR ML OPERATIONS MANAGERS",
    description: "Ensuring smooth deployment and management of ML models in production environments",
    sections: [
      {
        image: "/images/workflow-image1.jpg",
        info: "Monitor model performance, manage versioning, and orchestrate deployments with our robust MLOps toolkit.",
      },
    ],
  },
};

const ContentSection = ({ image, info, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 w-full mx-auto mb-16 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex-shrink-0 w-full md:w-1/2">
        <motion.img
          src={image}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
          alt="Workflow"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <p className="text-gray-700 text-lg leading-relaxed font-medium font-body">
          {info}
        </p>
      </div>
    </motion.div>
  );
};

const WorkFlow = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const content = contentData[selectedPersona];
  const [contentRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsContentVisible(true);
    }
  }, [isInView]);

  return (
    <section className="bg-background min-h-screen text-text py-16 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-4xl font-heading font-bold text-center mb-8"
      >
        Who Benefits from Our Product?
      </motion.h2>
      
      {/* Dropdown with decreased width for mobile */}
      <div className="relative w-64 sm:w-80 md:w-96 mx-auto my-6">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 w-full h-10 sm:h-12 md:h-16 rounded-lg text-xs sm:text-sm md:text-lg font-semibold flex items-center justify-between shadow-lg hover:bg-indigo-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <span className="mr-2 md:mr-3 text-lg sm:text-xl md:text-2xl">{personas.find((p) => p.id === selectedPersona).icon}</span>
            <span className="truncate text-body">{personas.find((p) => p.id === selectedPersona).label}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 w-full bg-white rounded-lg shadow-xl z-10 overflow-hidden"
            >
              {personas.map((persona) => (
                <motion.button
                  key={persona.id}
                  onClick={() => {
                    setSelectedPersona(persona.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                >
                  <span className="mr-2 md:mr-3 text-lg sm:text-xl md:text-2xl">{persona.icon}</span>
                  <span className="truncate">{persona.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 max-w-5xl mx-auto"
      >
        <motion.div
          key={selectedPersona}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-md md:text-base lg:text-xl font-heading font-bold text-primary mb-4">
            {content.title}
          </h3>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            {content.description}
          </p>
        </motion.div>
        <div className="space-y-16">
          {content.sections.map((section, index) => (
            <ContentSection
              key={`${selectedPersona}-${index}`}
              {...section}
              index={index}
              isVisible={isContentVisible}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkFlow;