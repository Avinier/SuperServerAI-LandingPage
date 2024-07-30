import React, { useEffect, useState } from "react";
import "../styles/hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  let btnAnimation =
    "transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";
  return (
    <section
      className={`bg-background flex flex-col lg:flex-row h-fit items-center justify-around p-6 lg:p-[100px] pb-8 lg:pb-[120px] ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="items-center h-fit w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="text-center lg:text-left max-w-2xl px-4">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 font-heading text-text">
            Seamlessly manage, maintain and secure your code infrastructure{" "}
            <span className="text-accent">with AI</span>
          </h1>
          <p className="text-lg lg:text-xl text-text mb-8 font-body">
            Put the joy back in running your business. Work faster and reduce
            errors with automated payroll, HR, and more.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary text-background px-6 py-3 lg:px-[40px] lg:py-[15px] rounded-md text-lg lg:text-[1.6rem] font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
              Get Started
            </button>
            <button className="bg-secondary text-text px-6 py-3 lg:px-[40px] lg:py-[15px] rounded-md text-lg lg:text-[1.6rem] font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <img
        src="/images/hero-image1.jpg"
        alt="Hiring"
        className="object-cover h-[300px] lg:h-[500px] w-full lg:w-[700px] rounded-md shadow-lg transition-transform duration-300"
      />
    </section>
  );
}

export default Hero;
