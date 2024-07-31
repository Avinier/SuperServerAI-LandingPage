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
      className={`bg-background flex flex-col lg:flex-row h-fit items-center justify-around p-4 lg:p-20 pb-6 lg:pb-24 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="items-center h-fit w-full lg:w-1/2 mb-6 lg:mb-0">
        <div className="text-center lg:text-left max-w-xl px-3">
          <h1 className="text-xl lg:text-3xl font-bold mb-3 font-heading text-text">
            {" "}
            Seamlessly manage, maintain and secure your code infrastructure{" "}
            <span className="text-accent">with AI</span>
          </h1>
          <p className="text-base lg:text-lg text-text mb-6 font-body">
            Put the joy back in running your business. Work faster and reduce
            errors with automated payroll, HR, and more.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              className={`bg-primary text-background px-5 py-2 lg:px-8 lg:py-3 rounded-md text-base lg:text-xl font-body ${btnAnimation}`}
            >
              Get Started
            </button>
            <button
              className={`bg-secondary text-text px-5 py-2 lg:px-8 lg:py-3 rounded-md text-base lg:text-xl font-body ${btnAnimation}`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <img
        src="/images/hero-image1.jpg"
        alt="Hiring"
        className="object-cover h-60 lg:h-[400px] w-full lg:w-[560px] rounded-md shadow-lg transition-transform duration-300"
      />
    </section>
  );
}
export default Hero;
